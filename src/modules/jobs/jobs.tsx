import "./jobs.scss"
import candycrushlogo from "./media/professional/candy_crush_logo.jpg"
import petrescuelogo from "./media/professional/petrescuelogo.png"
import roofRunners from "./media/other/roofrunners.jpg"
import laborated from "./media/other/laborated.png"
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
      { type: "image", src: "https://assets.epuzzle.info/puzzle/100/698/original.jpg" },
      { type: "image", src: "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1" },
      { type: "video", src: "https://www.youtube.com/embed/R9OHn5ZF4Uo" }
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
      { type: "image", src: petrescuelogo }
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
      { type: "image", src: roofRunners }
    ]
  },
  {
    id: "OP_project2",
    title: "Laborated",
    subtitle: "School Project",
    imageSrc: laborated,
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
      { type: "image", src: laborated }
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
            width="100%"
            height="100%"
            src={item.src}
            title="Gallery Video"
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