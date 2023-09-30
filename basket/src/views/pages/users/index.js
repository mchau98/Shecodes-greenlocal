import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function Rubbish() {
  const usersData = [
      {
        id: 1,
        name: 'Alex',
        gender: 'Male',
        score: 50,
        email: 'alex@gmail.com',
      },
      {
        id: 2,
        name: 'Bee',
        gender: 'female',
        score: 10,
        email: 'bee@gmail.com',
      },
      {
        id: 3,
        name: 'Cynthia',
        gender: 'female',
        score: 100,
        email: 'cynthia@gmail.com',
      },
      {
        id: 4,
        name: 'David',
        gender: 'Male',
        score: 20,
        email: 'david@gmail.com',
      },
      {
        id: 5,
        name: 'Emma',
        gender: 'female',
        score: 4000,
        email: 'emma@gmail.com',
      },
      {
        id: 6,
        name: 'Felix',
        gender: 'Male',
        score: 500,
        email: 'felix@gmail.com',
      },
      {
        id: 7,
        name: 'Geogre',
        gender: 'Male',
        score: 2000,
        email: 'geogre@gmail.com',
      },
      {
        id: 8,
        name: 'Holland',
        gender: 'Male',
        score: 50000,
        email: 'hollandx@gmail.com',
      },
      {
        id: 9,
        name: 'Init',
        gender: 'Male',
        score: 1000,
        email: 'init@gmail.com',
      },
      
  ];
  return (
    <div>
      <div className='mt-4 container'>
        <div className='row'>
          <div className='col'>
            <h1 className="text-center">User Management</h1>
            <table className="table table-bordered table-success table-striped mt-10">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Score</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {usersData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.gender}</td>
                    <td>{item.score}</td>
                    <td>{item.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rubbish;
