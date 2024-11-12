import React from 'react'
import Button from '../Button';


interface Props{
	users: string[];
	removeUser: (index: number) =>  void;
}

const List = ({users, removeUser}: Props) => {
  return (
	<>
		<ul className='flex flex-col gap-4'>

		{
		users.map((user, index) => 
			<li className='flex gap-6 cursor-pointer' key={index}>
				<span className='w-1/2'>{user}</span> 
				<span  className='w-1/2'><Button onClick={ () => removeUser(index)} classes='bg-red-600 p-2 text-white cursor-pointer' buttonText='Remove'></Button></span>
			</li>
			)
		}
		</ul>
	</>
  )
}

export default List