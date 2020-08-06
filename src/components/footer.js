import React from 'react';

import logo from "../images/logoNet.png"
import youtube from "../images/YOUTUBE.png"
import instagram from "../images/INSTAGRAM.png"
import linkedIn from "../images/LINKEDIN.png"
import facebook from "../images/FACEBOOK.png"

import '../pages/styles/footerStyles.css'


class Footer extends React.Component {
    render() {
        return <React.Fragment>
        
        <div className="footerColor">
            <span className="logofooter">
                <img src={logo} width="80px"/>
                <p>© 2020</p>
            </span>
            <ol className="listTerms">
                <li>
                    <a href="/">Condiciones de uso</a> 
                </li>
                <li>
                    <p>•</p> 
                </li>
                <li>
                    <a href="/">Política de privacidad</a>
                </li>
                <li>
                    <p>•</p> 
                </li>
                <li>
                    <a href="/">Política de copyright</a> 
                </li>
                
            </ol>
            
            <div className="socialMedia">
                <a href="youTube.com/channel/UCm9SvjlV-2Z4cEdlLgGf8TQ"><img src={youtube} width="30px"  alt="icono de youtube"/></a>
                <a href="instagram.com/net_540"><img src={instagram} width="20px" alt="icono de instagram"/></a>
                <a href="linkedin.com/company/campaña-540"><img src={linkedIn} width="20px"  alt="icono de facebook"/></a>
                <a href="facebook.com/net540"><img src={facebook} width="20px"  alt="icono de linkedIn"/></a>
            </div>
        </div>
       
        </React.Fragment> 
    }
}

export default Footer;