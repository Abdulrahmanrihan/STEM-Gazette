import React from 'react';
import './Footer.css';

function Footer() {
    return(
        <div className="Footer"> 
            <div className="leftpart">
                <img src="https://via.placeholder.com/50" />
            </div>
            <p style={{textAlign: 'center', width:'33%', float: 'bottom', fontSize: '13px', fontWeight: 'bold',}}> Copyrights 2020 STEM October High school</p>
            <div className="rightpart">
                <img className="iconSocial" src="https://img.icons8.com/fluent-systems-filled/24/000000/facebook-new.png"/>
                <img className="iconSocial" src="https://img.icons8.com/fluent-systems-filled/24/000000/twitter.png"/>
                <img className="iconSocial" src="https://img.icons8.com/fluent-systems-filled/24/000000/linkedin.png"/>
            </div>
        </div>
    )
}

export default Footer;