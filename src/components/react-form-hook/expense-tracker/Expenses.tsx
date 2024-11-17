import React, { useEffect, useState } from 'react'
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
    { description: 'Groceries', amount: 10, category: 'Grocery' },
  ]);

  const handleCategoryChange = (category: string) => {

    console.log(category);
    setExpenses(expenses.filter((expense) => expense.category == category));

    
  }

  useEffect(() => {
    console.log(expenses);
	  }, [expenses]);


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