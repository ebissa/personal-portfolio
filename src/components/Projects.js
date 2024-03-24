import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Screenshot (23).png";
import projImg2 from "../assets/img/Screenshot (97).png";
import projImg3 from "../assets/img/Screenshot (10).png";
import projImg4 from "../assets/img/fewa.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Pizza delivery application",
      description:
        "This is a pizza delivery application that lets you order your desired pizza and get it delivered to your location.",
      imgUrl: projImg1,
      link: "https://github.com/ebissa/pizza_delivery",
    },
    {
      title: "StudyBudy",
      description:
        "An interactive study platform implemented in HTML and CSS, with Django framework for the backend. This application empowers users to create topics for discussion, fostering collaborative learning. With Study Buddy, users can join groups and engage in meaningful discussions, enhancing their educational experience through shared knowledge and insights.",
      imgUrl: projImg2,
      link: "https://github.com/ebissa/studybudy",
    },
    {
      title: "Jobfy",
      description:
        "A dynamic web application for managing job applications, utilizing React, Node.js/Express.js, and MongoDB. It provides users with a simple interface and streamlined experience for efficient job application management.",
      imgUrl: projImg3,
      link: "https://github.com/ebissa/Jobfy",
    },
    {
      title: "Fewa Foods",
      description:
        "A dynamic restaurant web application facilitating ordering and reservations. Powered by Nest.js on the backend and enriched with HTML, Bootstrap, and JavaScript, Fewa ensures a seamless dining experience. With its intuitive interface, patrons can effortlessly place orders and secure reservations for a delightful dining journey",
      imgUrl: projImg4,
      link: "https://github.com/ebissa/web-group-project",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Discover my portfolio of projects —a collection that
                    demonstrates my expertise, creativity, and passion. Each
                    project is a testament to my commitment to excellence and
                    innovation. Explore this showcase to see how I bring ideas
                    to life.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
