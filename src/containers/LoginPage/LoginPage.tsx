import React, { useEffect } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import SignupForm from '../../components/SignupForm/SignupForm';
import { Container } from 'semantic-ui-react';
import { Row, Col } from 'react-bootstrap';

const LoginPage = ({ match }: any) => {


  return (
    <div className="login-page">
      <Container>
        <Row className="title_row">
          <Col><h1>¡Bienvenido al curso de manejo defensivo!</h1></Col>
        </Row>
        <Row>
          <Col>
            <Router>
              <Route path="/" exact component={LoginForm} />
              <Route path="/signup" exact component={SignupForm} />
            </Router>
          </Col>
        </Row>
      </Container>


    </div>
  )
}

export default LoginPage;