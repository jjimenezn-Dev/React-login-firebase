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
            <Route path="/signup" exact component={LoginPage} />
            <Route path="/home" exact component={HomePage} />
            <Route path="/cursos" exact component={HomePage} />
            <Route path="/moduloI" exact component={HomePage} />
            <Route path="/moduloII" exact component={HomePage} />
            <Route path="/moduloIII" exact component={HomePage} />
            <Route path="/moduloIV" exact component={HomePage} />
            <Route path="/moduloV" exact component={HomePage} />
            <Route path="/moduloVI" exact component={HomePage} />
            <Route path="/usuario" exact component={HomePage} />
            <Route path="/usuarios" exact component={HomePage} />
            <Route path="/RecoverPass" exact component={ResetPassword} />
            <Route path="/RecoverPass/reset" exact component={ChangePassword} />
            <Route path="/quiz1" exact component={HomePage} />
            <Route path="/quiz2" exact component={HomePage} />
            <Route path="/quiz3" exact component={HomePage} />
            <Route path="/quiz4" exact component={HomePage} />
            <Route path="/quiz5" exact component={HomePage} />
            <Route path="/quiz6" exact component={HomePage} />
          </Router>
        </Provider>
      </header>
    </div>
  );
})

export default App;
