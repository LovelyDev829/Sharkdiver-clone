import React from 'react'
import "./SideBar.css";
import "./w3.css";
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { flip } from '../actions/index';
import 'animate.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function SideBar() {
    const flag = useSelector(state => state.flag);
    const dispatch = useDispatch();
    const flipClick = () => {
        dispatch(flip());
    }
    // if (!flag) {
        // var tiId = document.getElementById('sideBarTitle');
        // var mLId = document.getElementById('menuLeftBtn');
        // var detMainId = document.getElementById('detailId');
        // var detAboutId = document.getElementById('detailAboutId');
        // var detdventuresId = document.getElementById('detailAdventuresId');
        // var detMediaId = document.getElementById('detailMediaId');
        // tiId.textContent = 'MENU';
        // mLId.style.setProperty('opacity', '0');
        // detMainId.className = 'sideBar_detail animate__fadeInLeft';
        // detMainId.style.setProperty('opacity', '1');
        // detAboutId.className = 'sideBar_detail detailAbout animate__fadeOutRight';
        // detAboutId.style.setProperty('opacity', '0');
        // detAboutId.style.setProperty('visibility', 'hidden');
        // detdventuresId.className = 'sideBar_detail detailAbout animate__fadeOutRight';
        // detdventuresId.style.setProperty('opacity', '0');
        // detdventuresId.style.setProperty('visibility', 'hidden');
        // detMediaId.className = 'sideBar_detail detailAbout animate__fadeOutRight';
        // detMediaId.style.setProperty('opacity', '0');
        // detMediaId.style.setProperty('visibility', 'hidden');
    // }
    return (
        <div className='sideBar'>
            <div className='sideBar_div'>
                <div className='sideBar_title' >
                    {/* <div className='pp'>MENU</div> */}
                    <p id='sideBarTitle'>MENU</p>
                    <div className='leftBtn menuLeft' id='menuLeftBtn' onClick={
                        function () {
                            var tiId = document.getElementById('sideBarTitle');
                            var mLId = document.getElementById('menuLeftBtn');
                            var detMainId = document.getElementById('detailId');
                            var detAboutId = document.getElementById('detailAboutId');
                            var detdventuresId = document.getElementById('detailAdventuresId');
                            var detMediaId = document.getElementById('detailMediaId');
                            tiId.textContent = 'MENU';
                            mLId.style.setProperty('opacity', '0');
                            detMainId.className = 'sideBar_detail animate__fadeInLeft';
                            detMainId.style.setProperty('opacity', '1');
                            detAboutId.className = 'sideBar_detail detailAbout animate__fadeOutRight';
                            detAboutId.style.setProperty('opacity', '0');
                            detAboutId.style.setProperty('visibility', 'hidden');
                            detdventuresId.className = 'sideBar_detail detailAbout animate__fadeOutRight';
                            detdventuresId.style.setProperty('opacity', '0');
                            detdventuresId.style.setProperty('visibility', 'hidden');
                            detMediaId.className = 'sideBar_detail detailAbout animate__fadeOutRight';
                            detMediaId.style.setProperty('opacity', '0');
                            detMediaId.style.setProperty('visibility', 'hidden');
                        }
                    }>
                        <IoIosArrowBack />
                    </div>
                </div>
                <div className='sideBar_detail' id='detailId'>
                    <Link to={'/home'} className='linkClassName' onClick={
                        function () {
                            if (flag) flipClick();
                        }
                    }>
                        <div className='sideBar_item'>Home</div>
                    </Link>
                    <div className='sideBar_item' onClick={
                        function () {
                            var tiId = document.getElementById('sideBarTitle');
                            var mLId = document.getElementById('menuLeftBtn');
                            var detMainId = document.getElementById('detailId');
                            var detAboutId = document.getElementById('detailAboutId');
                            tiId.textContent = 'ABOUT';
                            mLId.style.setProperty('opacity', '1');
                            detMainId.className += ' animate__fadeOutLeft';
                            detMainId.style.setProperty('opacity', '0');
                            detAboutId.className = 'sideBar_detail detailAbout  animate__fadeInRight'
                            detAboutId.style.setProperty('opacity', '1');
                            detAboutId.style.setProperty('visibility', 'visible');
                        }
                    }>
                        About
                        <div className='rightBtn aboutRight'>
                            <IoIosArrowForward />
                        </div>
                    </div>
                    <div className='sideBar_item' onClick={
                        function () {
                            var tiId = document.getElementById('sideBarTitle');
                            var mLId = document.getElementById('menuLeftBtn');
                            var detMainId = document.getElementById('detailId');
                            var detdventuresId = document.getElementById('detailAdventuresId');
                            tiId.textContent = 'ADVENTURES';
                            mLId.style.setProperty('opacity', '1');
                            detMainId.className += ' animate__fadeOutLeft';
                            detMainId.style.setProperty('opacity', '0');
                            detdventuresId.className = 'sideBar_detail detailAbout  animate__fadeInRight'
                            detdventuresId.style.setProperty('opacity', '1');
                            detdventuresId.style.setProperty('visibility', 'visible');
                        }
                    }>
                        Adventures
                        <div className='rightBtn adventuresRight'>
                            <IoIosArrowForward />
                        </div>
                    </div>
                    <div className='sideBar_item' onClick={
                        function () {
                            var tiId = document.getElementById('sideBarTitle');
                            var mLId = document.getElementById('menuLeftBtn');
                            var detMainId = document.getElementById('detailId');
                            var detMediaId = document.getElementById('detailMediaId');
                            tiId.textContent = 'MEDIA';
                            mLId.style.setProperty('opacity', '1');
                            detMainId.className += ' animate__fadeOutLeft';
                            detMainId.style.setProperty('opacity', '0');
                            detMediaId.className = 'sideBar_detail detailAbout  animate__fadeInRight'
                            detMediaId.style.setProperty('opacity', '1');
                            detMediaId.style.setProperty('visibility', 'visible');
                        }
                    }>
                        Media
                        <div className='rightBtn mediaRight'>
                            <IoIosArrowForward />
                        </div>
                    </div>
                    <div className='sideBar_item'>Blog</div>
                    <div className='sideBar_item'>Contact</div>
                    <div className='sideBar_item'>Shop</div>
                </div>
                <div className='sideBar_detail detailAbout' id='detailAboutId'>
                    <Link to={'/about/our_company'} className='linkClassName' onClick={
                        function () {
                            if (flag) flipClick();
                        }
                    }>
                        <div className='sideBar_item'>Our Company</div>
                    </Link>
                    <Link to={'/about/shark_conservation'} className='linkClassName' onClick={
                        function () {
                            if (flag) flipClick();
                        }
                    }>
                        <div className='sideBar_item'>Shark Conservation</div>
                    </Link>
                    <Link to={'/about/reviews'} className='linkClassName' onClick={
                        function () {
                            if (flag) flipClick();
                        }
                    }>
                        <div className='sideBar_item'>Reviews</div>
                    </Link>
                </div>
                <div className='sideBar_detail detailAdventures' id='detailAdventuresId'>
                    <div className='sideBar_item'>Great White Shark Diving</div>
                    <div className='sideBar_item'>Tiger Shark Diving</div>
                    <div className='sideBar_item'>Bull Shark Diving Fiji</div>
                    <div className='sideBar_item'>San Ignacio Whale Watching</div>
                </div>
                <div className='sideBar_detail detailMedia' id='detailMediaId'>
                    <div className='sideBar_item'>Film Crews</div>
                    <div className='sideBar_item'>Shark Diver TV</div>
                </div>
            </div>
        </div>
    )
}

export default SideBar
