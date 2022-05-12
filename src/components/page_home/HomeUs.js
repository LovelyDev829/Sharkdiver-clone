import React from 'react'
import "./HomeUs.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';

function HomeUs() {
    return (
        <div className='homeUs'>
            <div className='hh2'>YOU'VE SEEN US ON...</div>
            <Row className='logos'>
                <Col xs={12} md={4} lg={2} className='logo'>
                    <img src='https://www.sharkdiver.com/wp-content/uploads/2016/02/spike.jpg' alt='PIC'/>
                </Col>
                <Col xs={12} md={4} lg={2} className='logo'>
                    <img src='https://www.sharkdiver.com/wp-content/uploads/2016/02/discovery_hd_us.png' alt='PIC'/>
                </Col>
                <Col xs={12} md={4} lg={2} className='logo'>
                    <img src='https://www.sharkdiver.com/wp-content/uploads/2016/02/cnn.png' alt='PIC'/>
                </Col>
                <Col xs={12} md={4} lg={2} className='logo'>
                    <img src='https://www.sharkdiver.com/wp-content/uploads/2016/02/Animal_Planet_Logo.png' alt='PIC'/>
                </Col>
                <Col xs={12} md={4} lg={2} className='logo'>
                    <img src='	https://www.sharkdiver.com/wp-content/uploads/2016/02/gra-sharkweekpromo.jpg' alt='PIC'/>
                </Col>
                <Col xs={12} md={4} lg={2} className='logo'>
                    <img src='https://www.sharkdiver.com/wp-content/uploads/2016/02/wsj.jpg' alt='PIC'/>
                </Col>
            </Row>
        </div>
    )
}

export default HomeUs
