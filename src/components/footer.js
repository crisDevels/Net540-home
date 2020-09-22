import React from 'react';
import { Link } from 'react-router-dom'

import '../pages/styles/footerStyles.css'

//se referencia a la fuente iconográfica
import '../fonts/style.css'

var colorIcon = {
    color: "#1DAEFF",   
}

class Footer extends React.Component {
    render() {
        return <React.Fragment>  
        <div className="container-block-footer">
            <div className="wrapper-home">
                <div className="footer-container">

                    <div className="footer-flex">
                        <span className="logofooter">
                            <p className="logo-footer-case">Net540 © 2020</p>
                        </span>
                        <ol className="listTerms">
                            <li>
                                <Link to="/condiciones-de-uso">Términos y condiciones</Link>
                            </li>
                        </ol>
                        <div className="socialMedia">
                            <a href="htts://youTube.com/channel/UCm9SvjlV-2Z4cEdlLgGf8TQ"><span style={colorIcon} className="icon-Logo_youtube"></span></a>
                            <a href="htts://instagram.com/net_540"><span style={colorIcon} className="icon-Logo_instagram"></span></a>
                            <a href="htts://linkedin.com/company/campaña-540"><span style={colorIcon} className="icon-Logo_linkedin"></span></a>
                            <a href="htts://facebook.com/net540"><span style={colorIcon} className="icon-Logo_facebook"></span></a>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        </React.Fragment> 
    }
}

export default Footer;