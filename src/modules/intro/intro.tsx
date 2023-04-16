import "./intro.scss"
import portrait from "./media/portrait.png"
import cv_url from "./media/cv.png"

function Intro() {
    return (
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
                <p>
                    Hello there! I'm Torsten, a level designer and backend developer with a strong passion for creating unforgettable game experiences. With almost two years of experience in the games industry, I honed my design skills working on casual mobile games.

                    In addition to my design work, I gained experience in backend C# development, where I learned skills in database management, API integration, and more. Combining my design skills with my programming capabilities, I'm able to create better and more engaging experiences in games.

                    I'm always up for a challenge and eager to try out new things, so feel free to reach out if you're interested in collaborating on a project. Let's create something amazing together!
                </p>
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