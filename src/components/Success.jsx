import React from 'react';
import '../scss/_box.scss';

class Success extends React.Component {
    render() {
        var divStyle = {
            display: 'block'
        };

        return (
            <div className="box1" style={divStyle}>
                <div className="row">
                    <i className='fas fa-check'></i>
                    <p className="message">{this.props.message.toString()}</p>
                </div>
            </div>
        );
    }

}

export default Success;
