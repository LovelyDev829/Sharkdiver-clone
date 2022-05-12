import React from 'react'
import "./HomePrice.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';


function HomePrice() {
    return (
        <div className='homePrice'>
            <div className='container'>
                <Row className='row'>
                    <Col xs={12} md={6} lg={3} className='card-Nb'>
                        <div className='card_img_Nb'>
                            <img src='	https://www.sharkdiver.com/wp-content/uploads/2016/02/great-white.jpg' alt='OOO' />
                            <div className="middle">
                                <div className='moreInfo'>MORE INFO</div>
                            </div>
                            <div className='overlay'>
                                <h1>GUADALUPE ISLAND, MEXICO</h1>
                                <h2>Great White Sharks</h2>
                            </div>
                        </div>
                        <div className='col-text'>
                            <div className='title_'>Starting at $3295 per person</div>
                            <div className='title_'>Inclusive, 5-day Packages</div>

                            <div className='detail'>Cage dive with the most feared yet
                             misunderstood great white at the volcanic Guadalupe Island. 
                             No certification necessary. Meet up just five minutes 
                             from San Diego International Airport.</div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3} className='card-Nb'>
                        <div className='card_img_Nb'>
                            <img src='	https://www.sharkdiver.com/wp-content/uploads/2016/02/tiger-shark.jpg' alt='OOO' />
                            <div className="middle">
                                <div className='moreInfo'>MORE INFO</div>
                            </div>
                            <div className='overlay'>
                                <h1>TIGER BEACH, BAHAMAS</h1>
                                <h2>Tigers</h2>
                            </div>
                        </div>
                        <div className='col-text'>
                            <div className='title_'>$3,395 per person</div>
                            <div className='title_'>Inclusive, 7-day Packages</div>

                            <div className='detail'>Dive with tigers, hammerheads reef sharks
                            and more at this tropical location with reefs and wrecks. 
                            Dive certification required. Fly into Freeport.</div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3} className='card-Nb'>
                        <div className='card_img_Nb'>
                            <img src='	https://www.sharkdiver.com/wp-content/uploads/2016/02/bull-shark.jpg' alt='OOO' />
                            <div className="middle">
                                <div className='moreInfo'>MORE INFO</div>
                            </div>
                            <div className='overlay'>
                                <h1>PACIFIC HARBOUR, FIJI</h1>
                                <h2>Bulls</h2>
                            </div>
                        </div>
                        <div className='col-text'>
                            <div className='title_'>$2100 per person</div>
                            <div className='title_'>Inclusive, 7-day Packages</div>

                            <div className='detail'>Dive with as many as 70 bull
                                sharks at a time in the warm waters of the Fiji Islands.
                                Dive certification required. Fly into NadiAirport.
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3} className='card-Nb'>
                        <div className='card_img_Nb'>
                            <img src='	https://www.sharkdiver.com/wp-content/uploads/2020/12/10.jpg' alt='OOO' />
                            <div className="middle">
                                <div className='moreInfo'>MORE INFO</div>
                            </div>
                            <div className='overlay'>
                                <h1>SAN IGNACIO GRAY WHALE ADVENTURE</h1>
                                <h2>Gray Whale adventure</h2>
                            </div>
                        </div>
                        <div className='col-text'>
                            <div className='title_'>From $1057 per person</div>
                            <div className='title_'>Inclusive, 4-day Packages</div>

                            <div className='detail'>Picture yourself with a 50
                            foot gray whale, just inches away from you, looking
                            straight into your eyes. A mother whale bringing 
                            her newborn baby to your boat while she keeps a
                            close watch. At the San Ignacio lagoon in Baja 
                            California these encounters happen on a daily
                            basis during whale season.</div>
                        </div>
                    </Col>
                </Row>


                
            </div>
        </div>
    )
}

export default HomePrice
