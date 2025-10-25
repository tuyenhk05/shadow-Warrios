/* eslint-disable jsx-a11y/img-redundant-alt */
import anhmadinh from "../../assets/images/background-shawdow.png";
import React from "react";
import FadeInWhenVisible from '../FadeAnimation/FadeInWhenVisible';

function ContentHome1() {
    return (
        <>
            <div className="home-container1" style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
                <section id="home1" className="home-section1">
                    <div className="home-section_content">
                    <FadeInWhenVisible>
                        <h2>Shadow Warriors:
                                MONSTER SLAYER</h2>
                        
                        <h4>FIGHT, EXPLORE AND ENJOY ADVENTURE</h4>
                            <span>Game is set in the world of fantasy. The land where everyone lived, the Continental, was ruled by King Logustin III. There was an epidemic that swept the Continental, causing sick people's bodies to slowly rot and lose consciousness - This event is called The Putrigo. To end this dangerous plague, the king command his most powerful priests and mages of the kingdom to perform a dark ritual using the flesh and blood of 1,000 uninfected people.</span>
                        </FadeInWhenVisible>
                    </div>
                    <div className="home-section_images">
                        <FadeInWhenVisible
                            direction="slideFromRight"
                        >
                            <span>SW: Monster Slayer <p>2024 - Aug</p></span>
                            </FadeInWhenVisible>
                        <FadeInWhenVisible
                            direction="slideFromRight"
                        >
                            <img src={anhmadinh} alt="Image 1" />
                        </FadeInWhenVisible>

                    </div>
                </section>
            </div>
        </>
    )
}
export default ContentHome1;