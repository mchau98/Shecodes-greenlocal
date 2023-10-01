import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import data from '../../../db'

function Rubbish() {
  const wasteData = data.waste;

  // const [selectedLocal, setSelectedLocal] = useState('All');

  // const handleLocalChange = (event) => {
  //   setSelectedLocal(event.target.value);
  // };

  // const filteredWasteData = wasteData.filter((item) => {
  //   if (selectedLocal === 'All') {
  //     return true; // Hiển thị tất cả dữ liệu nếu 'All' được chọn
  //   }

  //   return item.local === selectedLocal; // Lọc theo local
  // });

  return (
    <div>
      <div className='mt-4 container'>
        <div className='row'>
          <div className='col'>
            <h1 className="text-center">Garbage statistics</h1>
            {/* <select className="form-select" aria-label="Default select example" 
            style={{width : '30%', marginLeft : '12px', marginBottom : '20px'}}
            value={selectedLocal} onChange={handleLocalChange}>
              {localOptions.map((localOption) => (
                <option key={localOption} value={localOption}>
                  {localOption}
                </option>
              ))}
            </select> */}
            <table className="table table-bordered table-success table-striped mt-10">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Quantity (kg)</th>
                </tr>
              </thead>
              <tbody>
                {wasteData && wasteData.map((item) => (
                  <tr key={item.id_bins}>
                    <td>{item.id_bins}</td>
                    <td>{item.type}</td>
                    <td>{item.date}</td>
                    <td>{item.quantity}</td>
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
