import React from 'react';
import '../css/footer.css';

function Footer(){
    return (
        <div className="footer">
            <div className="footer-flex-container">
                <div className="footer-flex">
                    <div>SW Maestro 14th</div>
                    <div style={{fontSize:"0.9em"}}>Team 3. 장세훈, 고영준, 이종준, 박상준, 신용명</div>
                </div>
                <div className="footer-flex" style={{alignItems:"flex-end"}}>
                    <div style={{fontSize:"0.9em"}}>COPYRIGHT 2023 소마허브 ALL RIGHT RESERVED.</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;