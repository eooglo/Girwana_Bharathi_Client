import React from 'react'
import  sliderImage  from "../assets/images/gir_home_slider_image.jpg"
import  directorImage  from "../assets/images/gir_director_sir.jpg"
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

export default function Home() {
    return (
        <main class="gir_home gir_page">
            <section class="gir_banner gir_mb_50">
                <div class="gir_container">
                    <div class="gir_banner_item">
                        <div class="gir_title">Girvana Bharathi</div>
                        <div class="gir_sub_title">The University of Excellence</div>
                    </div>
                </div>
            </section>

            <section class="gir_home_slider">
                <div class="gir_container">
                    <div class="gir_slider gir_mb_50">
                        <OwlCarousel items={1}  className="owl-theme"  loop  nav  margin={8}  >
                            <div class="gir_slider_item">
                                <img src={sliderImage} alt=""/>
                            </div>
                            <div class="gir_slider_item">
                                <img src={sliderImage} alt=""/>
                            </div>
                            <div class="gir_slider_item">
                                <img src={sliderImage} alt=""/>
                            </div>
                        </OwlCarousel >
                    </div>
                </div>
            </section>

            <section class="gir_home_about">
                <div class="gir_container">
                    <div class="gir_about_block">
                        <h2 class="gir_com_title">About Us</h2>
                        <p class="gir_com_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel <span id="gir_dots">......</span>
                        <span id="gir_more">erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span><button onclick="myFunction()" id="gir_Btn">Read more</button></p>
                    </div>
                </div>
            </section>

            <section class="gir_home_events">
                <div class="gir_container">
                    <div class="gir_warpper">
                        <div class="gir_events">
                            <Tabs id="gir_events_tab">
                                <TabList id="gir_events_tab_block">
                                    <Tab class="gir_tabs gir_tabs_active">Notifications</Tab>
                                    <Tab class="gir_tabs">Upcoming Events</Tab>
                                </TabList>
                            
                                <div class="gir_tab_body">
                                    <TabPanel id="gir_content gir_content_active">
                                    <div class="gir_content_item">
                                        <div class="gir_item">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel </p>
                                        </div>
                                        <div class="gir_item">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel </p>
                                        </div>
                                        <div class="gir_item">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel </p>
                                        </div>
                                        <div class="gir_item">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel </p>
                                        </div>
                                    </div>
                                    </TabPanel>
                                    <TabPanel id="gir_content">
                                        <h2>Upcoming Events</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus necessitatibus possimus. Sapiente aspernatur neque atque in eum tenetur id!</p>
                                    </TabPanel>
                                </div>
                            </Tabs>
                        </div>
                        <div class="gir_ad">
                            <div class="gir_ad_link">
                                <Link to="/">Ad<img src="" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="gir_home_director">
                <div class="gir_container">
                    <div class="gir_wrapper">
                        <div class="gir_dir">
                            <img src={directorImage} alt="" />
                        </div>
                        <div class="gir_dir_content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, v </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
