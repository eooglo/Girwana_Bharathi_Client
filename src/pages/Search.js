import React from 'react';
import { Link } from "react-router-dom";

import  worldImage  from "../assets/images/gir_world.png"
import  dummyImage  from "../assets/images/gir_slider_demo_image.png"

import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  



const options = {
    responsiveClass: true,
    dots: false,
    autoplay: false,
    responsive: {
        0: {
            items: 1,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 3,
        },
        1500: {
            items: 4,
        }
    },
};

export default function Search() {
    return (
        <main class="gir_search_pg gir_page">
            <div class="gir_search_head">
                <div class="gir_container">
                    <div class="gir_search_img">
                        <img src={worldImage} alt=""/>
                    </div>
                    <div class="gir_search_form">
                        <input type="text" name="" id="" placeholder="English" />
                        <button type="submit"></button>
                    </div>
                </div>
            </div>
            <section class="gir_doc_slider">
                <div class="gir_container">
                    <div class="gir_slider">
                        <h2>Veda Upanishads</h2>
                        <OwlCarousel items={3}  className="owl-theme"  loop  nav  margin={40}  {...options}>

                            <div class="gir_slider_item">
                                <div class="gir_img">
                                    <img src={dummyImage} alt=""/>
                                </div>
                                <div class="gir_content">
                                    <p>The website of Karnataka Samskrit University is now Updated. The university was established in 2010, as a result of massive efforts of the Government of Karnataka. It is the objective of the Samskrit University</p>
                                    <Link to="#">read more</Link>
                                </div>
                            </div>
                            <div class="gir_slider_item">
                                <div class="gir_img">
                                    <img src={dummyImage} alt=""/>
                                </div>
                                <div class="gir_content">
                                    <p>The website of Karnataka Samskrit University is now Updated. The university was established in 2010, as a result of massive efforts of the Government of Karnataka. It is the objective of the Samskrit University</p>
                                    <Link to="#">read more</Link>
                                </div>
                            </div>
                            <div class="gir_slider_item">
                                <div class="gir_img">
                                    <img src={dummyImage} alt=""/>
                                </div>
                                <div class="gir_content">
                                    <p>The website of Karnataka Samskrit University is now Updated. The university was established in 2010, as a result of massive efforts of the Government of Karnataka. It is the objective of the Samskrit University</p>
                                    <Link to="#">read more</Link>
                                </div>
                            </div>
                            <div class="gir_slider_item">
                                <div class="gir_img">
                                    <img src={dummyImage} alt=""/>
                                </div>
                                <div class="gir_content">
                                    <p>The website of Karnataka Samskrit University is now Updated. The university was established in 2010, as a result of massive efforts of the Government of Karnataka. It is the objective of the Samskrit University</p>
                                    <Link to="#">read more</Link>
                                </div>
                            </div>
                            <div class="gir_slider_item">
                                <div class="gir_img">
                                    <img src={dummyImage} alt=""/>
                                </div>
                                <div class="gir_content">
                                    <p>The website of Karnataka Samskrit University is now Updated. The university was established in 2010, as a result of massive efforts of the Government of Karnataka. It is the objective of the Samskrit University</p>
                                    <Link to="#">read more</Link>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
            <section class="gir_doc_slider">
                <div class="gir_container">
                    <div class="gir_slider">
                        <h2>Vedanta’s </h2>
                        <OwlCarousel items={3}  className="owl-theme"  loop  nav  margin={40} {...options}>
                            <div class="gir_slider_item">
                                <div class="gir_img">
                                    <img src={dummyImage} alt=""/>
                                </div>
                                <div class="gir_content">
                                    <p>The website of Karnataka Samskrit University is now Updated. The university was established in 2010, as a result of massive efforts of the Government of Karnataka. It is the objective of the Samskrit University</p>
                                    <Link to="#">read more</Link>
                                </div>
                            </div>
                            <div class="gir_slider_item">
                                <div class="gir_img">
                                    <img src={dummyImage} alt=""/>
                                </div>
                                <div class="gir_content">
                                    <p>The website of Karnataka Samskrit University is now Updated. The university was established in 2010, as a result of massive efforts of the Government of Karnataka. It is the objective of the Samskrit University</p>
                                    <Link to="#">read more</Link>
                                </div>
                            </div>
                            <div class="gir_slider_item">
                                <div class="gir_img">
                                    <img src={dummyImage} alt=""/>
                                </div>
                                <div class="gir_content">
                                    <p>The website of Karnataka Samskrit University is now Updated. The university was established in 2010, as a result of massive efforts of the Government of Karnataka. It is the objective of the Samskrit University</p>
                                    <Link to="#">read more</Link>
                                </div>
                            </div>
                            <div class="gir_slider_item">
                                <div class="gir_img">
                                    <img src={dummyImage} alt=""/>
                                </div>
                                <div class="gir_content">
                                    <p>The website of Karnataka Samskrit University is now Updated. The university was established in 2010, as a result of massive efforts of the Government of Karnataka. It is the objective of the Samskrit University</p>
                                    <Link to="#">read more</Link>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
            <section class="gir_doc_slider">
                <div class="gir_container">
                    <div class="gir_slider">
                        <h2>Smritis </h2>
                        <OwlCarousel items={3}  className="owl-theme"  loop  nav  margin={40} {...options} >
                            <div class="gir_slider_item">
                                <div class="gir_img">
                                    <img src={dummyImage} alt=""/>
                                </div>
                                <div class="gir_content">
                                    <p>The website of Karnataka Samskrit University is now Updated. The university was established in 2010, as a result of massive efforts of the Government of Karnataka. It is the objective of the Samskrit University</p>
                                    <Link to="#">read more</Link>
                                </div>
                            </div>
                            <div class="gir_slider_item">
                                <div class="gir_img">
                                    <img src={dummyImage} alt=""/>
                                </div>
                                <div class="gir_content">
                                    <p>The website of Karnataka Samskrit University is now Updated. The university was established in 2010, as a result of massive efforts of the Government of Karnataka. It is the objective of the Samskrit University</p>
                                    <Link to="#">read more</Link>
                                </div>
                            </div>
                            <div class="gir_slider_item">
                                <div class="gir_img">
                                    <img src={dummyImage} alt=""/>
                                </div>
                                <div class="gir_content">
                                    <p>The website of Karnataka Samskrit University is now Updated. The university was established in 2010, as a result of massive efforts of the Government of Karnataka. It is the objective of the Samskrit University</p>
                                    <Link to="#">read more</Link>
                                </div>
                            </div>
                            <div class="gir_slider_item">
                                <div class="gir_img">
                                    <img src={dummyImage} alt="" />
                                </div>
                                <div class="gir_content">
                                    <p>The website of Karnataka Samskrit University is now Updated. The university was established in 2010, as a result of massive efforts of the Government of Karnataka. It is the objective of the Samskrit University</p>
                                    <Link to="#">read more</Link>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        </main>
    )
}
