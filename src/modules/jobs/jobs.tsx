import "./jobs.scss"

//Candy Crush Saga
import candycrushlogo from "./media/professional/candy_crush_logo.jpg"
import ccs_1 from "./media/gallery/candycrush/ccs_1.png"
import ccs_2 from "./media/gallery/candycrush/ccs_2.png"
import ccs_3 from "./media/gallery/candycrush/ccs_3.png"
import ccs_4 from "./media/gallery/candycrush/ccs_4.png"
import ccs_5 from "./media/gallery/candycrush/ccs_5.png"

//Pet Rescue Saga
import petrescuelogo from "./media/professional/petrescuelogo.png"
import prs_1 from "./media/gallery/petrescue/prs_1.png"
import prs_2 from "./media/gallery/petrescue/prs_2.png"
import prs_3 from "./media/gallery/petrescue/prs_3.png"

//Roof Runners
import roofRunnerslogo from "./media/other/roofrunners.jpg"
import roofrunners_1 from "./media/gallery/roofrunners/roofrunners_1.jpg"
import roofrunners_2 from "./media/gallery/roofrunners/roofrunners_2.jpg"
import roofrunners_3 from "./media/gallery/roofrunners/roofrunners_3.jpg"
import roofrunners_4 from "./media/gallery/roofrunners/roofrunners_4.jpg"
import roofrunners_5 from "./media/gallery/roofrunners/roofrunners_5.jpg"

//Laborated
import laboratedlogo from "./media/other/laborated.png"
import laborated_1 from "./media/gallery/laborated/laborated_1.png"
import laborated_2 from "./media/gallery/laborated/laborated_2.png"
import laborated_3 from "./media/gallery/laborated/laborated_3.png"
import laborated_4 from "./media/gallery/laborated/laborated_4.png"


import arrow from "./media/gallery/arrow.png"
import { useState } from "react"

interface Project {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  description: string;
  tags: { id: string; text: string }[];
  overview: string[];
  gallery: { type: "image" | "video"; src: string }[];
}

const PP_projects: Project[] = [
  {
    id: "PP_project1",
    title: "Candy Crush Saga",
    subtitle: "King",
    imageSrc: candycrushlogo,
    description:
      "Candy Crush Saga is a wildly addictive and colorful match-3 puzzle game that has captured the hearts of millions of players worldwide. With over 10,000 levels to explore, players match colorful candies to progress through the game and unlock exciting rewards. With its simple yet challenging gameplay, it's no wonder Candy Crush Saga has become one of the most popular mobile games of all time.",
    tags: [
      { id: "tag_1", text: "Level Design" },
      { id: "tag_2", text: "Game Design" }
    ],
    overview: [
      "Creating, designing and iterating upon levels",
      "Playtesting and giving feedback on levels with the other level designers",
      "Working in the new features team to design, greenlight and develop new game features",
      "Participating and leading projects to update / rework older levels",
      "Collaborating with data scientists to tweak levels to desired performance",
      "Worked in 2-week sprints using the SCRUM / Agile Method"
    ],
    gallery: [
      { type: "image", src: candycrushlogo },
      { type: "image", src: ccs_1 },
      { type: "image", src: ccs_2 },
      { type: "image", src: ccs_3 },
      { type: "image", src: ccs_4 },
      { type: "image", src: ccs_5 },
      { type: "video", src: "https://www.youtube.com/embed/j11dUiYKUFs" }
    ]
  },
  {
    id: "PP_project2",
    title: "Pet Rescue Saga",
    subtitle: "King",
    imageSrc: petrescuelogo,
    description:
      "Pet Rescue Saga is a cute match-3 puzzle game where you need to rescue animals that are trapped. Match blocks of the same color to clear the levels and save the pets. Matching moves are limited so plan carefully to blast as many blocks as possible, solve the puzzles, and save the pets.",
    tags: [
      { id: "tag_1", text: "Level Design" }
    ],
    overview: [
      "Creating, designing and iterating upon levels",
      "Playtesting and giving feedback on levels with the other level designers",
      "Worked in 2-week sprints using the SCRUM / Agile Method"
    ],
    gallery: [
      { type: "image", src: petrescuelogo },
      { type: "image", src: prs_1 },
      { type: "image", src: prs_2 },
      { type: "image", src: prs_3 },
      { type: "video", src: "https://www.youtube.com/embed/5SaRg2Lefbs" }
    ]
  }
];

