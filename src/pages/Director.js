import React from 'react'
import  directorImage  from "../assets/images/gir_director_sir.jpg"

export default function Director() {
    return (
        <main class="gir_director gir_page">
        <section class="gir_banner_com gir_mb_50">
        </section>

        <section class="gir_director-content gir_mb_50">
            <div class="gir_container">
                <div class="gir_com_title">Director’s Desk</div>
                <div class="gir_wrapper">
                    <div class="gir_dir">
                        <img src={directorImage} alt="" />
                    </div>
                    <div class="gir_dir_content">
                        <h2>Prof. K.Chandamouli</h2>
                        <h5>Vice-Chancellor :</h5>
                        <p>The website of Karnataka Samskrit University is now Updated. The university was established in 2010, as a result of massive efforts of the Government of Karnataka. It is the objective of the Samskrit University to integrate our ancient knowledge with modern science & technology and social sciences. We need to look at Samskrit not just as a language, but from the scientific and philosophical points of view. Our primary focus will be on teaching and research. We need to study the history of Indian heritage through Samskrit. We need to find and light the lamps of Kannada and Samskrit culture. Samskrit should be the leader of modern Indian management and social sciences. All of us have to put in joint efforts to achieve this. I humbly request the co-operation of all Samskrit and Samskrit-Kannada scholars in this endeavour.</p>
                    </div>
                </div>
            </div>
        </section>
        
    </main>
    )
}
