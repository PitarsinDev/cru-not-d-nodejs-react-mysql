import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

import AddEmployee from './App/AddEmployee'
import DeleteEmployee from './App/DeleteEmployee'

function App() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, [])

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:3001/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  return (
    <>
      <AddEmployee />
      <div>
        <div className='flex justify-center'>
          <div className='p-5'>
            <h1 className='text-red-600 text-2xl'>
              List
            </h1>
            <div className='bg-red-600 w-5 h-1 rounded-full'></div>
          </div>
        </div>
        <div className='flex justify-center'>
          <ul>
            {employees.map(employee => (
              <li key={employee.id}>
                <span className='text-red-600'>ID: {employee.id}</span> Name: {employee.name} <span className='text-red-600'>Occupation: {employee.occupation}</span> Salary: {employee.salary}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <DeleteEmployee />
    </>
  )
}

export default App
