import React, { useState as ints} from 'react'
import { Link } from "react-router-dom";
import  Logo  from "../assets/images/logo.svg"
import { useLocation as History} from "react-router-dom";



export default function header() {

    
   const location = History();
   const { pathname }  =  location;
   const splitLocation = pathname.split("/");


   const [checked, setChecked] = ints(false);

 

   const toggleChecked = () =>{ 
        setChecked(value => !value);    
   }

    document.addEventListener('mousedown', function(){
        if(checked){
            setChecked(false);
        }
    })

    
    

    return (
        <header>
            <nav class="navbar">
                <section class="gir_nav_top">
                        <div class="gir_container">
                            <div class="gir_wrapper">
                                <div class="gir_logo_main">
                                    <Link to="/">
                                        <img src={Logo} alt="" />
                                        <span>Girvana Bharathi®</span>
                                    </Link>
                                </div>
                                <div class="gir_top_nav">
                                    <div class="gir_search">
                                        <form action="">
                                            <div class="gir_search-input">
                                                <input type="text" name="" id="" placeholder="Search" />
                                            </div>
                                            <button class="gir_search_submit" type="submit" value="">
                                                <span></span>
                                            </button>
                                        </form>
                                    </div>
                                    <div class="sl-nav gir_lang">
                                        <ul>
                                            <li class="gir_lang_item" >english<span></span>      
                                                <div class="triangle"></div>
                                                <ul>
                                                <li><span class="active">Kannada</span></li>
                                                <li><span>Sanskrit</span></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>
                <section class="gir_nav_bottom">
                        <div class="gir_container">
                            <div class="gir_wrapper">
                                <h1 class="gir_logo">
                                    <Link to="/" class="gir_logo_link">
                                        <img src={Logo} alt="" />
                                        <span>Girvana Bharathi®</span>
                                    </Link>
                                    </h1>
                                <button type="button" class={checked && window.innerWidth < 769 ? 'gir_burger active' : 'gir_burger' } id="gir_burger" onClick={toggleChecked}>
                                    <span class="gir_burger_line"></span>
                                    <span class="gir_burger_line"></span>
                                    <span class="gir_burger_line"></span>
                                    <span class="gir_burger_line"></span>
                                </button>
                                <div class={checked && window.innerWidth < 769 ? 'gir_menu active' : 'gir_menu' } id="gir_menu" >
                                    <ul class="gir_menu_inner">
                                        <li class="gir_menu_item"><Link to="/" className={splitLocation[1] === "" ? "active gir_menu_link" : "gir_menu_link"}>Home</Link></li>
                                        <li class="gir_menu_item"><Link to="about-us" className={splitLocation[1] === "about-us" ? "active gir_menu_link" : "gir_menu_link"}>about us</Link></li>
                                        <li class="gir_menu_item"><Link to="infrastructure" className={splitLocation[1] === "infrastructure" ? "active gir_menu_link" : "gir_menu_link"}>scholars</Link></li>
                                        <li class="gir_menu_item"><Link to="news" className={splitLocation[1] === "news" ? "active gir_menu_link" : "gir_menu_link"}>notification</Link></li>
                                        <li class="gir_menu_item"><Link to="director" className={splitLocation[1] === "director" ? "active gir_menu_link" : "gir_menu_link"}>girvani(wiki)</Link></li>
                                        <li class="gir_menu_item"><Link to="search" className={splitLocation[1] === "search" ? "active gir_menu_link" : "gir_menu_link"}>Gallery</Link></li>
                                        <li class="gir_menu_item"><Link to="document" className={splitLocation[1] === "document" ? "active gir_menu_link" : "gir_menu_link"}>Journals</Link></li>
                                        <li class="gir_menu_item"><Link to="donate" className={splitLocation[1] === "donate" ? "active gir_menu_link" : "gir_menu_link"}>Donate Us</Link></li>
                                        <li class="gir_menu_item"><Link to="sign-up" className={splitLocation[1] === "sign-up" ? "active gir_menu_link" : "gir_menu_link"}>Sign up</Link></li>
                                        <li class="gir_menu_item"><Link to="login" className={splitLocation[1] === "login" ? "active gir_menu_link" : "gir_menu_link"}>Login</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                </section>
            </nav>
        </header>
    )
}
