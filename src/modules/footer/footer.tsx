import "./footer.scss"
import linkedin from "./media/linkedin.png"

function Footer() {
    return(
        <div className="Footer_wrapper">
            <h1>Contact</h1>
            <p>Want to get in touch? Here are a few ways you can connect with me.</p>
            <div id="contactinfo_container">
                <a href="https://www.linkedin.com/in/torsten-lareke/">
                    <img width="35px" src={linkedin} alt="Linkedin img" />
                </a>
                <a href="https://www.linkedin.com/in/torsten-lareke/">
                    <img width="35px" src={linkedin} alt="Linkedin img" />
                </a>
                <a href="https://www.linkedin.com/in/torsten-lareke/">
                    <img width="35px" src={linkedin} alt="Linkedin img" />
                </a>
            </div>
        </div>
    );
}

export default Footer