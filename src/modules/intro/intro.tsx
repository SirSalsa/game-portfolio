import "./intro.scss"
import portrait from "../../media/portrait.png"

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
            
        </div>
    );
}
export default Intro