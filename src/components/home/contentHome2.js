/* eslint-disable jsx-a11y/img-redundant-alt */
import gif from "../../assets/images/cardgif.gif"; 
import FadeInWhenVisible from '../FadeAnimation/FadeInWhenVisible';

function ContentHome2() {
    return (
        <>
            <div className="content-home2" style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
                        <FadeInWhenVisible
                           
                        >
                <section className="content-home2_section">
                        
                    <div className="content-home2_section-gif">
                      
                            <img src={gif} alt="gif image" />
                                         

                        </div>

                    <div className="content-home2_section-info">
                       
                        <h2>YOUR ADVENTURE</h2>
                        <p>CREATIVITY IS YOUR GREATEST WEAPON.</p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
                    </div>
                    </section>
                </FadeInWhenVisible>
           </div>
        </>
    )
}
export default ContentHome2;