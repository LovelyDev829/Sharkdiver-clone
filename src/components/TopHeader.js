import React from 'react'
import "./TopHeader.css";
import { CgFacebook } from 'react-icons/cg';
import { ImGooglePlus } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import { ImYelp } from 'react-icons/im';
import { SiTripadvisor } from 'react-icons/si';

function TopHeader() {
    return (
        <div className='topHeader'>
            <div className='icons'>
                <div className='icon-div'><CgFacebook className='icon' /></div>
                <div className='icon-div'><ImGooglePlus className='icon' /></div>
                <div className='icon-div'><BsInstagram className='icon' /></div>
                <div className='icon-div'><ImYelp className='icon' /></div>
                <div className='icon-div'><SiTripadvisor className='icon' /></div>
            </div>
        </div>
    )
}

export default TopHeader
