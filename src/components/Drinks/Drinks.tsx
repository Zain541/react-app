import React, { useState } from 'react'
import Button from '../Button';

export const Drinks = () => {

	const [drinks, setDrinks] = useState({name: 'Coffee', price: 5});

	// setDrinks({
	// 	...drinks,
	// 	price: 6
	// });

  return (
	<>
		<h2 className='text-xl'>Drinks</h2>
		<table className='text-center table'>

			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				
				<tr>
					<td>
						{drinks.name}
					</td>
					<td>
						{drinks.price}
					</td>
				</tr>

			</tbody>
		</table>

		<Button onClick={() => setDrinks({...drinks, price: drinks.price+1})} buttonText='Increase Price!'></Button>
	</>
  )
}
