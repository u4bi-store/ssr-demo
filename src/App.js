import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Redirect from 'react-router-dom/Redirect';

import Header from './shared/header/Header';

import Home from './pages/home/Home';
import Sign from './pages/sign/Sign';
import Login from './pages/login/Login';
import DetailBoard from './pages/detail-board/DetailBoard';
import './App.css';

const App = () => (
  <div className='App'>
    <Header />
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route exact path='/sign' component={ Sign } />
      <Route exact path='/login' component={ Login } />
      <Route exact path='/board/detail/:no' component= { DetailBoard } />
      <Redirect from='*' to='/'/>
    </Switch>
  </div>
);

export default App;
