import React from 'react'


interface Props{
	users: string[];
}

const List = ({users}: Props) => {
  return (
	<>
		{users.map((user, index) => <li key={index}>{user}</li>)}
	</>
  )
}

export default List