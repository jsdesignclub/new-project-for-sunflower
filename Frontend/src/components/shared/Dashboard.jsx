import React, { useEffect, useState } from 'react';
import axios from 'axios';



export const Dashboard = () => {
  const [vehicles, setVehicles] = useState([]);
  

  useEffect(() => {
      fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
      try {
          const response = await axios.get('http://localhost:5000/api/user');
          setVehicles(response.data);
      } catch (error) {
          console.error('Error fetching vehicles:', error);
      }
  };
  
  return (
      <div className="max-w-3xl mx-auto mt-10">
          <h2 className="text-2xl font-bold mb-4">User List</h2>
          <table className="min-w-full bg-white border border-gray-300">
              <thead>
                  <tr>
                      <th className="border px-4 py-2">User name</th>
                      <th className="border px-4 py-2">email</th>
                      <th className="border px-4 py-2">Actions</th>
                  </tr>
              </thead>
              <tbody>
                  {vehicles.map((vehicle) => (
                      <tr key={vehicle.ID}>
                          <td className="border px-4 py-2">{vehicle.Name}</td>
                          <td className="border px-4 py-2">{vehicle.email}</td>
                          <td className="border px-4 py-2 flex space-x-2">
                              
                              
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>

          
      </div>
  );
};