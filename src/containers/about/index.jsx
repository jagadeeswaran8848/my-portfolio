import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import { FaReact, FaCode, FaYoutube } from 'react-icons/fa';
import PageHeaderContent from '../../components/pageHeaderContent';
import { Animate } from 'react-simple-animate';
import chatGPTLogo from './chatgpt.png'; // Placeholder image path
import './style.scss';

const personalDetails = [
  {
    label: 'Name',
    value: 'Jagadeeswaran',
  },
  {
    label: 'Age',
    value: '20',
  },
  {
    label: 'Address',
    value: 'Erode, Tamil Nadu, India',
  },
  {
    label: 'Email',
    value: 'jagadeeswaran8848@gmail.com',
  },
  {
    label: 'Contact No',
    value: '+91 9943160386',
  },
];

const jobSummary =
  'Enthusiastic and aspiring AI & Data Science enthusiast, currently in the pre-final year of my B.Tech studies. Actively seeking internships to apply and enhance my skills in real-world projects. Eager to contribute my passion for artificial intelligence and data science to a dynamic team. I bring a combination of academic knowledge and a strong desire to learn and grow in the field.';

function About() {
  return (
    <section id="about" className='about'>
      <PageHeaderContent headerText="About Me" icon={<BsInfoCircleFill size={40} />} />
      <div className='about__content'>
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1}
            delay={1}
            start={{
              transform: 'translateX(-900px)',
            }}
            end={{
              transform: 'translateX(0px)',
            }}
          >
            <h3>An AI & DS Student</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1}
            delay={1}
            start={{
              transform: 'translateX(1000px)',
            }}
            end={{
              transform: 'translateX(0px)',
            }}
          ><br />
            <h3>Personal Information</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className='title'>{item.label}</span>
                  <span className='value'>{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1}
            delay={1}
            start={{
              transform: 'translateX(1200px)',
            }}
            end={{
              transform: 'translateX(0px)',
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaReact size={60} color="var( --yellow-theme-main-color)" />
                {/* <p>React Development</p> */}
              </div>
              <div>
                <FaCode size={60} color="var( --yellow-theme-main-color)" />
                {/* <p>VS Code</p> */}
              </div>
              <div>
                <img src={chatGPTLogo} alt="ChatGPT Logo" width={80} height={80} />
                {/* <p>ChatGPT</p> */}
              </div>
              <div>
                <FaYoutube size={60} color="var( --yellow-theme-main-color)" />
                {/* <p>YouTube</p> */}
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}

export default About;
