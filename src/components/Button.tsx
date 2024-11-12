import React from 'react'

interface Props{
	buttonText: string;
	onClick: (index?: number) => void;
	index?: number;
	classes?: string;
}

const Button = ({buttonText, onClick, index, classes='bg-gray-400 p-2 text-white cursor-pointer'}: Props) => {
  return (
	<button className={classes}  onClick={() => onClick(index)}>{buttonText}</button>
  )
}

export default Button