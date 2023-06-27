import Carousel from "react-bootstrap/Carousel";
import T1 from "../../assets/img/projects/TLDImage1.png";
import T2 from "../../assets/img/projects/TLDImage2.png";
import T3 from "../../assets/img/projects/TLDImage3.png";
import T4 from "../../assets/img/projects/TLDImage4.png";
import T5 from "../../assets/img/projects/TLDImage5.png";
import T6 from "../../assets/img/projects/TLDImage6.png";
import T7 from "../../assets/img/projects/TLDImage7.png";
import T8 from "../../assets/img/projects/TLDImage8.png";
import T9 from "../../assets/img/projects/TLDImage9.png";

function ProjectCarousel() {
  let numOfSlides = 9;
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={T1} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
   
      <Carousel.Item>
        <img className="d-block w-100" src={T2} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={T3} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={T4} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={T5} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={T6} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={T7} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={T8} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={T9} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      {/* {() => {
        for (let i = 0; i <= numOfSlides; i++) {
          <Carousel.Item>
            <img className="d-block w-100" src={T1} alt="First slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>;
        }
      }} */}
    </Carousel>
  );
}

export default ProjectCarousel;
