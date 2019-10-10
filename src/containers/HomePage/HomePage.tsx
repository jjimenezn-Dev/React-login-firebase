import React, { useEffect, useContext, useState, } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import historyStored from '../../stores/historyStore';
import Home from '../../components/Home/Home';
import firebaseStore from '../../stores/firebaseStore';
import UserMenu from '../../components/Menu/UserMenu';
import AdminMenu from '../../components/Menu/AdminMenu';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import ClassesPage from '../ClassesPage/ClassesPage';
import logo from '../../assets/images/logo.png';
import SignOutButton from '../../components/SignOutButton/SignOutButton';
import ModulePage from '../ModulePage/ModulePage';
import Module1 from '../../components/Module/Module1';
import Module2 from '../../components/Module/Module2';
import Module3 from '../../components/Module/Module3';
import Module4 from '../../components/Module/Module4';
import Module5 from '../../components/Module/Module5';
import Module6 from '../../components/Module/Module6';

const HomePage: React.FC = observer(() => {
  const HistoryContextStore = useContext(historyStored);
  const firebaseContextStore = useContext(firebaseStore);

  const [localState, setLocalState] = useState({ name: "Juan Sebastian", last_name: "Jimenez Nieto" });

  function handleNameChange(event: any) {
    setLocalState({ ...localState, name: event.target.value });
  }
  useEffect(() => {
    console.log(toJS(firebaseContextStore.fireAuth));

    if (!firebaseContextStore.fireAuth) {
      HistoryContextStore.history.push("/");
      HistoryContextStore.history.go();
    }
  }, [])

  function handlerLogo(event: any) {
    HistoryContextStore.history.push("/home");
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
            <UserMenu />
            <AdminMenu />
            <SignOutButton />
          </Col>
          <Col className="content" md={10}>
            <div>
              <Router>
                <Route path="/home" exact component={ClassesPage} />
                <Route path="/curso" exact component={Home} />
                <Route path="/moduloI" exact component={Module1} />
                <Route path="/moduloII" exact component={Module2} />
                <Route path="/moduloIII" exact component={Module3} />
                <Route path="/moduloIV" exact component={Module4} />
                <Route path="/moduloV" exact component={Module5} />
                <Route path="/moduloVI" exact component={Module6} />
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