import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const Footer = () => {
    return(
        <footer className="footer">
    <Container>
        <Row className="align-items-center">
            <MailchimpForm />
            <Col size={12} sm={6}>
                <img src={logo} alt="logo"/>
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/margret-mauno-469b57190/?originalSubdomain=ke"><img src={navIcon1}/></a>
                <a href="https://www.facebook.com/margret.mauno.3/?paipv=0&eav=AfYCv50qD9WgZJBZ56S1AUebXKsmGxUp4uD4GgsmlxSTKdSZJ9IS0Jl_ShOIB4c-Lmo&_rdr"><img src={navIcon2}/></a>
                <a href="https://www.instagram.com/magy.cally_me/"><img src={navIcon3}/></a> 
                </div>  
           
            <p>Copyright 2023. All Rights Reserved</p>
            </Col>
        </Row>
    </Container>
    </footer>
    )
}