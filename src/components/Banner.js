import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
  } from "react-router-dom";
  


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["web-developer", "lawyer", "song-writer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1);

        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta/2);
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum (loopNum + 1);
            setDelta(500);

        }
    }

    return(
        <Router>
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center"> 
                    <Col xs={12} md={6} xl={7}>
                    
                    <TrackVisibility>
                    {({ isVisible }) =>
                        <div className="animate__animated animate__fadeIn">
                        <span className="tagline">Welcome to my portfolio</span>
                        {/* <h1>{`Hi I'm Margret; a `}<br/> <div className="one-line"><span className="wrap">{text}</span></div></h1> */}
                        <h1>{`Hi I'm Margret; a `}<span className="wrap">{text}</span></h1>
                        <p>I am a certified and passionate web developer. I studied Law at the University of Nairobi as well as mobile-app development at strathmore. Wouldn't like to come across as a Jack of all trades but hey, I'm also gifted in song-writing.</p>
                        <HashLink to='#connect'>
                        <button onClick={() => {console.log('connect')}}>Let's Connect <ArrowRightCircle size={25}/></button>
                        </HashLink>
                        </div>}
                    </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="header-img"/>
                    </Col> 

                </Row>
            </Container>
        </section>
        </Router>
    )
}