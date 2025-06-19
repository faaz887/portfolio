 import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const VideoRow = () => {
  return (
    <>
    <Container fluid >
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <video 
            className="w-100 pt-20" 
            style={{ height: '700px', objectFit: 'cover' }} 
            autoPlay
            muted
          >
            <source src="https://baroque.pk/cdn/shop/videos/c/vp/2f6ff9fc9b5145ee9bb35433a8694e75/2f6ff9fc9b5145ee9bb35433a8694e75.HD-1080p-7.2Mbps-36191305.mp4?v=0" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-md-4">
          <video 
            className="w-100 pt-20" 
            style={{ height: '700px', objectFit: 'cover' }} 
            autoPlay
            muted
          >
            <source src="https://baroque.pk/cdn/shop/videos/c/vp/6f70f2bb7add48fca2341ed30c02a82c/6f70f2bb7add48fca2341ed30c02a82c.HD-1080p-7.2Mbps-36191306.mp4?v=0" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-md-4">
          <video 
            className="w-100 pt-20" 
            style={{ height: '700px', objectFit: 'cover' }} 
            autoPlay
            muted
          >
            <source src="https://baroque.pk/cdn/shop/videos/c/vp/c441bbf6e33e41228b44405295794153/c441bbf6e33e41228b44405295794153.HD-1080p-7.2Mbps-36191877.mp4?v=0" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
     
      </div>
  </div>
    </Container>


</>

  
  );
};


export default VideoRow;
