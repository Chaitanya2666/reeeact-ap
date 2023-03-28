import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Dashboad(){
    return(
<>
<CardGroup>
      <Card border="success" style={{marginTop:'10px', marginLeft:'0px'}}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Total User</Card.Title>
          <Card.Text>
         1,00,000 ^+
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>

      <Card Card border="info" style={{marginTop:'10px' , marginLeft:'30px'}} >
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Total Retailer</Card.Title>
          <Card.Text>
          80,000 +
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>

      <Card Card border="warning" style={{marginTop:'10px', marginLeft:'30px'}}> 
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Total Customer</Card.Title>
          <Card.Text>
           50,00000 +
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    {/* ..................chart................................... */}
    <div>
        
    </div>
</>
    )
}; export default Dashboad;