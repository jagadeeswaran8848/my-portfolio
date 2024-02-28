import React from "react";
import { GiSkills } from "react-icons/gi"; 
import PageHeaderContent from "../../components/pageHeaderContent";
import { Line } from "rc-progress";
import { AnimateKeyframes, Animate } from "react-simple-animate";
import "./style.scss";
const data = [
  {
    label: "FRONT END",
    data: [
      {
        skillName: "HTML",
        percentage: "90",
      },
      {
        skillName: "CSS",
        percentage: "50",
      },
      {
        skillName: "JAVASCRIPT",
        percentage: "40",
      },
      {
        skillName: "REACT",
        percentage: "30",
      },
    ],
  },
  {
    label: "BACK END",
    data: [
      {
        skillName: "JAVA",
        percentage: "40",
      },
      {
        skillName: "PYTHON",
        percentage: "60",
      },
      {
        skillName: "C",
        percentage: "40",
      },
    ],
  },
  {
    label: "DATABASES",
    data: [
      {
        skillName: "SQL",
        percentage: "70",
      },
      {
        skillName: "MONGO DB",
        percentage: "65",
      },
    ],
  },
  {
    label: "AI & DS",
    data: [
      {
        skillName: "ML & DL",
        percentage: "30",
      },
      {
        skillName: "DATA ANALYTICS",
        percentage: "45",
      },
      {
        skillName: "DATA VISUALIZATION",
        percentage: "45",
      },
    ],
  },
  {
    label: "OTHERS",
    data: [
      {
        skillName: "AI TOOLS",
        percentage: "60",
      },
      {
        skillName: "LINUX",
        percentage: "40",
      },
      {
        skillName: "CYBER SECURITY",
        percentage: "40",
      },
    ],
  },
];
function Skills() {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<GiSkills size={40} />}
      />
      <div className="skills__content-wrapper">
        {data.map((item) => (
          <div
            className="skills__content-wrapper__inner-content"
            key={item.label}
          >
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translateX(-200px)",
              }}
              end={{ transform: "translateX(0px)" }}
            >
              <h3 className="skills__content-wrapper__inner-content__category-text">
                {item.label}
              </h3>
              <div>
                {item.data.map((skill) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity: 1", "opacity: 0"]}
                    iterationCount="1"
                  >
                    <div className="progressbar-wrapper" key={skill.skillName}>
                      <p>{skill.skillName}</p>
                      <Line
                        percent={skill.percentage}
                        strokeWidth="2"
                        strokeColor="var(--selected-theme-main-color)"
                        strokeLinecap="square"
                        trailWidth="2"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
