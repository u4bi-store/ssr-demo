import React from 'react';
import logo from '../../assets/react.svg';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className='Home'>
        <div className='Home-header'>
          <img src={logo} className='Home-logo' alt='logo' />
          <h1>Home</h1>
        </div>
      </div>
    );
  }
}

export default Home;
