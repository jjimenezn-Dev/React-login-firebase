import React, { useEffect } from 'react';
import '../../sass/App.scss';
import LoginPage from '../LoginPage/LoginPage';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import historyStored from '../../stores/historyStore';

const App: React.FC = () => {
  useEffect (()=>{
    historyStored.addTodo();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Route path="/" exact component={LoginPage} />
        <Route path="/home" exact component={HomePage} />
      </Router>

      </header>
    </div>
  );
}

export default App;
