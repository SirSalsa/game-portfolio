import "./jobs.scss"
import candycrushlogo from "./media/professional/candy_crush_logo.jpg"
import petrescuelogo from "./media/professional/petrescuelogo.png"
import roofRunners from "./media/other/roofrunners.jpg"
import laborated from "./media/other/laborated.png"
import { useState } from "react"


interface Project {
    id: string;
    title: string;
    subtitle: string;
    imageSrc: string;
    description: string;
    tags: { id: string; text: string }[];
    overview: string[];
}

const PP_projects: Project[] = [
    {
        id: "PP_project1",
        title: "Candy Crush Saga",
        subtitle: "King",
        imageSrc: candycrushlogo,
        description:
            "This is the description for Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tags: [
            { id: "tag_1", text: "Level Design" },
            { id: "tag_2", text: "Game Design" }
        ],
        overview: [
            "Overview 1",
            "Overview 2",
            "Overview 3",
            "Overview 4"
        ]
    },
    {
        id: "PP_project2",
        title: "Pet Rescue Saga",
        subtitle: "King",
        imageSrc: petrescuelogo,
        description:
            "This is the description for Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tags: [
            { id: "tag_1", text: "Level Design" }
        ],
        overview: [
            "Overview 1",
            "Overview 2",
            "Overview 3",
            "Overview 4"
        ]
    }
];

const OP_projects: Project[] = [
    {
        id: "OP_project1",
        title: "Roof Runners",
        subtitle: "School Project",
        imageSrc: roofRunners,
        description:
            "This is the description for Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tags: [
            { id: "tag_1", text: "Level Design" },
            { id: "tag_2", text: "Game Design" },
            { id: "tag_3", text: "Unity" },
        ],
        overview: [
            "Overview 1",
            "Overview 2",
            "Overview 3",
            "Overview 4"
        ]
    },
    {
        id: "OP_project2",
        title: "Laborated",
        subtitle: "School Project",
        imageSrc: laborated,
        description:
            "This is the description for Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tags: [
            { id: "tag_1", text: "Level Design" },
            { id: "tag_2", text: "Game Design" }
        ],
        overview: [
            "Overview 1",
            "Overview 2",
            "Overview 3",
            "Overview 4"
        ]
    }
];

function Jobs() {

    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    const handleProjectClick = (index: number) => {
        setSelectedProject(index);
    };

    const handleCloseClick = () => {
        setSelectedProject(null);
    };

    return(
        <main>
            <div className="PP_wrapper">
                <div id="header_container">
                    <h1>Professional Projects</h1>
                    <p>Click on a tile to learn more about a project.</p>
                </div>
                <div id="projects_container">
                    {PP_projects.map((project, index) => (
                        <article key={index} onClick={() => handleProjectClick(index)}>
                            <img src={project.imageSrc} alt="Candy Crush Saga Logo" />
                            <div className="tag_container">
                                {project.tags.map((tag) => (
                                    <p key={tag.id} id={tag.id}>
                                    {tag.text}
                                    </p>
                                ))}
                            </div>
                            <h3>{project.title}</h3>
                            <h4>{project.subtitle}</h4>
                        </article>
                     ))}
                </div>
            </div>
            <div className="OP_wrapper">
                <div id="header_container">
                    <h1>Other Projects</h1>
                    <p>Click on a tile to learn more about a project.</p>
                </div>
                <div id="projects_container">
                {OP_projects.map((project, index) => (
                        <article key={index} onClick={() => handleProjectClick(index)}>
                            <img src={project.imageSrc} alt="Candy Crush Saga Logo" />
                            <div className="tag_container">
                                {project.tags.map((tag) => (
                                    <p key={tag.id} id={tag.id}>
                                    {tag.text}
                                    </p>
                                ))}
                            </div>
                            <h3>{project.title}</h3>
                            <h4>{project.subtitle}</h4>
                        </article>
                     ))}
                </div>
            </div>
            {selectedProject !== null && (
                <div className="ProjectWindow_wrapper">
                    <button onClick={handleCloseClick}>Close</button>
                    <h1>{PP_projects[selectedProject].title}</h1>
                    <img src={PP_projects[selectedProject].imageSrc} alt={PP_projects[selectedProject].title} />
                <div className="tag_container">
                     {PP_projects[selectedProject].tags.map((tag) => (
                        <p id={tag.id} key={tag.id}>{tag.text}</p>
                    ))}
                </div>
                <p id="PW_desc">{PP_projects[selectedProject].description}</p>
                <div id="PW_overview">
                    <h4>What I did:</h4>
                    <ul>
                        {PP_projects[selectedProject].overview.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ul>
                </div>
            </div>
            )}
        </main>
    );
}

export default Jobs