import React, { useState, useReducer } from 'react';

// custom hooks for form component return formState, formDispatch, handleFormName, handleFormDesc
function useForm() {
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

  const initialForm = { name: '', desc: '' };
  
	const [ formState, formDispatch ] = useReducer(formReducer, initialForm);

	const handleFormName = (event) => {
		formDispatch({ type: 'ADD_NAME', payload: { name: event.target.value } });
		event.preventDefault();
	};

	const handleFormDesc = (event) => {
		formDispatch({ type: 'ADD_DESC', payload: { desc: event.target.value } });
		event.preventDefault();
	};

  return { formState, formDispatch, handleFormName, handleFormDesc };
  
}

export { useForm };
