import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Side from './Side';
function Upper() {
  return (
    <>



    {/* ......navbar.................................. */}
      <div className='uperbala'> 
      
     
     <Container fluid className='bg-dark header'>
     <div className=''>
     </div>
 
         <div className='heading'><h2 className='text-white text-center'>Home</h2></div>
         <img  className="logo" src="https://cdn-icons-png.flaticon.com/512/293/293508.png?w=740&t=st=1679898529~exp=1679899129~hmac=5f00030ad7e79fdd423845bc73722619bc4270b0b335bfbbf96490ed3ab49f67" alt="" />
         
        </Container>
        
      
      
      <Side />
       </div> 
    {/* ..................................... */}
    
   

    </>
  );
}

export default Upper;
