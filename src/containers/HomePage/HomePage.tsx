import React, { useEffect, useContext, useState, } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import historyStored from '../../stores/historyStore';
import Home from '../../components/Home/Home';
import firebaseStore from '../../stores/firebaseStore';
import UserMenu from '../../components/Menu/UserMenu';
import AdminMenu from '../../components/Menu/AdminMenu';
import { observer } from 'mobx-react-lite';
import logo from '../../assets/images/logo.png';
import SignOutButton from '../../components/SignOutButton/SignOutButton';
import Module1 from '../../components/Module/Module1';
import Module2 from '../../components/Module/Module2';
import Module3 from '../../components/Module/Module3';
import Module4 from '../../components/Module/Module4';
import Module5 from '../../components/Module/Module5';
import Module6 from '../../components/Module/Module6';
import Quiz1 from '../../components/Quiz/Quiz1';
import Quiz2 from '../../components/Quiz/Quiz2';
import Quiz3 from '../../components/Quiz/Quiz3';
import Quiz4 from '../../components/Quiz/Quiz4';
import Quiz5 from '../../components/Quiz/Quiz5';
import Quiz6 from '../../components/Quiz/Quiz6';
import Classes from '../../components/Classes/Classes';
import updateQuizUser from '../../components/utils/updateQuizUser';

const HomePage = observer((props: any, { match }: any) => {
  const HistoryContextStore = useContext(historyStored);
  const firebaseContextStore = useContext(firebaseStore);

  const [localState, setLocalState] = useState({ name: "Juan Sebastian", last_name: "Jimenez Nieto", id: "" });
  
  function handleNameChange(event: any) {
    setLocalState({ ...localState, name: event.target.value });
  }

  useEffect(() => {
    if (!firebaseContextStore.fireAuth) {
      HistoryContextStore.history.push({ pathname: "/", state: { username: localState.id != "" ? `${localState.id}` : "none" } });
      HistoryContextStore.history.go();
    }
  }, [])

  function handlerLogo(event: any) {
    HistoryContextStore.history.push({ pathname: "/home", state: { username: localState.id != "" ? `${localState.id}` : "none" } });
    HistoryContextStore.history.go();
  }

  return (
    <div className="home-page">
      <div className="header"></div>
      <Container>
        <Row>
          <Col className="Menu" md={2}>
            <div className="logo_img">
              <img onClick={handlerLogo} src={logo} alt="Curso de Manejo Defensivo." />
            </div>
            <div className="ligh-font">
              <h3>Bienvenido</h3> <h4>{`${localState.name} ${localState.last_name}`}</h4>
            </div>
            <div className="welcome-message"></div>
            <UserMenu {...props}/>
            <AdminMenu {...props} />
            <SignOutButton />
          </Col>
          <Col className="content" md={10}>
            <div>
              <Router>
                <Route path="/home" exact component={() => <Classes {...props} />} />
                <Route path="/cursos" exact component={() => <Home props={props} />} />
                <Route path="/moduloI" exact component={() => <Module1 props={props} />} />
                <Route path="/moduloII" exact component={() => <Module2 props={props} />} />
                <Route path="/moduloIII" exact component={() => <Module3 props={props} />} />
                <Route path="/moduloIV" exact component={() => <Module4 props={props} />} />
                <Route path="/moduloV" exact component={() => <Module5 props={props} />} />
                <Route path="/moduloVI" exact component={() => <Module6 props={props} />} />
                <Route path="/usuario" exact component={Home} />
                <Route path="/usuarios" exact component={Home} />
                <Route path="/quiz1" exact component={Quiz1} />
                <Route path="/quiz2" exact component={Quiz2} />
                <Route path="/quiz3" exact component={Quiz3} />
                <Route path="/quiz4" exact component={Quiz4} />
                <Route path="/quiz5" exact component={Quiz5} />
                <Route path="/quiz6" exact component={Quiz6} />
                <Route path="/loading" exact component={updateQuizUser} />
                <Route path="/usersAmdin" exact component={Home} />
              </Router>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
})

export default HomePage;