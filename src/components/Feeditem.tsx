import React, { useState } from "react";
import blueflower from "../styles/blueflower.svg";
import todoicon from "../styles/Union.png"
import '../styles/Feeditem.css'

function Feeditem() {
    return(
    <div className='feed-items'>
        <div className='flower'><img src={blueflower} alt="bf" className="flower-pic" /></div>
        <div className='right-items'> 
            <h3>Seorin</h3>
            <p>텍스트를 입력해주세요.</p>
            <div className='input-item'>
                <img src={todoicon} alt="todo" className="todo-pic" />
                <p>할 일 목록</p>
            </div>
            <img src={''} alt="feedpic" className="feed-pic" />
        </div>
    </div>
    )
};

export default Feeditem;
