import React from 'react';

import '../pages/styles/footerStyles.css'

//se referencia a la fuente iconográfica
import '../fonts/style.css'

var colorIcon = {
    color: "#757575",   
}

class Footer extends React.Component {
    render() {
        return <React.Fragment>
        
        <div className="container-block-footer">

            <div className="footer-container">

                <div className="footer-flex">
                    <span className="logofooter">
                        <span style={colorIcon} className="icon-Logo_net540"></span>
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
                        <a href="youTube.com/channel/UCm9SvjlV-2Z4cEdlLgGf8TQ"><span style={colorIcon} className="icon-Logo_youtube"></span></a>
                        <a href="instagram.com/net_540"><span style={colorIcon} className="icon-Logo_instagram"></span></a>
                        <a href="linkedin.com/company/campaña-540"><span style={colorIcon} className="icon-Logo_linkedin"></span></a>
                        <a href="facebook.com/net540"><span style={colorIcon} className="icon-Logo_facebook"></span></a>
                    </div>
                </div>

            </div>

        </div>
       
        </React.Fragment> 
    }
}

export default Footer;