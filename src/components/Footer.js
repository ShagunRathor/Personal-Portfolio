import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo-bg .png";
import navIcon1 from '../assets/img/nav-icon1.png';
import navIcon2 from '../assets/img/nav-icon2.png';
import navIcon3 from '../assets/img/nav-icon3.png';


export const Footer = () => {
    <Container>
    <Row className="align-items-center">
        <MailchimpForm />
        <Col sm={6}>
            
            </Col> 
            <Col sm={6} className="text-center" text-sm-end>
                <img src={logo} alt="Logo" />             
                   <div className="social-icons">
                    <a href=""><img src={navIcon1} />  </a>
                    <a href=""><img src={navIcon2} />  </a>
                    <a href=""><img src={navIcon3} />  </a>
                </div>
            <p>CopyRight 2023. All Right Reserved</p>
            </Col>
    </Row>
    </Container>
}