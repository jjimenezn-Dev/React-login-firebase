import React, { FunctionComponent, useEffect, useContext, } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import historyStored from '../../stores/historyStore';
import Home from '../../components/Home/Home';
import firebaseStore from '../../stores/firebaseStore';
import UserMenu from '../../components/Menu/UserMenu';
import AdminMenu from '../../components/Menu/AdminMenu';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';

const HomePage = observer(() => {
  const HistoryContextStore = useContext(historyStored);  
  const firebaseContextStore = useContext(firebaseStore); 

  useEffect(() => {
    console.log(toJS(firebaseContextStore.fireAuth));
    
    if(!firebaseContextStore.fireAuth){
      HistoryContextStore.history.push("/");
      //HistoryContextStore.history.go();
    }
  }, [])

  return (
    <div className="home-page">
      <div className="header"></div>
      <Container>
        <Row>
          <Col className="Menu" md={2}>
            <div className="ligh-font">
              <h3>Bienvenido</h3> <h4>{"Juan Pepito Perez"}</h4>
            </div>
            <div className="welcome-message"></div>
            <AdminMenu/>
            <UserMenu/>            
          </Col>
          <Col className="content" md={10}>
            <div>
            <Router>
              <Route path="/home" exact component={Home} />
              <Route path="/cursos" exact component={Home} />
              <Route path="/usuario" exact component={Home} />
              <Route path="/usuarios" exact component={Home} />
            </Router>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
})

export default HomePage;