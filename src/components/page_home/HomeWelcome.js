import React from 'react'
import "./HomeWelcome.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';

function HomeWelcome() {
    return (
        <div className='homeWelcome'>
            <div className='title'>
                <h1>WELCOME TO THE ADVENTURE OF A LIFETIME</h1>
                <div className='hr_line'></div>
                <h3>GET UP CLOSE AND PERSONAL WITH SHARKS IN THEIR NATURAL HABITAT!</h3>
            </div>
            <div className='container'>
                <Row>
                    <Col xs={12} md={6} lg={3}>
                        <div className='card_div'>
                            <div className='card_img'>
                                <img src='	https://www.sharkdiver.com/wp-content/uploads/2016/02/great-white.jpg' alt='OOO' />
                                <div className="middle">
                                    <div className='moreInfo'>MORE INFO</div>
                                </div>
                                <div className='overlay'>
                                    <h1>GUADALUPE ISLAND, MEXICO</h1>
                                    <h2>Great White Sharks</h2>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <div className='card_div'>
                            <div className='card_img'>
                                <img src='	https://www.sharkdiver.com/wp-content/uploads/2016/02/tiger-shark.jpg' alt='OOO' />
                                <div className="middle">
                                    <div className='moreInfo'>MORE INFO</div>
                                </div>
                                <div className='overlay'>
                                    <h1>TIGER BEACH, BAHAMAS</h1>
                                    <h2>Tiger Sharks</h2>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <div className='card_div'>
                            <div className='card_img'>
                                <img src='	https://www.sharkdiver.com/wp-content/uploads/2016/02/bull-shark.jpg' alt='OOO' />
                                <div className="middle">
                                    <div className='moreInfo'>MORE INFO</div>
                                </div>
                                <div className='overlay'>
                                    <h1>PACIFIC HARBOUR, FIJI</h1>
                                    <h2>Bull Sharks</h2>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <div className='card_div'>
                            <div className='card_img'>
                                <img src='	https://www.sharkdiver.com/wp-content/uploads/2020/12/10.jpg' alt='OOO' />
                                <div className="middle">
                                    <div className='moreInfo'>MORE INFO</div>
                                </div>
                                <div className='overlay'>
                                    <h1>SAN IGNACIO GRAY WHALE ADVENTURE</h1>
                                    <h2>Gray Whales</h2>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default HomeWelcome
