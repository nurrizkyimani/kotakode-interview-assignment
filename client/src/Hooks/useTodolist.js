import { useReducer, useState } from 'react';


// custom hook for todolist component, return todostate, handleDelete, setShowModal, showModal, setModalInfo, dispatchtod
function useTodoList() {
	const [ showModal, setShowModal ] = useState(false);
	const [ modalInfo, setModalInfo ] = useState({ name: '', desc: '' });

	const handleDelete = (id) => {
		dispatchtodo({ type: 'REM', payload: { id: id } });
	};

	const formReducer = (state, action) => {
		switch (action.type) {
			case 'ADD_NAME':
				// console.log({...state,  name: action.payload.name,  });
				return { ...state, name: action.payload.name };
			case 'ADD_DESC':
				// console.log({...state,  desc: action.payload.desc,  });
				return { ...state, desc: action.payload.desc };
			case 'RESET_ALL':
				// console.log({...state,  desc: action.payload.desc,  });
				return { name: '', desc: '' };
			default:
				return state;
		}
	};

	const initialState = [
		{ id: 1, name: 'open the door1', desc: 'bagus' },
		{ id: 2, name: 'close the doo1r', desc: 'jelek' }
	];

	const [ todostate, dispatchtodo ] = useReducer(formReducer, initialState);

	return { todostate, handleDelete, setShowModal, showModal, setModalInfo, dispatchtodo };
}

export {
  useTodoList
}