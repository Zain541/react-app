import React from 'react'
import Button from '../Button';


interface Bugs{
	id: number;
	title: string;
	status: string
}

interface bugsTableProps{
	bugs: Bugs[];
	onComplete: (id: number) => void;
}

export const BugsTable = ({bugs, onComplete}: bugsTableProps) => {

  return (
	<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3">ID</th>
							<th scope="col" className="px-6 py-3">Title</th>
							<th scope="col" className="px-6 py-3">Status</th>
							<th scope="col" className="px-6 py-3">Actions</th>
						</tr>
					</thead>
					<tbody>
						{bugs.length > 0 ? (
							bugs.map((bug) => (
								<tr key={bug.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
									<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
										{bug.id}
									</th>
									<td className="px-6 py-4">{bug.title}</td>
									<td className="px-6 py-4">{bug.status}</td>
									<td className="px-6 py-4 flex gap-2">
										<Button onClick={() => onComplete(bug.id)} buttonText="Complete" classes="bg-blue-400 p-2 text-white cursor-pointer" />
									</td>
								</tr>
							))
						) : (
							<tr>
								<td colSpan={4} className="text-center">No record found</td>
							</tr>
						)}
					</tbody>
				</table>
  )
}
