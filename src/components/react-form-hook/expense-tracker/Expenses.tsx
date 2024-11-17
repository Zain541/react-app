import React, { useState } from 'react'
import Table from './Table'
import Select from './Select';

interface Expense{
  description: string;
  amount: number;
  category: string;

}

interface Expenses{
  expenses: Expense[];
}

const Expenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([
    { description: 'Electricity Bills', amount: 10, category: 'Utility' },
  ]);

  const handleCategoryChange = (category: string) => {
    console.log(category, ' is being changesd');
  }


  return (
	<div className='w-3/4  border rounded-xl p-6 flex flex-col'>
    <div className='flex flex-row-reverse'>
        <div className='w-[60%] flex align-center py-4 justify-between'>

            <h1 className='text-xl text-center py-6'>
              Daily Expenses
            </h1>

            <Select onCategoryChange={handleCategoryChange}></Select>

        </div>
    </div>
      

    <Table expenses={expenses}></Table>

  </div>
  )
}

export default Expenses