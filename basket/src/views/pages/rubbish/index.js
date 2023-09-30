import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function Rubbish() {
  const wasteData = [
    // ...Dữ liệu rác của bạn
  ];

  const [selectedLocal, setSelectedLocal] = useState('All');
  const [localMenuOpen, setLocalMenuOpen] = useState(false); // State để kiểm tra xem menu local có mở hay không

  const handleLocalChange = (local) => {
    setSelectedLocal(local);
    setLocalMenuOpen(false);
  };

  const toggleLocalMenu = () => {
    setLocalMenuOpen(!localMenuOpen);
  };

  const localOptions = ['All', 'Local A', 'Local B', 'Local C', /* Thêm các local khác */];

  return (
    <div>
      <div className='mt-4 container'>
        <div className='row'>
          <div className='col'>
            <h1 className="text-center">Lists of waste bins of system</h1>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="localDropdown"
                onClick={toggleLocalMenu}
              >
                {selectedLocal}
              </button>
              {localMenuOpen && (
                <ul className="dropdown-menu" aria-labelledby="localDropdown">
                  {localOptions.map((localOption) => (
                    <li key={localOption}>
                      <button
                        className="dropdown-item"
                        onClick={() => handleLocalChange(localOption)}
                      >
                        {localOption}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <table className="table table-bordered table-success table-striped mt-10">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Local</th>
                  <th>Type</th>
                  <th>Quantity (kg)</th>
                </tr>
              </thead>
              <tbody>
                {wasteData
                  .filter((item) => selectedLocal === 'All' || item.local === selectedLocal)
                  .map((item) => (
                    <tr key={item.id}>
                      <td>{item.date}</td>
                      <td>{item.local}</td>
                      <td>{item.type}</td>
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
