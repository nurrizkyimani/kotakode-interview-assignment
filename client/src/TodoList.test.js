import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import TodoList from './components/TodoList';
import { useReducer, useState } from 'react';
import { renderHook, act } from '@testing-library/react-hooks'
import {useTodoList} from './Hooks/useTodolist.js'

//Render the todo list correctly
test('Renders Todo List Correctly', async () => {

	const { result } = renderHook(() => useTodoList());
	

	const todoelem = render(
		<TodoList
			tasks={result.current.todostate}
			delButton={result.current.handleDelete}
			showModal={result.current.showModal}
			setModalInfo={result.current.setModalInfo}
		/>);

	const firstElement = todoelem.getByText(/open the door1/i);
	expect(firstElement).toBeInTheDocument();

	const secondElement = todoelem.getByText(/close the doo1r/i);
	expect(secondElement).toBeInTheDocument();

	// const delbutton = todoelem.getAllByLabelText("delete")
	// fireEvent.click(delbutton[0])	


});



