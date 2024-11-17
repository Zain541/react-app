import React from 'react';
import { categories } from '../../categories'

interface Props{
	onCategoryChange: (category: string)=> void
}


const Select = ({onCategoryChange}: Props) => {

	const handleCategoryChange = (category: string) => {
	console.log(category);
	}

  return (
	<div className='w-[50%]'>
		<select onChange={(event) => onCategoryChange(event.target.value)} className='bg-gray-50 border cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
		<option value="">All Categories</option>
		{
			categories.map((category) => <option value={category} key={category}>{category}</option>)
		}
		</select>
	</div>
  )
}

export default Select