import meter1 from "../assets/img/meter1.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Explore my skill-set: a diverse range of competencies curated to
                showcase my professional strengths. From technical prowess to
                soft skills, this section offers insight into what I bring to
                every project.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image1" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image2" />
                  <h5>Flutter</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image3" />
                  <h5>Node/express</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image4" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image5" />
                  <h5>Django</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image6" />
                  <h5>MongoDb</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image7" />
                  <h5>Angular</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
