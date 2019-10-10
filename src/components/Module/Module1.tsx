import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import Scroll from 'react-scroll';

const Module1: React.FC = () => {
    var Element: any = Scroll.Element;
    function handlerClickAcordion(event: any) {
        if (event.target.nextElementSibling.children[0] && event.target.nextElementSibling.children[0].className == "active") {
            event.target.nextElementSibling.children[0].className = "panel";
        }
        else {
            event.target.nextElementSibling.children[0].className = "active";
        }
    }
    function handlerVideo(event: any) {
        console.log("aja");

    }
    return (
        <div className="module">
            <div className="class_banner">
                <h1>Modulo 1</h1>
            </div>
            <Element className="element" id="containerElement" style={{
                position: 'relative',
                height: '60vh',
                overflow: 'scroll',
            }}>
                <Container>
                    <Row>
                        <Col onClick={handlerClickAcordion} className="accordion" md={12}>video 1</Col>
                        <Col md={12}>
                            <div className="panel">
                                <ReactPlayer url='www.youtube.com/watch?v=MsKRVzmOOoQ' />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col onClick={handlerClickAcordion} className="accordion" md={12}>video 2</Col>
                        <Col md={12}>
                            <div className="panel">
                                <ReactPlayer onClick={handlerVideo} url='www.youtube.com/watch?v=MsKRVzmOOoQ' />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col onClick={handlerClickAcordion} className="accordion" md={12}>video 3</Col>
                        <Col md={12}>
                            <div className="panel">
                                <ReactPlayer url='www.youtube.com/watch?v=MsKRVzmOOoQ' />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col onClick={handlerClickAcordion} className="accordion" md={12}>video 4</Col>
                        <Col md={12}>
                            <div className="panel">
                                <ReactPlayer url='www.youtube.com/watch?v=MsKRVzmOOoQ' />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col onClick={handlerClickAcordion} className="accordion" md={12}>video 5</Col>
                        <Col md={12}>
                            <div className="panel">
                                <ReactPlayer url='www.youtube.com/watch?v=MsKRVzmOOoQ' />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col onClick={handlerClickAcordion} className="accordion" md={12}>video 6</Col>
                        <Col md={12}>
                            <div className="panel">
                                <ReactPlayer url='www.youtube.com/watch?v=MsKRVzmOOoQ' />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col onClick={handlerClickAcordion} className="accordion" md={12}>video 7</Col>
                        <Col md={12}>
                            <div className="panel">
                                <ReactPlayer url='www.youtube.com/watch?v=MsKRVzmOOoQ' />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col onClick={handlerClickAcordion} className="accordion" md={12}>video 8</Col>
                        <Col md={12}>
                            <div className="panel">
                                <ReactPlayer url='www.youtube.com/watch?v=MsKRVzmOOoQ' />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col onClick={handlerClickAcordion} className="accordion" md={12}>video 9</Col>
                        <Col md={12}>
                            <div className="panel">
                                <ReactPlayer url='www.youtube.com/watch?v=MsKRVzmOOoQ' />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col onClick={handlerClickAcordion} className="accordion" md={12}>Quiz</Col>
                    </Row>
                </Container>
            </Element>
        </div>
    );
}

export default Module1;