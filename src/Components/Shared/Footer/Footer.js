import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    // react FontAwesomeIcon icon 
    const facebookIcon = <FontAwesomeIcon icon={faFacebook} />
    const instagramIcon = <FontAwesomeIcon icon={faInstagram} />
    const githubIcon = <FontAwesomeIcon icon={faGithub} />
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <div className="copyright">
                            <p>OAHP © Copyright 2021. All Rights Reserved.<span className="text-info fw-bolder"> Development By Saif & Meem.</span></p>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-6">
                        <div className="social-icon text-center">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><span>{facebookIcon}</span></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><span>{instagramIcon}</span></a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><span>{githubIcon}</span></a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;