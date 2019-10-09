import React, { FunctionComponent } from 'react';
import Scroll from 'react-scroll';
import { Row, Col } from 'react-bootstrap';

const Classes: FunctionComponent = () => {
    var Element: any = Scroll.Element;

    function handlerListElement(event:any){
        console.log(event.target.id);

    }

    return (
        <Element className="element" id="containerElement" style={{
            position: 'relative',
            height: '65vh',
            overflow: 'scroll',
        }}>
            <div className="classes_style">
                <Row>
                    <Col>
                    <ul className="oth-ul oth-card-4">
                    <li id="1" onClick={handlerListElement} className="oth-bar">
                    <p className="roman bg oth-bar-item oth-circle oth-hide-small">I</p>
                    <span className="status-success">Completado</span>
                        <div className="oth-bar-item">
                            <span className="oth-large">Modulo 1</span>
                            <p>videos: <span>9</span></p>
                        </div>
                    </li>
                    <li id="2" onClick={handlerListElement} className="oth-bar">
                        <p className="roman bg oth-bar-item oth-circle oth-hide-small">II</p>
                        <span className="status-success">Completado</span>
                        <div className="oth-bar-item">
                            <span className="oth-large">Modulo 2</span><br />
                            <p>videos: <span>5</span></p>
                        </div>
                    </li>
                    <li id="3" onClick={handlerListElement} className="oth-bar">
                        <p className="roman bg oth-bar-item oth-circle oth-hide-small">III</p>
                        <span className="status-success">Completado</span>
                        <div className="oth-bar-item">
                            <span className="oth-large">Modulo 3</span><br />
                            <p>videos: <span>4</span></p>
                        </div>
                    </li>
                </ul>
                    </Col>
                    <Col>
                    <ul className="oth-ul oth-card-4">
                    <li id="4" onClick={handlerListElement} className="oth-bar">
                        <p className="roman bg oth-bar-item oth-circle oth-hide-small">IV</p>
                        <span className="status-success">Completado</span>
                        <div className="oth-bar-item">
                            <span className="oth-large">Modulo 4</span><br />
                            <p>videos: <span>9</span></p>
                        </div>
                    </li>
                    <li id="5" onClick={handlerListElement} className="oth-bar">
                        <p className="roman bg oth-bar-item oth-circle oth-hide-small">V</p>
                        <span className="status-pending">Pendiente</span>                        
                        <div className="oth-bar-item">
                            <span className="oth-large">Modulo 5</span><br />
                            <p>videos: <span>4</span></p>
                        </div>
                    </li>
                    <li id="6" onClick={handlerListElement} className="oth-bar">
                        <p className="roman bg oth-bar-item oth-circle oth-hide-small">VI</p>
                        <span className="status-pending">Pendiente</span>
                        <div className="oth-bar-item">
                            <span className="oth-large">Modulo 6</span><br />
                            <p>videos: <span>3</span></p>
                        </div>
                    </li>
                </ul>
                    </Col>
                </Row>
            </div>
        </Element>

    );
}

export default Classes;