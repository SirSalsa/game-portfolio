import "./footer.scss"
import linkedin from "./media/linkedin.png"
import email from "./media/email.png"
import phone from "./media/phone.png"

function Footer() {
    return(
        <div className="Footer_wrapper">
            <h1>Contact</h1>
            <p id="contact_desc">Want to get in touch? Here are a few ways you can connect with me.</p>
            <div id="contactinfo_container">
                <a href="https://www.linkedin.com/in/torsten-lareke/">
                    <img src={linkedin} alt="Linkedin img" />
                </a>
                <a href="mailto:torsten.lareke@hotmail.se">
                    <img src={email} alt="Email img" />
                </a>
                <a href="tel:+46-73268-2109">
                    <img src={phone} alt="Phone img" />
                </a>
            </div>
            
            <div id="legal_text">
                <p>Copyright © 2023 by Torsten Lareke. All rights reserved.</p>
                <p>Any games or trademarks shown on this website are the property of their respective owners.</p>
            </div>
        </div>
    );
}

export default Footer