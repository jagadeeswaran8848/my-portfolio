import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { FaBlackTie } from "react-icons/fa"; 
import PageHeaderContent from "../../components/pageHeaderContent";
import "./style.scss";
const data = {
  experience: [
    {
      title: "Intern",
      subTitle: "Cognifyz Technologies, Nagpur, India",
      description:
        "Data analytcis using python",
    },
    {
      title: "Intern(currently working)",
      subTitle: "iGradLabs, Germany",
      description:
        "Web development, Databases, Backend developement",
    },
    {
      title: "Intern (selected)",
      subTitle: "Kaar Technologies, Chennai, TamilNadu",
      description:
        "Just selected for internship.",
    },
  ],
  education: [
    {
      title: "SSLC",
      subTitle: "Bharathi.Matric.Hr.Sec.School",
      description:
        "10th Grade in 2019",
    },
    {
      title: "Higher Secondary",
      subTitle: "Bharathi.Matric.Hr.Sec.School",
      description:
        "12th Grade in Computer Science in 2021",
    },
    {
      title: "B.Tech",
      subTitle: "Nandha Engineering College",
      description:
        "Bachelor of technology in AI & DS (cuurently I'm in pre-final year)",
    },
  ],
};
function Resume() {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<FaBlackTie size={40} />}
      />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <VerticalTimeline layout="1-column" lineColor="var(--selected-theme-main-color)">
            {data.experience.map((item) => (
              <VerticalTimelineElement
                key={item.title}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "var(--selected-theme-sub-text-color)",
                  border: "1.5px solid var(--selected-theme-main-color)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                // date="2021 - present"
                iconStyle={{ background: "#181818", color: "var(--selected-theme-main-color)" }}
                icon={<MdWork />}
                dateClassName="vertical-timeline-element-custom-date"
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.subTitle}
                  </h4>
                </div>
                <p>{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>
          <VerticalTimeline layout="1-column" lineColor="var(--selected-theme-main-color)">
            {data.education.map((item) => (
              <VerticalTimelineElement
                key={item.title}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "var(--selected-theme-sub-text-color)",
                  border: "1.5px solid var(--selected-theme-main-color)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                // date="2019 - present"
                iconStyle={{ background: "#181818", color: "var(--selected-theme-main-color)" }}
                icon={<MdWork />}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.subTitle}
                  </h4>
                </div>
                <p>{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}

export default Resume;
