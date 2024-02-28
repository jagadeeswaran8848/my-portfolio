import React from 'react'
import { BsInfoCircleFill } from "react-icons/bs"
import { AiFillProject } from "react-icons/ai";
import PageHeaderContent from '../../components/pageHeaderContent'
import ImageOne from "../../images/age-calc.png"
import ImageTwo from "../../images/bg-color flip.png"
import ImageThree from "../../images/currency_con.png"
import ImageFour from "../../images/num-guess game.png"
import ImageFive from "../../images/random joke.png"
import ImageSix from "../../images/emotion-music.png"
import ImageSeven from "../../images/data analysis.jpg"
import ImageEight from "../../images/extension .jpg"
import ImageNine from "../../images/spam detection.png"
import ImageTen from "../../images/virtual painting app.png"
import { useState } from "react";
import './style.scss'

const projectsData = [
  {
    sectionId: 2,
    projectName: "Age calculator",
    projectLink: "https://jagadeeswaran8848.github.io/Age-Calculator.com/",
    image: ImageOne,
  },
  {
    sectionId: 2,
    projectName: "Bg-color flipper",
    projectLink: "https://jagadeeswaran8848.github.io/color-flipper.com/",
    image: ImageTwo,
  },
  {
    sectionId: 2,
    projectName: "Currency covnertor",
    projectLink: "https://jagadeeswaran8848.github.io/currency-converter.com/",
    image: ImageThree,
  },
  {
    sectionId: 2,
    projectName: "Number guess-game",
    projectLink: "https://jagadeeswaran8848.github.io/NUMBER-GUESSING-GAME-BETWEEN-1-100-.com/",
    image: ImageFour,
  },
  {
    sectionId: 2,
    projectName: "Random jokes",
    projectLink: "https://jagadeeswaran8848.github.io/RANDOM-JOKE-GENERATOR.com/",
    image: ImageFive,
  },
  {
    sectionId: 3,
    projectName: "Emotion-music",
    projectLink: "https://github.com/jagadeeswaran8848/emotion-based-music-main",
    image: ImageSeven,
  },
  {
    sectionId: 3,
    projectName: "Data analysis",
    projectLink: "https://github.com/JAGADEESWARAN21AI016/Data_analysis_internship_Cognifyz_Technologies",
    image: ImageSix,
  },
  {
    sectionId: 3,
    projectName: "jupyterlab Extension",
    projectLink: "https://github.com/jagadeeswaran8848/myextension",
    image: ImageEight,
  },
  {
    sectionId: 3,
    projectName: "Spam detector",
    projectLink: "https://github.com/jagadeeswaran8848/spam-detection",
    image: ImageNine,
  },
  {
    sectionId: 3,
    projectName: "Virtual Painting System",
    projectLink: "https://github.com/jagadeeswaran8848/Virtual_systems-using-Hand-gestures",
    image: ImageTen,
  },
];

const filteroptions = [
  {
    label: "All",
    id: 1,
  },
  {
    label: "Web Development",
    id: 2,
  },
  {
    label: "ML & OTHERS",
    id: 3,
  },
];

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [filterValue, setFiltervalue] = useState(1);

  const updatedprojectsData =
    filterValue === 1
      ? projectsData
      : projectsData.filter((item) => item.sectionId === filterValue);
  return (
    <section id="projects" className="projects">
      <PageHeaderContent
        headerText="My projects"
        icon={<AiFillProject size={40} />}
      />
      <div className="projects__content">
        <ul className="projects__content__filter">
          {filteroptions.map((option) => (
            <li className={option.id === filterValue && 'active'} onClick={() => setFiltervalue(option.id)} key={option.id}>
              {option.label}
            </li>
          ))}
        </ul>
        <div className="projects__content__cards">
          {updatedprojectsData.map((item, index) => (
            <div
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="projects__content__cards__item"
            >
              <div className="projects__content__cards__item__img-wrapper">
                <a>
                  <img src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredIndex && (
                  <div>
                    <p>{item.projectName}</p>
                    <a href={item.projectLink} target="_blank" rel="noopener noreferrer">
            <button>Visit</button>
          </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;