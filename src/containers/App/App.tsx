import React, { useEffect, useContext } from 'react';
import '../../sass/App.scss';
import LoginPage from '../LoginPage/LoginPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import SignupForm from '../../components/SignupForm/SignupForm';
import ResetPassword from '../../components/ChangePassword/ResetPassword';
import ChangePassword from '../../components/ChangePassword/ChangePassword';
import { observer } from 'mobx-react-lite';
import { Provider } from 'mobx-react';
import firebaseStore from '../../stores/firebaseStore';

const App = observer(() => {
  const firebaseContextStore = useContext(firebaseStore);

  useEffect(() => {
    try {
      firebaseContextStore.addConnection();
      console.log("Firebase connection: Ok.");
    } catch (error) {
      console.log(error);
      alert("Error de conección.");
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Provider connection={firebaseStore}>
          <Router>
            <Route path="/" exact component={LoginPage} />
            <Route path="/home" exact component={HomePage} />
            <Route path="/cursos" exact component={HomePage} />
            <Route path="/usuario" exact component={HomePage} />
            <Route path="/usuarios" exact component={HomePage} />
            <Route path="/signup" exact component={SignupForm} />
            <Route path="/RecoverPass" exact component={ResetPassword} />
            <Route path="/RecoverPass/reset" exact component={ChangePassword} />
          </Router>
        </Provider>
      </header>
    </div>
  );
})

export default App;
