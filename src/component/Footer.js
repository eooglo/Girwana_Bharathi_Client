import React from 'react'
import { Link } from "react-router-dom";
import  FooterLogo  from "../assets/images/gir_footer_logo.svg"


export default function footer() {
    return (
        <footer>
            <div class="gir_footer">
                <div class="gir_container">
                    <div class="gir_wrapper">
                        <setion class="gir_foot_one gir_foot_sec">
                            <div class="gir_foot_logo">
                                <Link to="/"><img src={FooterLogo} alt=""/></Link>
                            </div>
                            <div class="gir_foot_social">
                                <ul>
                                    <li><Link to="#"><span></span></Link></li>
                                    <li><Link to="#"><span></span></Link></li>
                                    <li><Link to="#"><span></span></Link></li>
                                </ul>
                            </div>
                        </setion>
                        <setion class="gir_foot_two gir_foot_sec">
                            <div class="gir_foot_menu">
                                <div class="gir_foot_title">Contact us</div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel </p>
                            </div>
                        </setion>
                        <setion class="gir_foot_three gir_foot_sec">
                            <div class="gir_foot_menu">
                                <div class="gir_foot_title">Career (resume)</div>
                                <ul>
                                    <li><Link to="sign-up">Sign Up</Link></li>   
                                    <li><Link to="login">Login</Link></li>   
                                    <li><Link to="/">Home</Link></li>   
                                    <li><Link to="about-us">About</Link></li>   
                                    <li><Link to="donate">Donate</Link></li>   
                                </ul>
                            </div></setion>
                        <setion class="gir_foot_four gir_foot_sec">
                            <div class="gir_foot_menu">
                                <div class="gir_foot_title">important Links</div>
                                <ul>
                                    <li><Link to="about-us">About Us</Link></li>   
                                    <li><Link to="infrastructure">Infra</Link></li>   
                                    <li><Link to="achievements">Achievement</Link></li>   
                                    <li><Link to="contact">contact Us</Link></li>   
                                </ul>
                            </div>
                        </setion>
                        <setion class="gir_foot_five gir_foot_sec">
                            <div class="gir_foot_menu">
                                <div class="gir_foot_title">Quick link</div>
                                <ul>
                                    <li><Link to="director">Director Desk</Link></li>   
                                    <li><Link to="news">News & Events</Link></li>   
                                    <li><Link to="document">Journals</Link></li>  
                                </ul>
                            </div></setion>
                    </div>
                </div>
            </div>
            <div class="gir_copy_rights">
                <div class="gir_container">
                    <div class="gir_wrapper">
                        <div class="gir_copy_text">
                            copyright 2020 @ girvanabharathi
                        </div>
                        <div class="gir_develop">
                            Website Policy | Developed By eooglo.com
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
