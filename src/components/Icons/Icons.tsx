import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

// https://react-icons.github.io/react-icons/

export const Icons = () => {

	const [status, setStatus] = useState(false);

	const handleClick = () => {
		setStatus(!status);
	}

	if(status === true)
		return (
			<FaHeart size="40" className='cursor-pointer text-red-500' onClick={handleClick} />	
		);

	return (
		<FaRegHeart size="40" className='cursor-pointer' onClick={handleClick}/>
	);

}
