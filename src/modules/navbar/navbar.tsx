import "./navbar.scss"

function Navbar() {
    return(
        <div className="Navbar_wrapper">
            <div id="left_container">
                <h1>Torsten Lareke</h1>
            </div>
            <div id="right_container">
                <article>
                    <h2>About</h2>
                </article>
                <article>
                    <h2>Professional Projects</h2>
                </article>
                <article>
                    <h2>Other Projects</h2>
                </article>
                <article>
                    <h2>Contact</h2>
                </article>
            </div>
        </div>
    );
}

export default Navbar