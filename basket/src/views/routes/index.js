import { Routes, Route} from 'react-router-dom';
import Homepage from '../pages/homepage'
import User from '../pages/users';
import Waste from '../pages/waste-bins';
import Rubbish from '../pages/rubbish';
import React from 'react';
import Register from '../pages/register';
import Login from '../pages/login';
function AllRoutes (){
    return (
        <Routes>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Homepage/>} />
          <Route path="/rubbish" element={<Rubbish/>} />
          <Route path="/user" element={<User/>} />
          <Route path="/waster-bins" element={<Waste/>} />
        </Routes>
    )
}
export default AllRoutes;