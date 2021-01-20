import React from 'react';

// Todo list component with task, delButton, setShowModal, showModal, setModalInfo props
export default function TodoList({ tasks, delButton, setShowModal, showModal, setModalInfo }) {

	
	return (
		<div className="list-none space-y-4 py-4">
			{tasks.length < 1 ?
				<div aria-label="Delete-All">Empty</div>
				: tasks.map((task) => (
				<li key={task.id}>
					<div className="listbox p-4 flex shadow-lg overflow-hidden rounded-md bg-gray-100 justify-between transform hover:scale-105 duration-300 hover:shadow-xl">
						<p className="pt-2">{task.name}</p>

						<div className="space-x-2">
							<button
								
								aria-label="delete"
								className="px-3 text-black-500 font-semibold hover:shadow-inner transition duration-300 ease-in-out hover:bg-gray-300 rounded-md p-2"
								onClick={(e) => delButton(task.id)}
							>
								Delete
							</button>
							<button
								className=" tracking-normal px-3 text-black-500 font-semibold hover:shadow-inner transition duration-300 ease-in-out hover:bg-gray-300 rounded-md p-2"
								onClick={(e) => {
									setShowModal(!showModal);
									setModalInfo({ name: task.name, desc: task.desc });
								}}
							>
								Detail
							</button>
						</div>
					</div>
				</li>
			))}
		</div>
	);
}
