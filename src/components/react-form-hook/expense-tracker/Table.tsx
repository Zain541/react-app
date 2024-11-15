import React from 'react'

const Table = () => {
  return (
	<div>
		<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
			<thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<th scope="col" className="px-6 py-3">Description</th>
					<th scope="col" className="px-6 py-3">Amount</th>
					<th scope="col" className="px-6 py-3">Category</th>
					<th scope="col" className="px-6 py-3">Action</th>
				</tr>
			</thead>
			<tbody>
			
			</tbody>
		</table>
	</div>
  )
}

export default Table