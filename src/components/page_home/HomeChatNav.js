import React from 'react'
import "./HomeChatNav.css";
import 'animate.css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';


var chk=0;
function HomeChatNav() {
    var outIndex = 0;
    var inIndex=1;
    var x = document.getElementsByClassName("chatBox");
    function carousel() {
        if (outIndex >= x.length) { outIndex = 0 }
        if (inIndex >= x.length) { inIndex = 0 }
        // x[slideIndex - 1].style.display = "block";
        x[outIndex].style.setProperty('opacity', '0');
        x[inIndex].style.setProperty('opacity', '1');
        x[outIndex].className='chatBox animate__slideOutLeft'
        x[inIndex].className='chatBox animate__slideInRight'
        setTimeout(carousel, 4000);
        outIndex++;
        inIndex++;
    }
    ////////////////////////////////////////////////////////////////////////
    return (
        <div className='homeChatNav' onMouseOver={
        function(){
            if(chk===0){
                chk=1;
                carousel();
            }
        }}>
            <div className='chatBox_div'>
                <div className='chatBox' id='chatId1' >
                    <div id='pp3'>
                        <FaQuoteLeft className='speechMark' />
                        Best time ever! Absolute dream to dive with white sharks
                        and I fulfilled it.
                        Everybody involved was wonderful.
                        It was an experience of a lifetime.
                        <FaQuoteRight className='speechMark' />
                    </div>
                    <div className='pp1_dir'>
                        <div id='pp1'>Roy,<div id='pp2'>Long Island, NY</div>
                        </div>
                    </div>
                </div>
                <div className='chatBox' id='chatId2'>
                    <div id='pp3'>
                        <FaQuoteLeft className='speechMark' />
                        A surreal experience that will take your breath away, even with a regulator!
                        <FaQuoteRight className='speechMark' />
                    </div>
                    <div className='pp1_dir'>
                        <div id='pp1'>Roy,<div id='pp2'>Long Island, NY</div>
                        </div>
                    </div>
                </div>
                <div className='chatBox' id='chatId3'>
                    <div id='pp3'>
                        <FaQuoteLeft className='speechMark' />
                        Trip was amazing. Much better than I could ever have imagined. I recommend it to everybody.
                        <FaQuoteRight className='speechMark' />
                    </div>
                    <div className='pp1_dir'>
                        <div id='pp1'>Daniel,<div id='pp2'>Poland</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='recommend_dir'>
                <div className='recommend'>
                    <div className='reconmmend_top'>
                        <div>RECOMMENED ON</div>
                        <img src='https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_registered.png' height={12} alt='PNG'/>
                    </div>
                    <p><u>Shark Diver</u></p>
                </div>
            </div>
        </div>
    )
}

export default HomeChatNav
