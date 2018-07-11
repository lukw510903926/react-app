import React from 'react';
import img from '../theme/image/404.png'

export default class NotFound extends React.Component {
    render() {
        return (
            <div className="center" style={{height: '100%', background: '#ececec', overflow: 'hidden'}}>
                <img src={img} alt="404" />
            </div>
        )
    }
}

