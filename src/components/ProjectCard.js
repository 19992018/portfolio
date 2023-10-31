import { Col } from "react-bootstrap";


export const ProjectCard = ({title, description, imgUrl, websiteLink}) => {

    return(
        <Col sm={6} md={4}>
        <a href={websiteLink} target="_blank" className="a-text">
        <div className="proj-imgbx">
            <img src={imgUrl} />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
        </a>
        </Col>
    )
}