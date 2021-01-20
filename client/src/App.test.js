import React , { useReducer }   from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';

import Form from './components/Form';


//insert a test into the name input and test1 into the desc
test('insert input name and desc', () => {

  const input = render(<App />);

  const inputName = input.getByLabelText('label-name')
  fireEvent.change(inputName, { target: { value: "test" } })
  expect(inputName.value).toBe('test')

  const inputDesc = input.getByLabelText('label-desc')
  fireEvent.change(inputDesc, { target: { value: "test1" } })
  expect(inputName.value).toBe('test1')

});

//click the submit button if the submited value, the name, is exist in the component; 
test('click tambah button', () => {
  const input = render(<App />);
  
  const inputName = input.getByLabelText('label-name')
  fireEvent.change(inputName, { target: { value: "test-click" } })

  const submitButton = input.getByLabelText("submit")
  fireEvent.click(submitButton)

  expect(input.getByText('test-click'))
})


