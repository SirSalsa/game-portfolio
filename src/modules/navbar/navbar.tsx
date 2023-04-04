import "./navbar.scss"

function Navbar() {
    const scrollToClass = (className: string) => {
        const target = document.querySelector(`.${className}`) as HTMLElement;
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <div className="Navbar_wrapper">
            <div id="left_container">
                <h1>Torsten Lareke</h1>
            </div>
            <div id="right_container">
                <h2 onClick={() => scrollToClass('Intro_wrapper')}>About</h2>
                <h2 onClick={() => scrollToClass('PP_wrapper')}>Professional Projects</h2>
                <h2 onClick={() => scrollToClass('OP_wrapper')}>Other Projects</h2>
                <h2 onClick={() => scrollToClass('Footer_wrapper')}>Contact</h2>
            </div>
        </div>
    );
}

export default Navbar