const OP_projects: Project[] = [
  {
    id: "OP_project1",
    title: "Roof Runners",
    subtitle: "School Project",
    imageSrc: roofRunnerslogo,
    description:
      "Roof Runners is an exhilarating tag game where six players compete as either dogs or cats. As a dog, your mission is to catch all the cats before time runs out, while the cats must evade capture and free any captured feline friends by pressing a button.",
    tags: [
      { id: "tag_1", text: "Level Design" },
      { id: "tag_2", text: "Game Design" },
      { id: "tag_3", text: "Unity" },
    ],
    overview: [
      "Prototyped and iterated on game mechanics",
      "Creating and maintaining the Game Design Document (GDD)",
      "Building (Greyboxing) and playtesting levels using Unity",
      "Creating a level design philosophy in collaboration with the other designers",
      "Organizing test sessions and collecting feedback",
      "Project management, with Trello and Google Sheets"
    ],
    gallery: [
      { type: "image", src: roofRunnerslogo },
      { type: "image", src: roofrunners_1 },
      { type: "image", src: roofrunners_2 },
      { type: "image", src: roofrunners_3 },
      { type: "image", src: roofrunners_4 },
      { type: "image", src: roofrunners_5 },
      { type: "video", src: "https://www.youtube.com/embed/aNFFV_5peZg" }
    ]
  },
  {
    id: "OP_project2",
    title: "Laborated",
    subtitle: "School Project",
    imageSrc: laboratedlogo,
    description:
      "Laborated is a first-person stealth game with some minor horror elements. The game provides a tense and uncomfortable atmosphere as the player explores the dark interiors of the facility.",
    tags: [
      { id: "tag_1", text: "Level Design" },
      { id: "tag_2", text: "Game Design" }
    ],
    overview: [
      "Design of game mechanics in collaboration with the other designer",
      "Creating and maintaining the Game Design Document (GDD)",
      "Drew the initial level layout",
      "Playtesting and iterating on the level's design, mainly with enemy pathing",
      "Project management, with Trello and Google Sheets"
    ],
    gallery: [
      { type: "image", src: laboratedlogo },
      { type: "image", src: laborated_1 },
      { type: "image", src: laborated_2 },
      { type: "image", src: laborated_3 },
      { type: "image", src: laborated_4 },
      { type: "video", src: "https://www.youtube.com/embed/85sTgeq2sKo" }
    ]
  }
];

function Jobs() {

  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [projectWindowTop, setProjectWindowTop] = useState<string>('50%');
  const [galleryIndex, setGalleryIndex] = useState<number>(0);

  const handleProjectClick = (index: number) => {
    const currentPosition = window.scrollY;
    const navbaroffset = 70; // Navbar height + 10
    const topPosition = currentPosition + navbaroffset;
    setProjectWindowTop(`${topPosition}px`);
    setSelectedProject(index);
    setGalleryIndex(0); // Reset gallery index
  };

  const handleCloseClick = () => {
    setSelectedProject(null);
    setGalleryIndex(0); // Reset gallery index
  };

  const renderGalleryItem = (item: { type: string; src: string }) => {
    switch (item.type) {
      case "image":
        return <img src={item.src} alt="Gallery Item" />;
      case "video":
        return (
          <iframe
            src={item.src}
            title="Trailer Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        );
      default:
        return null;
    }
  };

  const handleGalleryArrowClick = (direction: "left" | "right") => {
    const currentProjectGallery = selectedProject! < PP_projects.length
      ? PP_projects[selectedProject!].gallery
      : OP_projects[selectedProject! - PP_projects.length].gallery;

    if (direction === "left") {
      if (galleryIndex > 0) {
        setGalleryIndex(galleryIndex - 1);
      } else {
        setGalleryIndex(currentProjectGallery.length - 1); // Go to the last gallery item
      }
    } else {
      if (galleryIndex < currentProjectGallery.length - 1) {
        setGalleryIndex(galleryIndex + 1);
      } else {
        setGalleryIndex(0); // Go back to the start of the gallery
      }
    }
  };

  return (
    <main>
      <div className="PP_wrapper">
        <div id="header_container">
          <h1>Professional Projects</h1>
          <p>Click on a tile to learn more about a project.</p>
        </div>
        <div id="projects_container">
          {PP_projects.map((project, index) => (
            <article key={index} onClick={() => handleProjectClick(index)}>
              <img src={project.imageSrc} alt="Project Thumbnail" />
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
            <article key={index} onClick={() => handleProjectClick(index + PP_projects.length)}>
              <img src={project.imageSrc} alt="Project Thumbnail" />
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
        <div className="overlay"></div>
      )}
      {selectedProject !== null && (
        <div className="PW_wrapper" style={{ top: projectWindowTop }}>
          <div id="PW_top">
            <h1>{selectedProject < PP_projects.length ? PP_projects[selectedProject].title : OP_projects[selectedProject - PP_projects.length].title}</h1>
            <button onClick={handleCloseClick}>X</button>
          </div>
          <div id="PW_gallery">
            <button onClick={() => handleGalleryArrowClick("left")}>
              <img id="left_arrow" src={arrow} alt="Go Left" />
            </button>
            {renderGalleryItem(
              selectedProject < PP_projects.length
                ? PP_projects[selectedProject].gallery[galleryIndex]
                : OP_projects[selectedProject - PP_projects.length].gallery[galleryIndex]
            )}            <button onClick={() => handleGalleryArrowClick("right")}>
              <img id="right_arrow" src={arrow} alt="Go Right" />
            </button>
          </div>
          <div className="PW_content">
            <div className="tag_container">
              {selectedProject < PP_projects.length ? PP_projects[selectedProject].tags.map((tag) => (
                <p id={tag.id} key={tag.id}>
                  {tag.text}
                </p>
              )) : OP_projects[selectedProject - PP_projects.length].tags.map((tag) => (
                <p id={tag.id} key={tag.id}>
                  {tag.text}
                </p>
              ))}
            </div>
            <p id="PW_desc">{selectedProject < PP_projects.length ? PP_projects[selectedProject].description : OP_projects[selectedProject - PP_projects.length].description}</p>
            <div id="PW_overview">
              <h4>What I did:</h4>
              <ul>
                {selectedProject < PP_projects.length ? PP_projects[selectedProject].overview.map((task, index) => (
                  <li key={index}>{task}</li>
                )) : OP_projects[selectedProject - PP_projects.length].overview.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      )}
    </main>
  );
}

export default Jobs