import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import data from '../../../db'

function Rubbish() {
  const usersData = data.users;
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
                  <tr>
                    <td>{item.id_user}</td>
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
