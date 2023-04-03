import "./jobs.scss"
import candycrushlogo from "./media/professional/candy_crush_logo.jpg"
import petrescuelogo from "./media/professional/petrescuelogo.png"
import roofRunners from "./media/other/roofrunners.jpg"
import laborated from "./media/other/laborated.png"

function Jobs() {
    return(
        <main>
            <div className="PP_wrapper">
                <div id="header_container">
                    <h1>Professional Projects</h1>
                    <p>Click on a tile to learn more about a project.</p>
                </div>
                <div id="projects_container">
                    <article>
                        <img src={candycrushlogo} alt="Candy Crush Saga Logo" />
                        <h3>Candy Crush Saga</h3>
                        <h4>King</h4>
                    </article>
                    <article>
                        <img src={petrescuelogo} alt="Pet Rescue Saga Logo" />
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
                        <h3>Roof Runners</h3>
                        <h4>School Project</h4>
                    </article>
                    <article>
                        <img src={laborated} alt="Laborated Logo" />
                        <h3>Laborated</h3>
                        <h4>School Project</h4>
                    </article>
                </div>
            </div>
        </main>
    );
}

export default Jobs