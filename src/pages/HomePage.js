import "../css/home.css";
import React, { useState } from 'react';
import Header from '../components/Header';
import Write from "../components/Write";

function HomePage(){
    const [count, setCount] = useState(0);
    return (
        <div style={{height:"100%"}}>
            <Header/>
            <div className='home-content'>
                <p>현재 올라온</p>
                <p>팀빌딩은 {count}개 입니다!</p>
            </div>
            <Write/>
        </div>
    );
}

export default HomePage;