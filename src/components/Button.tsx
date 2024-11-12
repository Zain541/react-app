import React from 'react'

interface Props{
	buttonText: string;
	onClick: () => void;
}

const Button = ({buttonText, onClick}: Props) => {
  return (
	<button className='bg-gray-400 p-2 text-white cursor-pointer' onClick={onClick}>{buttonText}</button>
  )
}

export default Button