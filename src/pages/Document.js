import React, { useState } from 'react'
import { Link } from "react-router-dom";
import documentImage from '../assets/images/gir_document_image.png';
import documentPersonImage from '../assets/images/gir_document_person.png';
import dummyDatas from './dummyData';


export default function Document() {

    const [datas, setData] = useState(dummyDatas)


    function filterHandler(e) {
        let word = e.target.innerHTML;
        let trimWord = word.trim().split(/ +/).join('').toLowerCase();
        
        //Switching datas related to tab
        if(trimWord === 'papers' || trimWord === 'conferencepresentation'){
            const onlyPapers = dummyDatas.filter((data)=> data.category === trimWord)
            setData(onlyPapers)
        }
        else{
            setData(dummyDatas);
        }
      
        //Adding active class to selected tab
        let nextElement = e.target.parentElement.childNodes;
        nextElement.forEach(element => {
            if(element.classList.contains('active')){
                element.classList.remove('active')
            } 
        });
        e.target.classList.add('active')
    }

    return (
        <main class="gir_docum gir_page">
        <div class="gir_docum_head">
            <div class="gir_container">
                <div class="gir_search_form">
                    <input type="text" name="" id="" placeholder="Search" />
                    <button type="submit"></button>
                </div>
            </div>
        </div>
        <section class="gir_per_detail">
            <div class="gir_container">
                <div class="gir_per_block">
                    <div class="gir_per_img">
                        <Link to="#">
                            <img src={documentPersonImage} alt="" />
                        </Link>
                    </div>
                    <div class="gir_per_content">
                        <h2>Subrahmanya G M</h2>
                        <h4>IGNOU Delhi, Masters in Public Administration, Graduate Student +2</h4>
                        <ul class="gir_list">
                            <li>12 Followers</li>
                            <li>43 Following</li>
                            <li> 375 Total Views</li>
                        </ul>
                        <ul class="gir_button_list">
                            <li><Link to="#">+ Follow</Link></li>
                            <li><Link to="#">CV</Link></li>
                            <li><Link to="#">Website</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section class="gir_doc_filter">
            <div class="gir_container">
                <div class="gir_doc_filter_block">
                    <div class="buttons">
                        <button onClick={filterHandler} class="button all active">All</button>
                        <button onClick={filterHandler} class="button paper">Papers</button>
                        <button onClick={filterHandler} class="button conference">Conference Presentation</button>
                      </div>
                      
                      <div class="grid">
                          {
                              datas.map((data) => {
                                return (
                                    <div class='item paper' id={data.category}>
                                        <div class="gir_doc_item">
                                            <div class="doc_img doc_pdf">
                                                <img src={documentImage} alt="" />
                                            </div>
                                            <div class="doc_con">
                                                <h2>{data.header}</h2>
                                                <p>{data.body}</p>
                                                <ul class="doc_list">
                                                    <li><Link to="#">Download</Link></li>
                                                    <li><Link to="#">{data.reviewCount} Views </Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                              })
                          }
                        
                      </div>

                      <button class="gir_gen_read">Read more <span></span></button>
                </div>
            </div>
        </section>
    </main>
    )
}
