import React from 'react';
import './DetailBoard.css';

class DetailBoard extends React.Component {

  render() {

    console.log(this.props.match.params);

    const { match } = this.props;
    const { no } = match.params;
  
    return (
      <div className='DetailBoard'>
          <h1>DetailBoard { no }</h1>
      </div>
    );
  }
}

export default DetailBoard;
