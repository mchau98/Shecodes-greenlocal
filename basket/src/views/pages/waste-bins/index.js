import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import data from '../../../db'
function Waste (){

    const waste = data.waste_bins;
   
    const [filterValue, setfilterValue] = useState("")
    const [filterValue1, setfilterValue1] = useState("")
    function handlefilter(e){
        setfilterValue(e.target.value);
    }
    function handlefilter1(e){
        setfilterValue1(e.target.value);
    }

    const filterData = waste.filter((item) => {
      if (filterValue1 !== ""){
        return item.local === filterValue && item.status === filterValue1;
      }
      else return true;
    })

    return (
        <div>
            <div className='mt-4 container'>
                <div className='row'>
                    <div className='col align-self-center'>
                        <h1 className="text-center">List of waste bins of system</h1>
                        <div className='row'>

                        <select class="form-select" aria-label="Default select example"
                            style={{width : '30%', marginLeft : '14px'}}
                            value={filterValue}
                            onChange={handlefilter}
                        >
                            <option selected>Local</option>
                            <option value="Ha Noi">Ha Noi</option>
                            <option value="Ho Chi Minh">Ho Chi Minh</option>
                            <option value="Khanh Hoa">Khanh Hoa</option>
                            <option value="Quang Ninh">Quang Ninh</option>
                            <option value="Dong Nai">Dong Nai</option>
                            <option value="Hai Phong">Hai Phong</option>
                            <option value="Can Tho">Can Tho</option>

                        </select>
                        <select class="form-select" aria-label="Default select example"
                            style = {{width : '30%'}}
                            value={filterValue1}
                            onChange={handlefilter1}
                        >
                            <option value="">Status</option>
                            <option value="full">Full</option>
                            <option value="no full">No full</option>
                        </select>
                        </div>
                        <div className='mt-4'></div>
                        <table class="table table-bordered table-success table-striped mt-10">
                            <thead>
                                <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Local</th>
                                <th scope="col">Weight</th>
                                <th scope="col">Status</th>
                                </tr>
                            </thead>
                            {
                               filterData && filterData.map((item) => {
                                    return (
                                        <tbody>
                                            <tr>
                                            <th scope="row">{item.ID}</th>
                                            <td>{item.local}</td>
                                            <td>{item.waste_total}</td>
                                            <td>{item.status}</td>
                                            </tr>
                                        </tbody>

                                    )
                                })
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Waste;