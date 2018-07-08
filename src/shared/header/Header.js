import React from 'react';
import './Header.css';

import { connect } from 'react-redux';

class Header extends React.Component {

  render() {
    const { mockData } = this.props;

    console.log(mockData);
  
    return (
      <div className='Header'>
          <h1>Header</h1>
          <h3> { mockData.title } </h3>
          <h3> { mockData.subTitle } </h3>
          <h3> { mockData.content }</h3>
      </div>
    );
  }
}

const mapState = (state, ownProps) => ({
  mockData : state.mockData.data
});

const mapDispatch = (dispatch, ownProps) => ({

});

export default connect(mapState, mapDispatch)(Header);