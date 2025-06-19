import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

function Smallbid() {
  return (
    <>
    <Container fluid
     className='w-100 hidden md:block'>
      <Row className=' '>
      <Col md={1}>
          <div className="p-3 pt-10">
         
          </div>
        </Col>
        {/* First Column - Larger */}
        <Col md={6} sm={12} className=''>
          <div className="p-3 pt-10">
          <img src='https://baroque.pk/cdn/shop/files/Shop_The_Look82.jpg?v=1728049596&width=600' alt=''
            /></div>
        </Col>

        {/* Second Column - Smaller */}
        <Col md={4}>
        <div className="pt-20 h-200 ">
          <img src='https://baroque.pk/cdn/shop/files/23_dbeea235-97c7-4bb1-88d9-15b41b001856.jpg?v=1699873654&width=500' alt=''
            />
              <p className='text-3xl font-light italic text-center pt-3'>EMBORIDERED CHIFFON UF-618<br/>PKR-14,990.00</p>
            <div className='pt-10 text-center'> <button className='w-60 h-10 bg-black text-white '>VIEW PRODUCT</button></div>         
      

            
            </div>
        </Col>
   
      </Row>
      </Container>

      <Carousel className='block md:hidden'>
      <Carousel.Item>
      <Row>
      <Col md={1}>
          <div className="p-3 pt-10">
         
          </div>
        </Col>
        {/* First Column - Larger */}
        <Col md={6} sm={12}>
          <div className="p-3 pt-10">
          <img src='https://baroque.pk/cdn/shop/files/Shop_The_Look82.jpg?v=1728049596&width=600' alt=''
            /></div>
        </Col>

        {/* Second Column - Smaller */}
        <Col md={4}>
        <div className="pt-20 h-200  d-none d-md-block">
          <img src='https://baroque.pk/cdn/shop/files/23_dbeea235-97c7-4bb1-88d9-15b41b001856.jpg?v=1699873654&width=500' alt=''
            />
              <p className='text-3xl font-light italic text-center pt-3'>EMBORIDERED CHIFFON UF-618<br/>PKR-14,990.00</p>
            <div className='pt-10 text-center'> <button className='w-60 h-10 bg-black text-white '>VIEW PRODUCT</button></div>         
      

            
            </div>
        </Col>
   
      </Row>
      </Carousel.Item>

      <Carousel.Item>
      <Row>
      <Col md={1}>
          <div className="p-3 pt-10">
         
          </div>
        </Col>
        {/* First Column - Larger */}
        <Col md={6} sm={12}>
          <div className="p-3 pt-10">
          <img src='https://baroque.pk/cdn/shop/files/Shop_The_Look82.jpg?v=1728049596&width=600' alt=''
            /></div>
        </Col>

        {/* Second Column - Smaller */}
        <Col md={4}>
        <div className="pt-20 h-200  d-none d-md-block">
          <img src='https://baroque.pk/cdn/shop/files/Shop_The_Look82.jpg?v=1728049596&width=600' alt=''
            />
              <p className='text-3xl font-light italic text-center pt-3'>EMBORIDERED CHIFFON UF-618<br/>PKR-14,990.00</p>
            <div className='pt-10 text-center'> <button className='w-60 h-10 bg-black text-white '>VIEW PRODUCT</button></div>         
      

            
            </div>
        </Col>
   
      </Row>
      </Carousel.Item>

      <Carousel.Item>
      <Row>
      <Col md={1}>
          <div className="p-3 pt-10">
         
          </div>
        </Col>
        {/* First Column - Larger */}
        <Col md={6} sm={12}>
          <div className="p-3 pt-10">
          <img src='https://baroque.pk/cdn/shop/files/Shop_The_Look82.jpg?v=1728049596&width=600' alt=''
            /></div>
        </Col>

        {/* Second Column - Smaller */}
        <Col md={4}>
        <div className="pt-20 h-200  d-none d-md-block">
          <img src='https://baroque.pk/cdn/shop/files/Shop_The_Look82.jpg?v=1728049596&width=600' alt=''
            />
              <p className='text-3xl font-light italic text-center pt-3'>EMBORIDERED CHIFFON UF-618<br/>PKR-14,990.00</p>
            <div className='pt-10 text-center'> <button className='w-60 h-10 bg-black text-white '>VIEW PRODUCT</button></div>         
      

            
            </div>
        </Col>
   
      </Row>
      </Carousel.Item>
    </Carousel>


    
      <div className='w-full pt-5'>
        <hr />
<div className='text-5xl text-center italic pt-20 pb-20'>BE INSPIRED</div>
      </div>








      
    
  
    

    </>














  );
}

export default Smallbid;
