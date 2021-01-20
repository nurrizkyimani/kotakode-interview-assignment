import React, { useState, useReducer } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Show from './components/Show';
import Form from './components/Form';

function App() {

	const [showModal, setShowModal] = React.useState(false);
	const [modalInfo, setModalInfo] = useState({ name: "", desc: "" });

	const handleDelete = (id) => {
		dispatchtodo({ type: 'REM', payload: { id: id } });
	};

	const reducer = (state, action) => {
		switch (action.type) {
			case 'ADD':
				return [ ...state, { id: uuidv4(), name: action.payload.name, desc: action.payload.desc } ];
			case 'REM':
				return state.filter((item) => item.id !== action.payload.id);
			default:
				return state;
		}
	};

	const initialState = [
		{ id: 1, name: 'open the door1', desc: 'bagus' },
		{ id: 2, name: 'close the doo1r', desc: 'bagus' }
	];

	//useReducer for submiting form
	const [ todostate, dispatchtodo ] = useReducer(reducer, initialState);


	return (
		<Router>
			<div>
				<Switch>
					<Route path="/">
						<div className="App flex justify-center ">
							<div className="longverticalcenter flex-col py-10 ">
								<div className="max-w-md p-10 bg-gray-200 rounded-md shadow-lg">
									<h1 className="text-lg font-sans   font-bold flex">
										{' '}
										Pekerjaan Rumah Yang Perlu Dilakukan{' '}
									</h1>

									{/* Form Component */}
									<Form
										dispatchtodo={dispatchtodo}
									/>
								
									{/* Todolist Component  */}
									<TodoList
										tasks={todostate}
										delButton={handleDelete}
										setShowModal={setShowModal}
										showModal={showModal}
										setModalInfo={setModalInfo}
									/>

									{/* Show Modal Compoenent */}
									<Show
										showModal={showModal}
										setShowModal={setShowModal}
										modalInfo={modalInfo}
									/>

								</div>
							</div>
						</div>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
