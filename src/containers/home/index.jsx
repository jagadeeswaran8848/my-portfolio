import { Animate } from "react-simple-animate";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import "./style.scss";
import MyPdf from "../../resumeSample/Resume_Updated.pdf";
function Home() {
  const navigate = useNavigate();
  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Jagadeeswaran
          <br />
          An AI & DS Student
        </h1>
        <Animate
          play
          duration={0.5}
          delay={2}
          start={{
            transform: "translateY(600px)",
          }}
          end={{ transform: "translateX(0px)" }}
        >
          <div className="contact-me">
            <div className="contact-me__buttons-wrapper">
              <button onClick={() => navigate("/contact")}>Hire Me</button>
              <a href={MyPdf} download="My_Resume.pdf">
                Download Resume
              </a>
            </div>
            <div className="contact-me__socials-wrapper">
            <a href="https://www.linkedin.com/in/jagadeeswaranvp/" target="_blank"><FaLinkedin size={32} /></a>
            <a href="https://github.com/jagadeeswaran8848" target="_blank"><FaGithub size={32} /></a>
            {/* <a href="https://twitter.com/your-handle" target="_blank"><FaTwitter size={32} /></a> */}
            {/* <a href="https://www.instagram.com/your-profile" target="_blank"><FaInstagram size={32} /></a> */}

            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
}

export default Home;
