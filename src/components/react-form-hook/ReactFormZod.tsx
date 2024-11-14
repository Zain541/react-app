import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import {FieldValues, useForm} from 'react-hook-form';
import { TypeOf, z } from 'zod';


const schema = z.object({
	name: z.string().min(3)
})

type FormData = z.infer<typeof schema>;

export const ReactFormZod = () => {
	const { register, handleSubmit, formState: { errors }} = useForm<FormData>({resolver: zodResolver(schema)});

	const onSubmit = (data: FieldValues) => {
		console.log(data);
	}
  return (
	<div className='py-6'>
		<h2 className='my-4 text-xl'>Form with React Hook & Zod</h2>
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='flex flex-col gap-3'>
				<input {...register('name')} className='bg-gray-50 w-1/2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Enter your name' type="text" />
				{
					errors.name &&
					<p className='text-red-500'>{errors.name.message}</p>
				}
				<span>
					<button type='submit' className='bg-gray-400 p-2 text-white cursor-pointer'>Submit</button>
				</span>
			</div>
		</form>
	</div>
  )
}
