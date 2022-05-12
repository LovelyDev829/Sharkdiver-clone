import React from 'react'
import "./HomeVideo.css";
import videoTop from '../../videos/sample.mp4'

function HomeVideo() {
    return (
        <div className='homeVideo' >
            <div className='vid'>
                <video muted autoPlay={"autoplay"} preload="auto" loop height={330} style={{ objectFit: 'cover' }}>
                    <source src={videoTop} type="video/mp4" />
                </video>
            </div>
            <div className='centerLetters'>
                <div className="center_up">SHARK DIVER</div>
                <div className="center_down">SAFE AND SANE SHARK DIVING</div>
            </div>
            <div className="logo_div">
                <img className='logo_png' width="135" height="135" src="https://www.sharkdiver.com/wp-content/uploads/2018/07/18-year-wreath.png" alt='LOGO' />
            </div>
            {/* <div className='test' style={{ backgroundImage:`url(${videoTop})` }}>This is test</div> */}
            <div className='bottom'>
                <div className='text_button'>
                    <p>CALL: <b>855.987.4275</b> or <b>619.887.4275</b></p>
                    <button>EMAIL: CREW@SHAKDIVER.COM</button>
                </div>
            </div>
        </div>
    )
}

export default HomeVideo
