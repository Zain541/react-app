import React from 'react'
import Table from './Table'
import { categories } from '../../categories'

const Expenses = () => {
  return (
	<div className='w-3/4  border rounded-xl p-6 flex flex-col'>
    <div className='flex flex-row-reverse'>
        <div className='w-[60%] flex align-center py-4 justify-between'>

            <h1 className='text-xl text-center py-6'>
              Daily Expenses
            </h1>

            <div className='w-[50%]'>
              <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                <option value="">All Categories</option>
                {
                  categories.map((category) => <option value={category} key={category}>{category}</option>)
                }
              </select>
            </div>

        </div>
    </div>
      

    <Table></Table>

  </div>
  )
}

export default Expenses