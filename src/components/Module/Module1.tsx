import React, { useState, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import Scroll from 'react-scroll';
import { IoIosCheckmarkCircle } from "react-icons/io";
import historyStored from '../../stores/historyStore';


const Module1: React.FC = () => {
    var Element: any = Scroll.Element;
    const HistoryContextStore = useContext(historyStored);
    const [localState, setLocalState] = useState({ 1: { active: false }, 2: { active: false }, 3: { active: false }, 4: { active: false }, 5: { active: false }, 6: { active: false }, 7: { active: false }, 8: { active: false }, 9: { active: false } });

    function handlerClickAcordion(event: any) {
        let id: number = event.target.id;
        if (id == 1) {
            setLocalState({ ...localState, 1: { active: true } });
        }
        if (id == 2) {
            setLocalState({ ...localState, 2: { active: true } });
        }
        if (id == 3) {
            setLocalState({ ...localState, 3: { active: true } });
        }
        if (id == 4) {
            setLocalState({ ...localState, 4: { active: true } });
        }
        if (id == 5) {
            setLocalState({ ...localState, 5: { active: true } });
        }
        if (id == 6) {
            setLocalState({ ...localState, 6: { active: true } });
        }
        if (id == 7) {
            setLocalState({ ...localState, 7: { active: true } });
        }
        if (id == 8) {
            setLocalState({ ...localState, 8: { active: true } });
        }
        if (id == 9) {
            setLocalState({ ...localState, 9: { active: true } });
        }
        if (event.target.nextElementSibling.children[0] && event.target.nextElementSibling.children[0].className == "active") {
            event.target.nextElementSibling.children[0].className = "panel";
        }
        else {
            event.target.nextElementSibling.children[0].className = "active";
        }
    }
    function handlerClickQuiz(event: any) {
        if (localState[1].active && localState[2].active && localState[3].active && localState[4].active && localState[5].active && localState[6].active && localState[7].active && localState[8].active && localState[9].active) {
            HistoryContextStore.history.push("/quiz1");
            HistoryContextStore.history.go();
        }
        else {
            alert("Completa todos los videos para activar el quiz.");
        }

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
                        <Col md={6}>
                            <Row>
                                <Col id={"1"} onClick={handlerClickAcordion} className="accordion" md={12}> video 1 {localState[1].active ? <IoIosCheckmarkCircle /> : ""}</Col>
                                <Col className="fit" md={12}>
                                    <div className="panel">
                                        <ReactPlayer url='www.youtube.com/watch?v=MsKRVzmOOoQ' />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col id={"2"} onClick={handlerClickAcordion} className="accordion" md={12}>video 2  {localState[2].active ? <IoIosCheckmarkCircle /> : ""}</Col>
                                <Col className="fit" md={12}>
                                    <div className="panel">
                                        <ReactPlayer url='www.youtube.com/watch?v=MsKRVzmOOoQ' />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col id={"3"} onClick={handlerClickAcordion} className="accordion" md={12}>video 3 {localState[3].active ? <IoIosCheckmarkCircle /> : ""}</Col>
                                <Col className="fit" md={12}>
                                    <div className="panel">
                                        <ReactPlayer url='www.youtube.com/watch?v=MsKRVzmOOoQ' />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col id={"4"} onClick={handlerClickAcordion} className="accordion" md={12}>video 4 {localState[4].active ? <IoIosCheckmarkCircle /> : ""}</Col>
                                <Col className="fit" md={12}>
                                    <div className="panel">
                                        <ReactPlayer url='www.youtube.com/watch?v=MsKRVzmOOoQ' />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col id={"5"} onClick={handlerClickAcordion} className="accordion" md={12}>video 5 {localState[5].active ? <IoIosCheckmarkCircle /> : ""}</Col>
                                <Col className="fit" md={12}>
                                    <div className="panel">
                                        <ReactPlayer url='www.youtube.com/watch?v=MsKRVzmOOoQ' />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <Row>
                                <Col id={"6"} onClick={handlerClickAcordion} className="accordion" md={12}>video 6 {localState[6].active ? <IoIosCheckmarkCircle /> : ""}</Col>
                                <Col className="fit" md={12}>
                                    <div className="panel">
                                        <ReactPlayer url='www.youtube.com/watch?v=MsKRVzmOOoQ' />
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col id={"7"} onClick={handlerClickAcordion} className="accordion" md={12}>video 7 {localState[7].active ? <IoIosCheckmarkCircle /> : ""}</Col>
                                <Col className="fit" md={12}>
                                    <div className="panel">
                                        <ReactPlayer url='www.youtube.com/watch?v=MsKRVzmOOoQ' />
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col id={"8"} onClick={handlerClickAcordion} className="accordion" md={12}>video 8 {localState[8].active ? <IoIosCheckmarkCircle /> : ""}</Col>
                                <Col className="fit" md={12}>
                                    <div className="panel">
                                        <ReactPlayer url='www.youtube.com/watch?v=MsKRVzmOOoQ' />
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col id={"9"} onClick={handlerClickAcordion} className="accordion" md={12}>video 9 {localState[9].active ? <IoIosCheckmarkCircle /> : ""}</Col>
                                <Col className="fit" md={12}>
                                    <div className="panel">
                                        <ReactPlayer className="reactPlayer" url='www.youtube.com/watch?v=MsKRVzmOOoQ' />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col onClick={handlerClickQuiz} className="accordion" md={12}>Quiz</Col>
                            </Row>
                        </Col>
                    </Row>

                </Container>
            </Element>
        </div>
    );
}

export default Module1;