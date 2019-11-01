import React, { useContext, useState, useEffect } from 'react';
import Scroll from 'react-scroll';
import { Row, Col, Spinner, Button, Container } from 'react-bootstrap';
import { observer } from 'mobx-react';
import historyStored from '../../stores/historyStore';
import firebaseStore from '../../stores/firebaseStore';
import Download from '../utils/generatePDF';

const Classes = observer((props, { match }: any) => {
    const curso: string = "curso de manejo defensivo";
    const firebaseContextStore = useContext(firebaseStore);
    const HistoryContextStore = useContext(historyStored);
    var Element: any = Scroll.Element;
    const [userState, setuserState] = useState({ name: "Juan Sebastian", last_name: "Jimenez Nieto", id: "" });
    var localState: boolean[] = [false, false, false, false, false, false,];

    useEffect(() => {
        try {
            let userKey = props.history.location.state.username ? props.history.location.state.username : "";
            firstAsync().then(() => {
                const db = firebaseContextStore.connections.firestore();
                secondAsync(userKey, db).then(function (userRef: any) {
                    userRef.forEach(function (doc: any) {
                        let curses: string = doc.data().courses;
                        let json = JSON.parse(curses);
                        localState = [];
                        for (let k in json) {
                            localState.push(json[k]);
                        }
                        var elements = document.getElementsByClassName("check");
                        let counter = 1;
                        console.log(elements);

                        for (let i = 0; i < elements.length; i++) {
                            if (localState[i] == true && (i + 1) == Number.parseInt(elements[i].id)) {
                                elements[i].innerHTML = "Completado"
                                elements[i].className = "status-success check"
                            }
                            counter++;
                        }
                    });
                }).then(() => {
                    let spinner: any = document.getElementById("spinner");
                    let elem: any = document.getElementById("download");
                    let download:any = elem.children[0].children[0];
                    spinner ? spinner.className = "disabled" : spinner = null;
                    if(localState[0] && localState[1] && localState[2] && localState[3] && localState[4] && localState[5])
                        download ? download.className = "link_certificado" : download = "disabled";
                    
                });
            })
        } catch (error) {

            HistoryContextStore.history.push("/");
            HistoryContextStore.history.go();
        }
    }, []);

    async function firstAsync() {
        return firebaseContextStore.addConnection();;
    }

    async function secondAsync(userKey: any, db: any) {
        return db.collection("users").where("id", "==", userKey).get();
    }

    function handlerListElement(event: any) {
        let dir = "/home";

        if (event.target.id === "li1") {
            dir = "/moduloI";
        }
        if (event.target.id === "li2") {
            dir = "/moduloII";
        }
        if (event.target.id === "li3") {
            dir = "/moduloIII";
        }
        if (event.target.id === "li4") {
            dir = "/moduloIV";
        }
        if (event.target.id === "li5") {
            dir = "/moduloV";
        }
        if (event.target.id === "li6") {
            dir = "/moduloVI";
        }
        try {
            let userKey = props.history.location.state.username ? props.history.location.state.username : "";
            let authName = props.history.location.state.authName ? props.history.location.state.authName : "";
            HistoryContextStore.history.push({ pathname: dir, state: { authName: authName, username: userKey } });
            HistoryContextStore.history.go();
        } catch (error) {
            HistoryContextStore.history.push("/");
            HistoryContextStore.history.go();
        }

    }
    function getAuthName(){
        let authName = props.history.location.state.authName ? props.history.location.state.authName : "";
        if(authName){
            return authName
        }
    }

    return (

        <div className="classes_page">
            <div className="class_banner">
                <h1>{curso}</h1>
                <h3 className="curse_name">Modulos de curso</h3>
            </div>
            <div>
                <Spinner id={"spinner"} animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
                <Element className="element" id="containerElement" style={{
                    position: 'relative',
                    height: '62vh',
                    overflow: 'scroll',
                }}>
                    <div className="classes_style">
                        <Container>
                            <Row>
                                <Col>
                                    <ul className="oth-ul oth-card-4">
                                        <li id="li1" onClick={handlerListElement} className="oth-bar">
                                            <p id="li1" className="roman bg oth-bar-item oth-circle oth-hide-small">I</p>
                                            <span id="1" className={"status-pending check"}>{localState[0] ? "Completado" : "Pendiente"}</span>
                                            <div id="li1" className="oth-bar-item">
                                                <span id="li1" className="oth-large">Modulo 1</span>
                                                <p id="li1">videos: <span>4</span></p>
                                            </div>
                                        </li>
                                        <li id="li2" onClick={handlerListElement} className="oth-bar">
                                            <p id="li2" className="roman bg oth-bar-item oth-circle oth-hide-small">II</p>
                                            <span id="2" className={"status-pending check"}>{localState[1] ? "Completado" : "Pendiente"}</span>
                                            <div id="li2" className="oth-bar-item">
                                                <span id="li2" className="oth-large">Modulo 2</span><br />
                                                <p id="li2">videos: <span>5</span></p>
                                            </div>
                                        </li>
                                        <li id="li3" onClick={handlerListElement} className="oth-bar">
                                            <p id="li3" className="roman bg oth-bar-item oth-circle oth-hide-small">III</p>
                                            <span id="3" className={"status-pending check"}>{localState[2] ? "Completado" : "Pendiente"}</span>
                                            <div id="li3" className="oth-bar-item">
                                                <span id="li3" className="oth-large">Modulo 3</span><br />
                                                <p id="li3">videos: <span>4</span></p>
                                            </div>
                                        </li>
                                    </ul>
                                </Col>
                                <Col>
                                    <ul className="oth-ul oth-card-4">
                                        <li id="li4" onClick={handlerListElement} className="oth-bar">
                                            <p id="li4" className="roman bg oth-bar-item oth-circle oth-hide-small">IV</p>
                                            <span id="4" className={"status-pending check"}>{localState[3] ? "Completado" : "Pendiente"}</span>
                                            <div id="li4" className="oth-bar-item">
                                                <span id="li4" className="oth-large">Modulo 4</span><br />
                                                <p id="li4">videos: <span>8</span></p>
                                            </div>
                                        </li>
                                        <li id="li5" onClick={handlerListElement} className="oth-bar">
                                            <p id="li5" className="roman bg oth-bar-item oth-circle oth-hide-small">V</p>
                                            <span id="5" className={"status-pending check"}>{localState[4] ? "Completado" : "Pendiente"}</span>
                                            <div id="li5" className="oth-bar-item">
                                                <span id="li5" className="oth-large">Modulo 5</span><br />
                                                <p id="li5">videos: <span>9</span></p>
                                            </div>
                                        </li>
                                        <li id="li6" onClick={handlerListElement} className="oth-bar">
                                            <p id="li6" className="roman bg oth-bar-item oth-circle oth-hide-small">VI</p>
                                            <span id="6" className={"status-pending check"}>{localState[5] ? "Completado" : "Pendiente"}</span>
                                            <div id="li6" className="oth-bar-item">
                                                <span id="li6" className="oth-large">Modulo 6</span><br />
                                                <p id="li6">videos: <span>3</span></p>
                                            </div>
                                        </li>
                                    </ul>
                                </Col>
                                <Col id="download" md={12}>
                                    <Download name={getAuthName()} />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Element>

            </div>
        </div>
    );
})

export default Classes;