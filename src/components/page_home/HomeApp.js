import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeApp.css';

import HomeVideo from './HomeVideo';
import HomeWelcome from './HomeWelcome';
import HomeUs from './HomeUs';
import HomeConservation from './HomeConservation';
import HomeTravelers from './HomeTravelers';
import HomePrice from './HomePrice';
import HomeChatNav from './HomeChatNav';


export function HomeApp() {
//   const [offset, setOffset] = useState();
//   const flag = useSelector(state => state.flag);
//   const dispatch = useDispatch();
//   const flipClick = () => {
//     dispatch(flip());
//   }

//   useEffect(() => {
//     const onScroll = () => setOffset(window.pageYOffset);
//     // clean up code
//     window.removeEventListener('scroll', onScroll);
//     window.addEventListener('scroll', onScroll, { passive: true });
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   // console.log("offset------:"+offset);
//   var mainAppId = document.getElementById('mainApp');
//   if (offset >= 220) {
//     if (mainAppId.className === 'toTopBtn') mainAppId.className += ' toTopBtn_down';
//   }
//   else if (offset > 0) {
//     if (mainAppId.className === 'toTopBtn toTopBtn_down') mainAppId.className = 'toTopBtn';
//   }


  return (
    <div className="HomeApp">
      {/* <div className='temp_Main' id='tempMain' >
        <div className='instead_Main' id='insteadMain' onClick={
          function () {
            var rootEle = document.getElementById("mainApp");
            var insteadMain = document.getElementById('insteadMain');
            var tempMain = document.getElementById('tempMain');
            if (rootEle.className === "slide_left") {
              rootEle.className = "";
              tempMain.style.setProperty('z-index', '0');
              insteadMain.style.setProperty('z-index', 'initial');
            }
          }
        }></div>
      </div> */}
      {/* <div id='sideApp'>
        <SideBar />
      </div>
      <div id='mainApp' className={flag ? 'slide_left' : ''} onClick={
        function () {
          if(flag)  flipClick();
        }
      }>
        <TopHeader />
        <NavHeader /> */}
        <HomeVideo />
        <HomeWelcome />
        <div className='breakLine'></div>
        <HomeUs />
        <div className='breakLine'></div>
        <HomeConservation />
        <div className='breakLine'></div>
        <HomeTravelers />
        <div className='breakLine'></div>
        <HomePrice />
        <HomeChatNav />
        <div className='bottomBtn_div'>
          <div className='bottomBtn'>
            <p>READ MORE</p>
          </div>
        </div>
      {/* </div>
      <div className='toTopBtn' id='tototop' onClick={
        function () {
          window.scrollTo(0, 0);
        }
      }>
        <IoIosArrowUp />
      </div> */}
    </div>
  );
}

export default HomeApp;
