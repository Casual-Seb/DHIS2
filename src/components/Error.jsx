import React from 'react';
import '../scss/_box.scss';

class Error extends React.Component {
    render() {
      const divStyle = {
          display: 'block'
      };

      return (
        <div className="box2" style={divStyle}>
            <i className='fas fa-exclamation-triangle'></i>
          <p className="message">{this.props.message.toString()}</p>
            <i className='fas fa-times' onClick={() => this.props.clearError()}></i>
        </div>
      );
    }

}

export default Error;
