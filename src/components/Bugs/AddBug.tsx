import React, { useState } from 'react'
import Input from '../Input'
import Button from '../Button';

interface Bugs{
	totalBugs: number;
	onBugcreation: (bug: { id: number; title: string; status: string }) => void;
}

export const AddBug = ({totalBugs, onBugcreation}: Bugs) => {
	const [bug, setBug] = useState({});
	const [newTitle, setTitle] = useState('');

	const handleTitle = (value: string) => {
		setTitle(value);
	}

	const handleClick = () => {
		onBugcreation({ id: totalBugs + 1, title: newTitle, status: 'In Progress' });
		// onBugcreation(bug);
	}
  return (
	<div className='flex flex-col gap-2'>
		<Input onInputChange={handleTitle}></Input>
		<span>
			<Button onClick={handleClick} buttonText='Add New Bug'></Button>
		</span>
	</div>
  )
}
