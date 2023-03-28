import React from 'react';
import './App.css';
import {Link,Routes,Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import Admin from './Admin';

function Side() {
  return (
    <>
 {/* ..........sidebar.............. */}
 

<div>
 


  <div className="container-fluid">
        <div className=" row ">
          <div className="col-2 kallu ">
          
            <Link to='/Dashboard' style={{textDecoration:'none',color:'white'}}><h5>Dashboard</h5></Link><br/>
            <Link to='/Admin' style={{textDecoration:'none', color:'white'}}><h5>Admin</h5></Link><br/>
            <Link to='/User' style={{textDecoration:'none', color:'white'}}><h5>User</h5></Link><br/>
            <Link to='/Roles'style={{textDecoration:'none', color:'white'}}><h5>Roles</h5></Link><br/>
            <Link to='/Category'style={{textDecoration:'none', color:'white'}}><h5>Category</h5></Link><br/>
            <Link to='/Sub-Category'style={{textDecoration:'none', color:'white'}}><h5>Sub-Category</h5></Link><br/>
            <Link to='/Retailers'style={{textDecoration:'none', color:'white'}}><h5>Retailers</h5></Link><br/>
            <Link to='/Customer'style={{textDecoration:'none', color:'white'}}><h5>Customer</h5></Link><br/>
            <Link to='/Offer-Zone'style={{textDecoration:'none', color:'white'}}><h5>Offer-Zone</h5></Link><br/>
            <Link to='/Third Party Produc'style={{textDecoration:'none', color:'white'}}><h5>Third Party Produc</h5></Link>
            </div>
          <div className="col-8 "> <Routes>
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/Admin' element={<Admin/>} />
            <Route path='/Admin' element={<Admin/>} />
            <Route path='/Admin' element={<Admin/>} />
            <Route path='/Admin' element={<Admin/>} />
            <Route path='/Admin' element={<Admin/>} />
            <Route path='/Admin' element={<Admin/>} />
            <Route path='/Admin' element={<Admin/>} />
            <Route path='/Admin' element={<Admin/>} />
            <Route path='/Admin' element={<Admin/>} />
            
           
          </Routes></div>
        </div>
        </div>
 
</div>


      
    </>
  );
}

export default Side;
