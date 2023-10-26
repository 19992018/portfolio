import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import 'animate.css';
import TrackVisibility from "react-on-screen";




export const Projects = () => {

    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
          },
    ];

    return(
            <section>
                <Container>
                    <Row>
                        <Col>
                        <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn": ""}>

                            <h2>Projects</h2>
                            <p>Here are personal projects I have worked on either for fun or for clients.</p>
                        </div> }
                        </TrackVisibility> 
                            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                            <Nav variant="pills" className="nav-pills mb5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Favourites</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Top Picks</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                Other
                                </Nav.Link>
                            </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard 
                                                        key= {index}
                                                        {...project}
                                                    />

                                                    
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>Lorem Ipsum</Tab.Pane>
                                <Tab.Pane eventKey='third'>Lorem Ipsum</Tab.Pane>
                            </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
                <img className="background-image-right" src={colorSharp2}/>
            </section>
        )
}