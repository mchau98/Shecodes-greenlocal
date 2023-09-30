import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function Rubbish() {
  const wasteData = [
      {
        id: 1,
        date: '2023-09-01',
        local: 'Local A',
        type: 'Plastic',
        quantity: 50,
      },
      {
        id: 2,
        date: '2023-09-01',
        local: 'Local B',
        type: 'Paper',
        quantity: 30,
      },
      {
        id: 3,
        date: '2023-09-02',
        local: 'Local A',
        type: 'Plastic',
        quantity: 60,
      },
    
  ];

  const [selectedLocal, setSelectedLocal] = useState('All');

  const handleLocalChange = (event) => {
    setSelectedLocal(event.target.value);
  };

  const filteredWasteData = wasteData.filter((item) => {
    if (selectedLocal === 'All') {
      return true; // Hiển thị tất cả dữ liệu nếu 'All' được chọn
    }

    return item.local === selectedLocal; // Lọc theo local
  });

  const localOptions = ['All', 'Local A', 'Local B', 'Local C', 'Local D'];

  return (
    <div>
      <div className='mt-4 container'>
        <div className='row'>
          <div className='col'>
            <h1 className="text-center">Garbage statistics</h1>
            <select className="form-select" aria-label="Default select example" 
            style={{width : '30%', marginLeft : '14px'}}
            value={selectedLocal} onChange={handleLocalChange}>
              {localOptions.map((localOption) => (
                <option key={localOption} value={localOption}>
                  {localOption}
                </option>
              ))}
            </select>
            <table className="table table-bordered table-success table-striped mt-10">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Type</th>
                  <th>Local</th>
                  <th>Date</th>
                  <th>Quantity (kg)</th>
                </tr>
              </thead>
              <tbody>
                {filteredWasteData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.type}</td>
                    <td>{item.local}</td>
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
