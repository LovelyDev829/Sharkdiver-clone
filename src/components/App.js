import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import SideBar from "./SideBar"
import TopHeader from "./TopHeader"
import NavHeader from "./NavHeader"

import { IoIosArrowUp } from 'react-icons/io';
import { flip } from '../actions/index';
import Routes from './Routes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export function App() {
  const [offset, setOffset] = useState();
  
  const flag = useSelector(state => state.flag);
  const dispatch = useDispatch();
  const flipClick = () => {
    dispatch(flip());
  }

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // console.log("offset------:"+offset);
  var mainAppId = document.getElementById('mainApp');
  if (offset >= 220) {
    if (mainAppId.className === 'toTopBtn') mainAppId.className += ' toTopBtn_down';
  }
  else if (offset > 0) {
    if (mainAppId.className === 'toTopBtn toTopBtn_down') mainAppId.className = 'toTopBtn';
  }


  return (
    <div className="App">
      <Router>
        <div id='sideApp'>
          <SideBar />
        </div>
        <div id='mainApp' className={flag ? 'slide_left' : ''} onClick={
          function () {
            if (flag) flipClick();
          }
        }>
          <TopHeader />
          <NavHeader />
          <Routes />
          {/* <HomeApp /> */}


        </div>
        <div className='toTopBtn' id='tototop' onClick={
          function () {
            window.scrollTo(0, 0);
          }
        }>
          <IoIosArrowUp />
        </div>
      </Router>
    </div>
  );
}

export default App;
