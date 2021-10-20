import React from 'react'
import { Link } from "react-router-dom";
import cartImage from '../assets/images/gir_cart_img.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';



export default function Donate() {
    return (
        <main class="gir_donate gir_page">
            <div class="gir_donate_head">
                <div class="gir_container">
                    <h2 class="gir_com_title">Donate Us</h2> 
                </div>
            </div>

        <section class="gir_donate_tabs gir_mb_50">
            <div class="gir_container">
                <div class="gir_donate_tab_block">
                        <Tabs id="gir_donate_tab_item">
                            <TabList id="gir_donate_tab_item_ul">
                                <Tab>fund transfer /cheque</Tab>
                                <Tab>Online Donation</Tab>
                            </TabList>
                        
                            <div id="gir_donate_tab_body">
                                <TabPanel id="gir_donate_content ">
                                   <div class="gir_donate_content_item">
                                       <div class="gir_item">
                                           <h2>For Indian Account Holders</h2>
                                           <div class="gir_bank">
                                            Bank Name: Axis Bank - gujarat <br />
                                            Account Number: 000000000000009 <br />
                                            IFSC: UTIB0000000
                                           </div>
                                       </div>
                                       <div class="gir_item">
                                           <h2>For Indian Account Holders</h2>
                                           <div class="gir_bank">
                                                Bank Name: Axis Bank - gujarat <br />
                                                Account Number: 000000000000009 <br />
                                                IFSC: UTIB0000000
                                           </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel id="gir_donate_content">
                                    <div class="gir_check_out">
                                        <div class="gir_check_out_head">
                                            <ul>
                                                <li>Select Currency: </li>
                                                <li>
                                                    <select name="" id="">
                                                        <option value="inr">inr</option>
                                                        <option value="doller">doller</option>
                                                    </select>
                                                </li>
                                                <li>Unit Cost</li>
                                                <li>No. Of Units</li>
                                                <li>Amount</li>
                                            </ul>
                                        </div>
                                        <div class="gir_check_out_list">
                                            <div class="gir_check_out_list_item">
                                                <div class="gir_check_out_img">
                                                    <img src={cartImage} alt="" />
                                                </div>
                                                <div class="gir_check_out_content">
                                                    <h2>Sponsor a child for education by sponsoring school and tuition fees</h2>
                                                    <Link to="#">Read More</Link>
                                                    <div class="gir_check_out_btn">
                                                       <span> Tax benefit: 50%</span>
                                                    </div>
                                                </div>
                                                <div class="gir_check_out_cost">
                                                    ₹ 9,600
                                                </div>
                                                <div class="gir_check_out_unit">
                                                    <input type="number" name="" id="" value="1"/>
                                                </div>
                                                <div class="gir_check_out_amt">
                                                    ₹ 9,600
                                                </div>
                                            </div>
                                            <div class="gir_check_out_list_item">
                                                <div class="gir_check_out_img">
                                                    <img src={cartImage} alt=""/>
                                                </div>
                                                <div class="gir_check_out_content">
                                                    <h2>Sponsor a child for education by sponsoring school and tuition fees</h2>
                                                    <Link to="#">Read More</Link>
                                                    <div class="gir_check_out_btn">
                                                       <span> Tax benefit: 50%</span>
                                                    </div>
                                                </div>
                                                <div class="gir_check_out_cost">
                                                    ₹ 9,600
                                                </div>
                                                <div class="gir_check_out_unit">
                                                    <input type="number" name="" id="" value="1"/>
                                                </div>
                                                <div class="gir_check_out_amt">
                                                    ₹ 9,600
                                                </div>
                                            </div>
                                            <div class="gir_check_out_list_item">
                                                <div class="gir_check_out_img">
                                                    <img src={cartImage} alt="" />
                                                </div>
                                                <div class="gir_check_out_content">
                                                    <h2>Sponsor a child for education by sponsoring school and tuition fees</h2>
                                                    <Link to="#">Read More</Link>
                                                    <div class="gir_check_out_btn">
                                                       <span> Tax benefit: 50%</span>
                                                    </div>
                                                </div>
                                                <div class="gir_check_out_cost">
                                                    ₹ 9,600
                                                </div>
                                                <div class="gir_check_out_unit">
                                                    <input type="number" name="" id="" value="1" />
                                                </div>
                                                <div class="gir_check_out_amt">
                                                    ₹ 9,600
                                                </div>
                                            </div>
                                            <div class="gir_total">
                                                <div class="gir_total_amt">
                                                    <div class="gir_total_text">
                                                        Total
                                                    </div>
                                                    <div class="gir_total_cost">
                                                       ₹ 9,600
                                                    </div>
                                                </div>
                                                <div class="gir_total_submit">
                                                    <button>Donate</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            </div>
                        </Tabs>
                    </div>
            </div>
        </section>

        <section class="gir_policy">
            <div class="gir_container">
                <h2>RETURN/ REFUND POLICY:</h2>
                <p>Girvana Bharathi is an international organization with offices strategically located in the United States and around the globe. GEI has headquarters both in Chapel Hill, North Carolina, USA and in Shanghai, China; two communities internationally respected for offering the best educational opportunities of their respective nations. GEI is able to utilize the leading educational resources of every nation for academic enrichment and cross-cultural education through collaboration with universities, research organizations, educational institutes, government entities, scholars and students. GEI ‘s mission is to build synthesis and attain educational success by sharing these resources with practitioners, scholars and students from throughout the world.</p>
            </div>
        </section>
    </main>
    )
}
