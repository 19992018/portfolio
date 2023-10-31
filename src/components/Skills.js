import { Container,Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import PercentageCircle from 'reactjs-percentage-circle';
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';



export const Skills = () => {

  const percentage = 75;
  const percentage1 = 50;
  const percentage2 =45;
  const percentage3 = 50;

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                  <div className='skill-bx'>
                    <h2>Skills</h2>
                    <p>I am highly skilled in web development. I obtained a certificate in full-stack web development. <br/>As at now I am comfortable with frontend web development and polishing my backend skills. </p>
                    <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                        {/* <div className='item'>
                          <PercentageCircle percent={80}>
                            <p>Children</p>
                          </PercentageCircle>
                        </div> */}
                        <div className='item'>
                        <CircularProgressbar value={percentage} text={`${percentage}%`} />
                        <h5>Frontend web-dev</h5>
                        </div>

                        <div className='item'>
                        <CircularProgressbar value={percentage1} text={`${percentage1}%`} />
                        <h5>Backend web-dev</h5>
                        </div>

                        <div className='item'>
                        <CircularProgressbar value={percentage2} text={`${percentage2}%`} />
                        <h5>Mobile App Dev</h5>
                        </div>

                        <div className='item'>
                        <CircularProgressbar value={percentage3} text={`${percentage3}%`} />
                        <h5>SM Marketing</h5>
                        </div>

                        {/* <div className='item'>
                          <img src={meter1} alt='image'/>
                          <h5>Frontend web-dev</h5>
                        </div>
                        <div className='item'>
                          <img src={meter2} alt='image'/>
                          <h5>Backend web-dev</h5>
                        </div>
                        <div className='item'>
                          <img src={meter3} alt='image'/>
                          <h5>Mobile App Dev</h5>
                        </div>
                        <div className='item'>
                          <img src={meter3} alt='image'/>
                          <h5>SM Marketing</h5>
                        </div> */}
                    </Carousel>
                      
                  </div>
                </Col>
            </Row>
        </Container>
        <img className='background-image-left' src={colorSharp}/>
        </section>
        
      )
     
}