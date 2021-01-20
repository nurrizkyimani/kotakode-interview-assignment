import React from 'react';
import { useForm } from '../Hooks/useForm';

// Form Component with props dispatch 
export default function Form({dispatchtodo}) {

  const { formState, formDispatch, handleFormName, handleFormDesc } = useForm()
  // const [isEmpty, setIsEmpty] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.name !== "") {
      // setIsEmpty(false)
      dispatchtodo({ type: 'ADD', payload: { name: formState.name, desc: formState.desc } });  
      formDispatch({ type: 'RESET_ALL' });
      
    } else {
      // setIsEmpty(false)
    }
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<div className="my-4 flex flex-col space-y-3">
				<label className="block flex flex-col">
					<span className="text-gray-700 self-start">Nama Pekerjaan</span>
					<input
						aria-label="label-name"
						onChange={handleFormName}
						value={formState.name}
						className="form-input mt-1 shadow-md rounded-md block w-full h-10 px-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
						placeholder="Jane Doe"
					/>
				</label>

				<label className="block flex flex-col">
					<span className="text-gray-700 self-start">Deskripsi</span>
					<textarea
						aria-label="label-desc"
						value={formState.desc}
						onChange={handleFormDesc}
						className="form-textarea  shadow-md border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent mt-1 block w-full  rounded-md"
						rows="3"
						placeholder="Enter some long form content."
					/>
				</label>
			</div>

			<div className="flex flex-row-reverse">
				<button
					aria-label="submit"
					type="submit"
					className="px-3 text-black-500 font-semibold hover:shadow-inner transition duration-300 ease-in-out hover:bg-gray-300 rounded-md p-2"
				>
					Tambah
				</button>
			</div>
		</form>
	);
}
