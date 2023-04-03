import "./intro.scss"
import portrait from "./media/portrait.png"
import cv_url from "./media/cv.png"

function Intro() {
    return(
        <div className="Intro_wrapper">
            <div id="title_container">
                <h1>Torsten Lareke</h1>
                <h2>Level designer with a strong technical background</h2>
            </div>
            <div id="portrait_container">
                <img src={portrait} alt="Portrait" />
            </div>
            <div id="desc_container">
                <h2>About Me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <form id="cv_button_wrapper" target="_blank">
                    <button id="about_button" formAction="https://drive.google.com/file/d/18Mti1pgJeeQZ0ci-s3oold7Ah3ZnK3iV/view?usp=share_link">
                        <img src={cv_url} alt="CV icon" />
                        <p>Download CV</p>
                    </button>
                </form>
            </div>
        </div>
    );
}
export default Intro