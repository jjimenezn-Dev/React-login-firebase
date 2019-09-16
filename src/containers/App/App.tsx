import React from 'react';
import '../../sass/App.scss';
import LoginPage from '../LoginPage/LoginPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <LoginPage/>
      </header>
    </div>
  );
}

export default App;
