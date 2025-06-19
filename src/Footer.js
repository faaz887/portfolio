import React from 'react';
import { Container } from 'react-bootstrap';
import { LuAlarmClock } from "react-icons/lu";
import { GiSewingMachine } from "react-icons/gi";
import { FiTruck } from "react-icons/fi";
import { RiExchangeFundsFill } from "react-icons/ri";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaSnapchat } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { Carousel } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <Container fluid>
        <div className='pt-20'>
          <hr />
        </div>

        <div className='b-black pt-20 d-flex justify-content-center'>
          <input type='text' placeholder='E-MAIL' className='me-2' style={{ width: '300px', height: '40px' }} />
          <button className='btn btn-dark' style={{ width: '250px', height: '40px' }}>
            SUBSCRIBE
          </button>
        </div>

        {/* Container for large screens */}
        <Container className="hidden md:block">
          <div className="flex flex-wrap justify-between pt-20">
            <div className="flex flex-col items-center w-1/4 p-4">
              <LuAlarmClock className="w-10 h-10" />
              <h5 className="text-center">Priority Stitching</h5>
              <p className="text-center">Receive your stitched orders more quickly in a timeline of 2 weeks</p>
            </div>

            <div className="flex flex-col items-center w-1/4 p-4">
              <GiSewingMachine className="w-10 h-10" />
              <h5 className="text-center">CUSTOM SIZE</h5>
              <p className="text-center">Receive your stitched orders more quickly in a timeline of 2 weeks</p>
            </div>

            <div className="flex flex-col items-center w-1/4 p-4">
              <FiTruck className="w-10 h-10" />
              <h5 className="text-center">FREE SHIPPING</h5>
              <p className="text-center">Receive your stitched orders more quickly in a timeline of 2 weeks</p>
            </div>

            <div className="flex flex-col items-center w-1/4 p-4">
              <RiExchangeFundsFill className="w-10 h-10" />
              <h5 className="text-center">ORDER EXCHANGE</h5>
              <p className="text-center">Receive your stitched orders more quickly in a timeline of 2 weeks</p>
            </div>
          </div>
        </Container>

        {/* Carousel for small screens */}
        <Container className="block md:hidden">
          <Carousel>
            <Carousel.Item>
              <div className="flex flex-col items-center p-4">
                <LuAlarmClock className="w-10 h-10" />
                <h5 className="text-center">Priority Stitching</h5>
                <p className="text-center">Receive your stitched orders more quickly in a timeline of 2 weeks</p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="flex flex-col items-center p-4">
                <GiSewingMachine className="w-10 h-10" />
                <h5 className="text-center">CUSTOM SIZE</h5>
                <p className="text-center">Receive your stitched orders more quickly in a timeline of 2 weeks</p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="flex flex-col items-center p-4">
                <FiTruck className="w-10 h-10" />
                <h5 className="text-center">FREE SHIPPING</h5>
                <p className="text-center">Receive your stitched orders more quickly in a timeline of 2 weeks</p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="flex flex-col items-center p-4">
                <RiExchangeFundsFill className="w-10 h-10" />
                <h5 className="text-center">ORDER EXCHANGE</h5>
                <p className="text-center">Receive your stitched orders more quickly in a timeline of 2 weeks</p>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>

      </Container>

      <hr />
      <div className='flex flex-wrap justify-between pt-10 p-10 '>
        <div><h5>ABOUT</h5><p>who we are<br /><br />Our Responsibility<br /><br />careers<br /><br />Legal</p></div>
        <div><h5>CUSTOMER SERVICES</h5><p>who we are<br /><br />Our Responsibility<br /><br />careers<br /><br />Legal</p></div>
        <div><h5>POLICIES</h5><p>Privacy policy<br /><br />Refund Policy<br /><br />careers<br /><br />Legal</p></div>
      </div>

      <div className='flex flex-wrap gap-5 ml-10'>
        <FaFacebook />
        <FaInstagram />
        <IoLogoTiktok />
        <FaSnapchat />
        <CiYoutube />
      </div>
    </div>
  );
}

export default Footer;
