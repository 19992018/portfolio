import { Col } from "react-bootstrap";


export const ProjectCard = ({title, description, imgUrl, websiteLink}) => {

    return(
        <Col sm={6} md={4}>

        <div className="proj-imgbx" onClick={(e) => {e.preventDefault(); window.location.replace(websiteLink)}} >
            <img src={imgUrl} />
            <div className="proj-txtx" onClick={(e) => {e.preventDefault(); window.location.replace(websiteLink)}}>
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
        </Col>
    )
}