
import React, { memo } from "react";
import './footer.css'


const Footer = (props) => {
    return(
        <div className='footer-container'>
            <div className='footer-info'>
                <div className="footer-content">
                    <h4>Content</h4>
                    <p>easy-to-use online personal finance application that imports data from Quicken and Mint and automatically downloads data from banking, credit card, and retirement accounts. With no software to install, we’re anywhere you have an Internet connection.</p>
                    <div className='social-media'>
                        <ul>
                            <li><i className="fab fa-facebook"></i></li>
                            <li><i className="fab fa-linkedin-in"></i></li>
                            <li><i className="fab fa-twitter"></i></li>
                            <li><i className="fab fa-instagram"></i></li>
                        </ul>
                    </div>
                </div>
                <div className='contact-info'>
                    <div className='location'>
                        <h4>Location</h4>
                        <p>423-425 Caledonian Rd, London N7 9BQ, United Kingdom</p>
                    </div>
                    <ul className="contact">
                        <li><i className="fas fa-phone"></i><span>(44) 000-00000</span></li>
                        <li><i className="far fa-envelope"></i><span>info@nfb.com</span></li>
                    </ul>
                </div>
            </div>
         
            <div className='copyright'>
                <i className="far fa-copyright"></i>
                <span> 2020. All Rights</span>
            </div>           
        </div>
    )
}

export default memo(Footer)