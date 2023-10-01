import { Routes, Route} from 'react-router-dom';
import Homepage from '../pages/homepage'
import User from '../pages/users';
import Waste from '../pages/waste-bins';
import Rubbish from '../pages/rubbish';
import React from 'react';
import Register from '../pages/register';
import Login from '../pages/login';
import MainLayout from '../../components/mainlayout'
import RegisterLayout from '../../components/resgiterlayout';
function AllRoutes (){
  const user = JSON.parse(localStorage.getItem('user-infor'));

    return (
        
        <Routes>
          <Route path="/register" element={
          <RegisterLayout>
            <Register/>
          </RegisterLayout>
          } />
          <Route path="/login" element={
          <RegisterLayout>
            <Login/>
          </RegisterLayout>
          } />
          <Route path="/" element={
            <MainLayout>
              <Homepage/>
            </MainLayout>
          } />
          <Route path="/rubbish" element={ user ? <MainLayout>
              <Rubbish/>
            </MainLayout> :
            <MainLayout>
              <Homepage/>
            </MainLayout>
          } />
          <Route path="/user" element={ user ? <MainLayout>
              <User/>
            </MainLayout> :
            <MainLayout>
              <Homepage/>
            </MainLayout>
          } />
          <Route path="/waste-bins" element={ user ? <MainLayout>
            <Waste/>
            </MainLayout> :
          <MainLayout>
            <Homepage/>
          </MainLayout>
          } />
        </Routes>
    )
}
export default AllRoutes;