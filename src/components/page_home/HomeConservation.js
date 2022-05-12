import React from 'react'
import "./HomeConservation.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';

function HomeConservation() {
    return (
        <div className='homeConservation'>
            <div className='title'>
                <h1>CONSERVATION SHARK DIVING</h1>
                <div className='hr_line'></div>
                <h3>WELCOME TO SHARK DIVER</h3>
            </div>

            <Row className='row'>
                <Col xs={12} md={6}>
                    <p className='text'>
                        Experience your own “Real Shark Week” and find out what it is like to come face
                        to face with the Oceans most feared predators. When it comes to shark
                        conservation efforts and shark diving industry lead protocols for
                        ‘safe and sane shark diving,’ Shark Diver has been at the forefront of this
                        growing shark cage diving industry trend. Over the past 20 years, commercial shark
                        diving has grown and matured to offer the very best of safe and remarkable shark
                        encounters worldwide.
                        <br />
                        Today, shark diving fans can encounter many of the premier shark species at
                        well-seasoned destinations. Shark Diver was the first commercial shark diving
                        company in the USA to initiate, develop and support Mexican shark research efforts
                        with Great White Sharks at Isla Guadalupe. Since then we have gone on to initiate
                        strong global shark conservation programs like The Shark-Free Marinas Initiative
                        in tandem with our Tiger operations sites in the Bahamas and Bull Shark diving
                        site at the <span>Shark Reef Marine Reserve</span> in Fiji. Shark Diver is also a strong
                        supporter of the <span>Marine Conservation Science Institute</span>, with a portion of our
                        proceeds being donated to their Great White Shark photo ID project.
                    </p>
                </Col>
                <Col xs={12} md={6} className='col-two'>
                    <p className='text'>
                        The goals for us here at Shark Diver are to be advocates for our sharks and our
                        cage diving industry while delivering top shark species encounters to our divers,
                        media outlets, and research partners.
                        <br />
                        We call it Conservation Shark Diving.
                        <br />
                        Divers and non-divers alike are the heart of Conservation Shark Diving. They are
                        folks like you,  who love sharks and who care about the future of these magnificent
                        animals – YOU are Shark Diver.
                        <br />
                        Join us this year on board any of our hand selected shark diving vessels to meet
                        huge great white sharks (Carcharodon carcharias) at the volcanic island of Isla
                        Guadalupe, or curious tiger sharks (Galeocerdo cuvier) at Tiger Beach in the Bahamas,
                        or bountiful bull sharks (Carcharhinus leucas) in waters off Pacific Harbour, Fiji.
                    </p>
                </Col>
            </Row>
        </div>
    )
}

export default HomeConservation
