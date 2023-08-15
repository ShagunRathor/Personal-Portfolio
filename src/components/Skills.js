import {Container, Row, Col} from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
//import colorSharp from "../assets/img/banner-bg.png";


export const Skills = () => {
    const responsive ={ 
        superLargeDesktop:{
            //the nameing can be any, depends on you.
            breakpoints:{max:4000, min:3000},
            items:5
        },
        desktop:{
            breakpoints:{max:3000, min:1024},
            items:3
        },
        tablet:{
            breakpoints:{max:1024, min:464},
            items:2
        },
        mobile:{
            breakpoints:{max:464, min:0},
            items:1
        }
    };

    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>Knowledge of HTML,CSS and Javascript,enabling the developement of visually appealing and interactive web application.I am proficient in Javascript,HTML,CSS and React.I have building responsive and dynamic user interface using React,HTML,CSS </p>
                       </div>
                    </Col>
                </Row>
            </Container>
            
        </section>
    )

}