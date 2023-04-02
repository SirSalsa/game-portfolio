import "./intro.scss"
import portrait from "../../media/portrait.png"
import susimg from "../../media/sus.png"
import controller from "../../media/controller.png"
import code from "../../media/code.png"

function Intro() {
    return(
        <div className="Intro_wrapper">
            <div id="title_container">
                <h1>Torsten Lareke</h1>
                <h2>Game designer with a strong technical background</h2>
            </div>
            <div id="portrait_container">
                <img src={portrait} alt="Portrait" />
            </div>
            <div className="About_wrapper">
                <div id="desc_container">
                    <h2>About Me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                <div id="background_container">
                    <article>
                        <img src={controller} id="background_img"/>
                        <div>
                            <h3>Part Designer</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </article>
                    <article>
                        <img src={code} id="background_img"/>
                        <div>
                            <h3>Part Programmer</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}
export default Intro