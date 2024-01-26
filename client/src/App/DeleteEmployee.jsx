import React, { useState } from 'react'
import axios from 'axios';

function DeleteEmployee() {

    const [id, setId] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:3001/delete/${id}`)
            .then(res => {
                console.log(res.data);
                setId('');
            })
            .catch(err => console.error(err));
    };

  return (
    <div>
        <div className='flex justify-center'>
            <div className='p-5'>
                <h1 className='text-red-600 text-2xl'>
                    DeleteEmployee
                </h1>
                <div className='bg-red-600 w-5 h-1 rounded-full'></div>
            </div>
        </div>
        <div className='flex justify-center'>
            <form onSubmit={handleSubmit} className='flex gap-5'>
                <input 
                type="text" 
                placeholder='ID' 
                value={id} 
                className='border border-red-600 rounded-md pl-2 text-zinc-600'
                onChange={(e) => setId(e.target.value)} />
                <button type='submit' className='bg-red-600 text-white px-5 rounded-full shadow-md'>Delete Employees</button>
            </form>
        </div>
    </div>
  )
}

export default DeleteEmployee