import React, { useState } from 'react';
import Button from '../Button';
import { AddBug } from './AddBug';
import { BugsTable } from './BugsTable';

interface Bug {
	id: number;
	title: string;
	status: string;
}

export const Bugs = () => {
	const [bugs, setBugs] = useState<Bug[]>([]);

	const handleComplete = (index: number) => {
		setBugs(bugs.map(bug => 
			bug.id === index ? { ...bug, status: 'completed' } : bug
		));
	};

	const handleBugCreation = (newBug: Bug) => {
		setBugs([...bugs, newBug]);
	};

	return (
		<div className="border px-8 py-4">
			<h1 className="text-center text-xl mt-12">Bugs Table</h1>

			<div className="relative overflow-x-auto py-12">
				<BugsTable bugs={bugs} onComplete={handleComplete}></BugsTable>
			</div>

			<div>
				<AddBug onBugcreation={handleBugCreation} totalBugs={ bugs.length} />
			</div>
		</div>
	);
};
