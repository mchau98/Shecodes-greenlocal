import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
function Waste (){

    const waste = [
        {
            id : 1,
            local : 'Ho Chi Minh',
            weight : 5.6,
            status : 'full'
        },
        {
            id : 2,
            local : 'Ho Chi Minh',
            weight : 5.6,
            status : 'full'
        },
        {
            id : 3,
            local : 'Ho Chi Minh',
            weight : 5.6,
            status : 'full'
        },
        {
            id : 4,
            local : 'Ho Chi Minh',
            weight : 5.6,
            status : 'full'
        },
        {
            id : 5,
            local : 'Ho Chi Minh',
            weight : 5.6,
            status : 'no full'
        },
        {
            id : 6,
            local : 'Bac Ninh',
            weight : 5.6,
            status : 'full'
        },
        {
            id : 7,
            local : 'Bac Ninh',
            weight : 5.6,
            status : 'no full'
        },
        {
            id : 8,
            local : 'Ha Noi',
            weight : 5.6,
            status : 'no full'
        },
        {
            id : 9,
            local : 'Ha Noi',
            weight : 5.6,
            status : 'full'
        },
        {
            id : 10,
            local : 'Ha Noi',
            weight : 5.6,
            status : 'full'
        }
    ]
   
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
                        <h1 className="text-start">Lists of waste bins of system</h1>
                        <div className='row'>

                        <select class="form-select" aria-label="Default select example"
                            style={{width : '30%', marginLeft : '14px'}}
                            value={filterValue}
                            onChange={handlefilter}
                        >
                            <option selected>Local</option>
                            <option value="Ha Noi">Ha Noi</option>
                            <option value="Ho Chi Minh">Ho Chi Minh</option>
                            <option value="Da Nang">Da Nang</option>
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
                                            <th scope="row">{item.id}</th>
                                            <td>{item.local}</td>
                                            <td>{item.weight}</td>
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