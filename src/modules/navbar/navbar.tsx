import { useEffect, useState } from 'react';
import "./navbar.scss"

function Navbar() {
    const [navbarHeight, setNavbarHeight] = useState<number>(0);

    const scrollToClass = (className: string) => {
        const target = document.querySelector(`.${className}`) as HTMLElement;
        if (target) {
            const targetTop = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            window.scrollTo({ top: targetTop, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const navbar = document.querySelector('.Navbar_wrapper') as HTMLElement;
        if (navbar) {
            setNavbarHeight(navbar.getBoundingClientRect().height);
        }

        document.querySelectorAll('#right_container h2').forEach((link) => {
            link.addEventListener('click', () => {
                const targetClass = (link.textContent || '').toLowerCase();
                scrollToClass(targetClass);
            });
        });
    }, []);

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