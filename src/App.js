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

import { connect } from 'react-redux';
import { getMockData } from './providers/redux/actions';

import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {

    componentWillMount() {

        console.log('ssr');

        const { getMockData } = this.props;

        getMockData();

    }

    render() {

        return (
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

    }

}

const mapState = (state, ownProps) => ({
    mockData : state.mockData.data
});

const mapDispatch = (dispatch, ownProps) => ({
    getMockData : () => dispatch(getMockData())
});

export default connect(mapState, mapDispatch)(App);
