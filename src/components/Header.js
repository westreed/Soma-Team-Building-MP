import React from 'react';
import Logo from '../images/logo.png';
import Title from '../images/title.png';
import "../css/header.css";

function Header(){
    return (
        <div className="soma-header" style={{display:"flex", flexDirection:"row", justifyContent:"space-between", flexWrap: "wrap"}}>
            <div>
                <nav style={{display:"flex", flexDirection:"row"}}>
                    <img src={Logo} alt="SW마에스트로 로고" style={{ objectFit:"contain"}} width="100px" />
                    <p className='soma-title'>SomaHub</p>
                </nav>
                <div className='soma-header-title'>
                    <p>SW 마에스트로 연수생들끼리</p>
                    <p>팀빌딩을 편하게!</p>
                </div>
                <div className='soma-header-content' style={{marginBottom:"2rem"}}>
                    <p style={{marginBottom:"0.7rem"}}>지금 바로 글을 작성해보세요.</p>
                    <button className='button-style'>글쓰러 가기 →</button>
                </div>
            </div>
            <img src={Title} alt="SW마에스트로" style={{ objectFit:"contain", maxWidth: '500px', width: '100%'}} />
        </div>
    );
}

export default Header;