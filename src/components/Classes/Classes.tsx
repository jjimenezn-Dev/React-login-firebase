import React, { useContext, useState, useEffect } from 'react';
import Scroll from 'react-scroll';
import { Row, Col } from 'react-bootstrap';
import { observer } from 'mobx-react';
import historyStored from '../../stores/historyStore';

const Classes: React.FC = observer((props:any) => {
    const HistoryContextStore = useContext(historyStored);
    var Element: any = Scroll.Element;
    const [userState, setuserState] = useState({ name: "Juan Sebastian", last_name: "Jimenez Nieto",id: "" });


    useEffect(() => {
        console.log(props);
        
    },[]);

    const [localState, setLocalState] = useState({1:false, 2:false, 3:false, 4:false, 5:false, 6:false});
    function handlerListElement(event: any) {
        console.log(event.target.id);
        let dir = "/home";
        if(event.target.id === "1"){
            dir = "/moduloI";             
        }
        if(event.target.id === "2"){
            dir = "/moduloII"; 
        }
        if(event.target.id === "3"){
            dir = "/moduloIII";
        }
        if(event.target.id === "4"){
            dir = "/moduloIV"; 
        }
        if(event.target.id === "5"){
            dir = "/moduloV";             
        }
        if(event.target.id === "6"){
            dir = "/moduloVI"; 
        }
        HistoryContextStore.history.push(dir);
        HistoryContextStore.history.go();
    }

    return (
        <Element className="element" id="containerElement" style={{
            position: 'relative',
            height: '62vh',
            overflow: 'scroll',
        }}>
            <div className="classes_style">
                <Row>
                    <Col>
                        <ul className="oth-ul oth-card-4">
                            <li id="1" onClick={handlerListElement} className="oth-bar">
                                <p id="1" className="roman bg oth-bar-item oth-circle oth-hide-small">I</p>
                                <span id="1" className={localState[1]? "status-success" :"status-pending"}>{localState[1]? "Completado" : "Pendiente"}</span>
                                <div id="1" className="oth-bar-item">
                                    <span id="1" className="oth-large">Modulo 1</span>
                                    <p id="1">videos: <span>4</span></p>
                                </div>
                            </li>
                            <li id="2" onClick={handlerListElement} className="oth-bar">
                                <p id="2" className="roman bg oth-bar-item oth-circle oth-hide-small">II</p>
                                <span id="2" className={localState[2]? "status-success" :"status-pending"}>{localState[2]? "Completado" : "Pendiente"}</span>
                                <div id="2" className="oth-bar-item">
                                    <span id="2" className="oth-large">Modulo 2</span><br />
                                    <p id="2">videos: <span>5</span></p>
                                </div>
                            </li>
                            <li id="3" onClick={handlerListElement} className="oth-bar">
                                <p id="3" className="roman bg oth-bar-item oth-circle oth-hide-small">III</p>
                                <span id="3" className={localState[3]? "status-success" :"status-pending"}>{localState[3]? "Completado" : "Pendiente"}</span>
                                <div id="3" className="oth-bar-item">
                                    <span id="3" className="oth-large">Modulo 3</span><br />
                                    <p id="3">videos: <span>4</span></p>
                                </div>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <ul className="oth-ul oth-card-4">
                            <li id="4" onClick={handlerListElement} className="oth-bar">
                                <p id="4" className="roman bg oth-bar-item oth-circle oth-hide-small">IV</p>
                                <span id="4" className={localState[4]? "status-success" :"status-pending"}>{localState[4]? "Completado" : "Pendiente"}</span>
                                <div id="4" className="oth-bar-item">
                                    <span id="4" className="oth-large">Modulo 4</span><br />
                                    <p id="4">videos: <span>9</span></p>
                                </div>
                            </li>
                            <li id="5" onClick={handlerListElement} className="oth-bar">
                                <p id="5" className="roman bg oth-bar-item oth-circle oth-hide-small">V</p>
                                <span id="5" className={localState[5]? "status-success" :"status-pending"}>{localState[5]? "Completado" : "Pendiente"}</span>
                                <div id="5" className="oth-bar-item">
                                    <span id="5" className="oth-large">Modulo 5</span><br />
                                    <p id="5">videos: <span>9</span></p>
                                </div>
                            </li>
                            <li id="6" onClick={handlerListElement} className="oth-bar">
                                <p id="6" className="roman bg oth-bar-item oth-circle oth-hide-small">VI</p>
                                <span id="6" className={localState[6]? "status-success" :"status-pending"}>{localState[6]? "Completado" : "Pendiente"}</span>
                                <div id="6" className="oth-bar-item">
                                    <span id="6" className="oth-large">Modulo 6</span><br />
                                    <p id="6" >videos: <span>3</span></p>
                                </div>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </Element>

    );
})

export default Classes;