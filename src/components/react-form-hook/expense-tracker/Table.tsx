import React from 'react'

interface Expense{
	description: string;
	amount: number;
	category: string;
  
  }
  
  interface Expenses{
	expenses: Expense[];
  }

const Table = ({expenses}: Expenses) => {
  return (
	<div>
		<table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
			<thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<th scope="col" className="px-6 py-3">Description</th>
					<th scope="col" className="px-6 py-3">Amount</th>
					<th scope="col" className="px-6 py-3">Category</th>
					<th scope="col" className="px-6 py-3">Action</th>
				</tr>
			</thead>
			<tbody>
				{
					expenses.map((expense, index) =>
						<tr key={index}>
							<td>{expense.description}</td>
							<td>{expense.amount}</td>
							<td>{expense.description}</td>
							<td></td>
						</tr>
					)
				}
			</tbody>
		</table>
	</div>
  )
}

export default Table