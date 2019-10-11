import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import Scroll from 'react-scroll';
import { IoIosCheckmarkCircle } from 'react-icons/io';

const Module2: React.FC = () => {
    var Element: any = Scroll.Element;

    const [localState, setLocalState] = useState({1:{active:true}, 2:{active:true}, 3:{active:true}, 4:{active:true}, 5:{active:true},});
    
    function handlerClickAcordion(event: any) {
        if (event.target.nextElementSibling.children[0] && event.target.nextElementSibling.children[0].className == "active") {
            event.target.nextElementSibling.children[0].className = "panel";
        }
        else {
            event.target.nextElementSibling.children[0].className = "active";
        }
    }

    function handlerClickQuiz(event: any) {
        
    }
    
    return (
        <div className="module">
            <div className="class_banner">
                <h1>Modulo 1</h1>
            </div>
            <Element className="element" id="containerElement" style={{
                position: 'relative',
                height: '70vh',
                overflow: 'scroll',
            }}>
                <Container>
                    <Row>
                        <Col onClick={handlerClickAcordion} className="accordion" md={12}>video 1 {localState[1].active? <IoIosCheckmarkCircle/>: ""}</Col>
                        <Col md={12}>
                            <div className="panel">
                                <ReactPlayer url='www.youtube.com/watch?v=MsKRVzmOOoQ' />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col onClick={handlerClickAcordion} className="accordion" md={12}>video 2 {localState[2].active? <IoIosCheckmarkCircle/>: ""}</Col>
                        <Col md={12}>
                            <div className="panel">
                                <ReactPlayer  url='www.youtube.com/watch?v=MsKRVzmOOoQ' />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col onClick={handlerClickAcordion} className="accordion" md={12}>video 3 {localState[3].active? <IoIosCheckmarkCircle/>: ""}</Col>
                        <Col md={12}>
                            <div className="panel">
                                <ReactPlayer url='www.youtube.com/watch?v=MsKRVzmOOoQ' />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col onClick={handlerClickAcordion} className="accordion" md={12}>video 4 {localState[4].active? <IoIosCheckmarkCircle/>: ""}</Col>
                        <Col md={12}>
                            <div className="panel">
                                <ReactPlayer url='www.youtube.com/watch?v=MsKRVzmOOoQ' />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col onClick={handlerClickAcordion} className="accordion" md={12}>video 5 {localState[5].active? <IoIosCheckmarkCircle/>: ""}</Col>
                        <Col md={12}>
                            <div className="panel">
                                <ReactPlayer url='www.youtube.com/watch?v=MsKRVzmOOoQ' />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col onClick={handlerClickQuiz} className="accordion" md={12}>Quiz</Col>
                    </Row>
                </Container>
            </Element>
        </div>
    );
}

export default Module2;