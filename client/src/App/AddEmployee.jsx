import React, { useState } from 'react';
import axios from 'axios';

const AddEmployee = () => {
  const [name, setName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/add', { name, occupation, salary })
      .then(res => {
        console.log(res.data);
        setName('');
        setOccupation('');
        setSalary('');
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <div className='flex justify-center'>
        <div className='p-10'>
        <h2 className='text-red-600 text-2xl'>Add Employee</h2>
        <div className='bg-red-600 w-5 h-1 rounded-full'></div>
        </div>
      </div>
      <div className='flex justify-center'>
        <form onSubmit={handleSubmit}>
            <div className='flex gap-5'>
                <input type="text"
                placeholder="Name" 
                value={name} 
                className='border border-red-600 rounded-md pl-2 text-zinc-600'
                onChange={(e) => setName(e.target.value)} 
                 />
                <input type="text"
                 placeholder="Occupation"
                value={occupation} 
                className='border border-red-600 rounded-md pl-2 text-zinc-600'
                onChange={(e) => setOccupation(e.target.value)} />
                <input type="text" 
                placeholder="Salary" 
                value={salary} 
                className='border border-red-600 rounded-md pl-2 text-zinc-600'
                onChange={(e) => setSalary(e.target.value)} />
            </div>
            <div className='flex justify-center p-5'>
            <button type="submit" className='bg-red-600 text-white px-5 rounded-full shadow-md'>Add Employee</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;