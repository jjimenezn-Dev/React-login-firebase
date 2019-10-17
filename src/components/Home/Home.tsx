import React from 'react';
import Card from '../usables/card';
import { Container, Row, Col } from 'react-bootstrap';
import Scroll from 'react-scroll';


const Home: React.FC = ({match}:any) => {
    var Element:any = Scroll.Element;
    return (

        <div>
            <Element className="element" id="containerElement" style={{
                position: 'relative',
                height: '95vh',
                overflow: 'scroll',
            }}>
                <Container>
                    <h1>Bienvenido al modulo de capacitación</h1>
                    <Row>
                        <Col><Card /></Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </Container>
            </Element>

        </div>
    );
}

export default Home;
