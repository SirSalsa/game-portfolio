import "./footer.scss"
import linkedin from "./media/linkedin.png"
import email from "./media/email.png"

function Footer() {
    return(
        <div className="Footer_wrapper">
            <h1 id="contact_header">Contact</h1>
            <p id="contact_desc">Want to get in touch? Here are a few ways you can connect with me.</p>
            <div id="contactinfo_container">
                <div>
                    <a href="mailto:torsten.lareke@hotmail.se">
                        <img src={email} alt="Email img" id="contact_icon"/>
                    </a>
                    <p id="contact_text">torsten.lareke@hotmail.se</p>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/torsten-lareke/">
                        <img src={linkedin} alt="Linkedin img" id="contact_icon"/>
                    </a>
                    <p id="contact_text">Torsten Lareke</p>
                </div>
            </div>
            <div id="legal_text">
                <p>Copyright © 2023 by Torsten Lareke. All rights reserved. Any games or trademarks shown on this website are the property of their respective owners.</p>
            </div>
        </div>
    );
}

export default Footer