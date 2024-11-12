import React, { useState, useEffect } from 'react'
import Button from '../Button'
import Input from '../Input'
import List from './List';

const Users = () => {

	const [getinput, setInput] = useState('');

	const [users, setUsers] = useState<string[]>([]);

	const handleInputChange = (value: string) => {
		setInput(value);
	}

	const handleClick = () => {
		setUsers((prevUsers) => [...prevUsers, getinput]);
		setInput('');
	}

	const handleRmoveUser = (index: number) => {
		setUsers((prevUsers) => prevUsers.filter((_, i) => i !== index));
	}

	useEffect(() => {
		console.log('Users updated:', users);
	  }, [users]);

  return (
	<>
	<div className='flex flex-col gap-2'>
		<span className='w-25'><Input onInputChange={handleInputChange} value={getinput}></Input></span>
		<span><Button onClick={handleClick} buttonText='Add'></Button></span>
	</div>

	<div className='mt-12 flex flex-col gap-2'>
		<List users={users} removeUser={handleRmoveUser}></List>
	</div>
	</>
  )
}

export default Users