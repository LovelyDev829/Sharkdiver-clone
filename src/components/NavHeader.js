import React from 'react'
import "./NavHeader.css"
import { AiOutlineMenu } from 'react-icons/ai';
import "animate.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { flip } from '../actions/index';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function NavHeader() {
    // const { flag } = useSelector((state) => state.flag)
    const flag = useSelector(state => state.flag);

    const dispatch = useDispatch();
    const flipClick = () => {
        dispatch(flip());
    }


    return (

        <div className='navHeader'>
            <div className='navBar' id="sticky_nav" >
                <div className="topnav" id="myTopnav" >
                    <div className='sharkLogo'>
                        <img height="70" src="https://www.sharkdiver.com/wp-content/uploads/2016/02/shark-diver-logo-header-final@2x.png" alt='SHARK_LOGO' />
                    </div>
                    <div className='zzIn'>
                        <Link to={'/home'} className='linkClassName' >
                            <div className='topNavBarTitle' style={{ width: "78px", color: "rgb(0, 183, 255)" }}>
                                HOME
                            </div>
                        </Link>
                        <div className='topNavBarTitle' style={{ width: "84px" }} onMouseOver={
                            function () {
                                var downId = document.getElementById('aboutDown');
                                downId.style.setProperty('display', 'block');
                                downId.style.setProperty('animation', 'fadeIn');
                                downId.style.setProperty('animation-duration', '.5s');
                            }
                        } onMouseLeave={
                            function () {
                                var downId = document.getElementById('aboutDown');
                                downId.style.setProperty('display', 'none');
                            }
                        }>
                            ABOUT
                            <div className='detailDown' id='aboutDown'>
                                <Link to={'/about/our_company'} className='linkClassName' >
                                    <div className='detailDown_item'>
                                        OUR COMPANY
                                    </div>
                                </Link>
                                <Link to={'/about/shark_conservation'} className='linkClassName' >
                                    <div className='detailDown_item'>
                                        SHARK CONSERVATIONS
                                    </div>
                                </Link>
                                <Link to={'/about/reviews'} className='linkClassName' >
                                    <div className='detailDown_item'>
                                        REVIEWS
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='topNavBarTitle' style={{ width: "123px" }} onMouseOver={
                            function () {
                                var downId = document.getElementById('adventuresDown');
                                downId.style.setProperty('display', 'block');
                                downId.style.setProperty('animation', 'fadeIn');
                                downId.style.setProperty('animation-duration', '.5s');
                            }
                        } onMouseLeave={
                            function () {
                                var downId = document.getElementById('adventuresDown');
                                downId.style.setProperty('display', 'none');
                            }
                        }>
                            ADVENTURES
                            <div className='detailDown' id='adventuresDown'>
                                <div className='detailDown_item'>GREAT WHITE SHARK DIVING</div>
                                <div className='detailDown_item'>TIGER SHARK DIVING</div>
                                <div className='detailDown_item'>BULL SHARK DIVING FIJI</div>
                                <div className='detailDown_item'>SAN IGNACIO WHALE</div>
                            </div>
                        </div>
                        <div className='topNavBarTitle' style={{ width: "82px" }} onMouseOver={
                            function () {
                                var downId = document.getElementById('mediaDown');
                                downId.style.setProperty('display', 'block');
                                downId.style.setProperty('animation', 'fadeIn');
                                downId.style.setProperty('animation-duration', '.5s');
                            }
                        } onMouseLeave={
                            function () {
                                var downId = document.getElementById('mediaDown');
                                downId.style.setProperty('display', 'none');
                            }
                        }>
                            MEDIA
                            <div className='detailDown' id='mediaDown'>
                                <div className='detailDown_item'>FILM CREWS</div>
                                <div className='detailDown_item'>SHARK DIVER TV</div>
                            </div>
                        </div>
                        <div className='topNavBarTitle' style={{ width: "75px" }} >BLOG</div>
                        <div className='topNavBarTitle' style={{ width: "100px" }} >CONTACT</div>
                        <div className='topNavBarTitle' style={{ width: "75px" }} >SHOP</div>
                        <div className='icon' onClick={

                            function () {
                                if (!flag) {
                                    flipClick();
                                    window.scrollTo(0, 0);
                                }
                                // var rootEle = document.getElementById("mainApp");
                                // var tempMain = document.getElementById('tempMain');
                                // if (rootEle.className == "") {
                                //     rootEle.className = "slide_left";
                                //     // rootEle.style.setProperty('height', '100%');
                                //     tempMain.style.setProperty('z-index', '999');
                                // }
                                // else rootEle.className = "";
                            }
                        }>
                            <AiOutlineMenu />
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}


export default NavHeader
