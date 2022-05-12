import React from 'react'
import "./HomeTravelers.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';

function HomeTravelers() {
    return (
        <div className='homeTravelers'>
            <Row>
                <Col md={12} lg={4}>
                    <p className='text'>
                        Travelers today are seeking adventures that deliver the extraordinary.
                        Our all-inclusive pricing, record for shark diving safety, and valuable
                        reputation make these shark encounters “once in a lifetime adventures!”
                        <br />
                        In a recent survey shark divers were more likely to join operations
                        that gave back to the environment in real and tangible ways. We are
                        proud to remain industry leaders in safe shark operations,
                        shark site preservation efforts, shark site research support, and
                        positive media efforts for sharks. For us, these are not just tag lines.
                        We walk the walk, and our divers and research partners respect that.
                    </p>
                </Col>
                <Col md={12} lg={4}>
                    <p className='text'>
                        Your vacation choices do make a difference in the places to which you travel.
                        We’re not here for the hype, and we never operate in places where you only
                        ‘might’ see a shark. We KNOW these creatures will be where we take you. With
                        a name like Shark Diver and decades of experience in the industry, we are
                        confident to say we GUARANTEE shark sightings. Yes! You read that correctly.
                        Shark Diver guarantees shark encounters.
                        <br />
                        This is your year; the year you will finally meet the sharks of your dreams.
                        Your next adventure starts with an email or phone call. So, if you’re ready,
                        let’s go shark diving!
                    </p>
                </Col>
                <Col md={12} lg={4} className='col-three-img'>
                    <img src='https://www.sharkdiver.com/wp-content/uploads/2016/02/Derek-Heasly-updated-watermark-e1424449509415.png' alt='PIC' />
                </Col>
            </Row>
        </div>
    )
}

export default HomeTravelers
