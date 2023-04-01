import "./jobs.scss"
import candycrushlogo from "../../media/candy_crush_logo.jpg"
import petrescuelogo from "../../media/petrescuelogo.png"

function Jobs() {
    return(
        <div className="Jobs_wrapper">
            <div id="header_container">
                <h1>Professional Projects</h1>
                <p>Click on a tile to learn more about a project.</p>
            </div>
            <div id="projects_container">
                <article>
                    <img src={candycrushlogo} alt="Candy Crush Saga Logo" />
                    <h3>Candy Crush Saga</h3>
                    <h4>King</h4>
                    <p></p>
                </article>
                <article>
                    <img src={petrescuelogo} alt="Pet Rescue Saga Logo" />
                    <h3>Pet Rescue Saga</h3>
                    <h4>King</h4>
                    <p></p>
                </article>
            </div>
        </div>
    );
}

export default Jobs