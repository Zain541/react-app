import React, { ChangeEvent, DOMAttributes } from 'react'

interface Props{
	placeholder?: string;
	value?: string;
	onInputChange: (value: string) => void;
}

const Input = ({placeholder = 'Enter Value', onInputChange, value}: Props) => {
	const handleKeyUp = (event: React.ChangeEvent<HTMLInputElement>) => {
		onInputChange(event.target.value);
	}
  return (
	<div>
		<input onChange={handleKeyUp} type="text" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 w-1/2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} value={value}/>
	</div>
  )
}

export default Input