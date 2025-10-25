/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./home.scss";
import ContentHome1 from "./contentHome1";
import ContentHome2 from "./contentHome2";
import ContentHome3 from "./contentHome3";
import ContentHome4 from "./contentHome4";
function Home() {
    return (
        <>
            <div className="home-container">
                <section id="home" className="home-section">
                    <div className="home-section_name">
                        {/* "Shadow Warriors:" */}
                        <div>
                            Shadow Warriors:
                        </div>

                        {/* "MONSTER SLAYER" */}
                        <h2>MONSTER SLAYER</h2>
                    </div>

                    {/* Thêm className để style */}
                    <button className="download-button">DOWNLOAD NOW</button>

                    <div className="scroll-down-icon"></div>
                </section>
            </div>
            <ContentHome1 />
            <ContentHome2 />
            <ContentHome3 />
            <ContentHome4/>
        </>
    );
}

export default Home;