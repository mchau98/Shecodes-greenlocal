import { Routes, Route} from 'react-router-dom';
import Homepage from '../pages/homepage'
import User from '../pages/users';
import Waste from '../pages/waste-bins';
import Rubbish from '../pages/rubbish';
import React from 'react';
import Register from '../pages/register';
import Login from '../pages/login';
import MainLayout from '../../components/mainlayout'
function AllRoutes (){
    return (
        <Routes>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={
            <MainLayout>
              <Homepage/>
            </MainLayout>
          } />
          <Route path="/rubbish" element={
            <MainLayout>
              <Rubbish/>
            </MainLayout>
          } />
          <Route path="/user" element={
            <MainLayout>
              <User/>
            </MainLayout>
          } />
          <Route path="/waste-bins" element={
          <MainLayout>
            <Waste/>
          </MainLayout>
          } />
        </Routes>
    )
}
export default AllRoutes;