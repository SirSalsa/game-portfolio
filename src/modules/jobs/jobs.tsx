import "./jobs.scss"
import candycrushlogo from "./media/professional/candy_crush_logo.jpg"
import petrescuelogo from "./media/professional/petrescuelogo.png"
import roofRunners from "./media/other/roofrunners.jpg"
import laborated from "./media/other/laborated.png"
import { useState } from "react"

function Jobs() {

    const [showWindow, setShowWindow] = useState(false);

    const handleProjectClick = () => {
        setShowWindow(true);
    };

    const handleCloseClick = () => {
        setShowWindow(false);
    };

    return(
        <main>
            <div className="PP_wrapper">
                <div id="header_container">
                    <h1>Professional Projects</h1>
                    <p>Click on a tile to learn more about a project.</p>
                </div>
                <div id="projects_container">
                    <article onClick={handleProjectClick}>
                        <img src={candycrushlogo} alt="Candy Crush Saga Logo" />
                        <div className="tag_container">
                            <p id="tag_1">Level Design</p>
                            <p id="tag_2">Game Design</p>
                        </div>
                        <h3>Candy Crush Saga</h3>
                        <h4>King</h4>
                    </article>
                    <article>
                        <img src={petrescuelogo} alt="Pet Rescue Saga Logo" />
                        <div className="tag_container">
                            <p id="tag_1">Level Design</p>
                        </div>
                        <h3>Pet Rescue Saga</h3>
                        <h4>King</h4>
                    </article>
                </div>
            </div>
            <div className="OP_wrapper">
                <div id="header_container">
                    <h1>Other Projects</h1>
                    <p>Click on a tile to learn more about a project.</p>
                </div>
                <div id="projects_container">
                    <article>
                        <img src={roofRunners} alt="Roof Runners Logo" />
                        <div className="tag_container">
                            <p id="tag_1">Level Design</p>
                            <p id="tag_2">Game Design</p>
                            <p id="tag_3">Unity</p>
                        </div>
                        <h3>Roof Runners</h3>
                        <h4>School Project</h4>
                    </article>
                    <article>
                        <img src={laborated} alt="Laborated Logo" />
                        <div className="tag_container">
                            <p id="tag_1">Level Design</p>
                            <p id="tag_2">Game Design</p>
                        </div>
                        <h3>Laborated</h3>
                        <h4>School Project</h4>
                    </article>
                </div>
            </div>
            {showWindow && (
                <div className="ProjectWindow_wrapper">
                    <h1>Project Title</h1>
                    <img src={candycrushlogo} alt="Candy Crush Saga Logo"/>
                    <div className="tag_container">
                        <p id="tag_1">Level Design</p>
                        <p id="tag_2">Game Design</p>
                    </div>
                    <p id="PW_desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <div id="PW_overview">
                        <h4>What I did:</h4>
                        <ul>
                            <li>Feeding the dog.</li>
                            <li>Getting coffee to my seniors.</li>
                            <li>Pushing buttons everyday.</li>
                            <li>Stealing milk from the cafeteria.</li>
                            <li>Feeding the dog.</li>
                            <li>Getting coffee to my seniors.</li>
                            <li>Pushing buttons everyday.</li>
                            <li>Stealing milk from the cafeteria.</li>
                        </ul>
                    </div>
                </div>
            )}
        </main>
    );
}

export default Jobs