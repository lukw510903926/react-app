import React from 'react';

class About extends React.Component {
    render() {

        var about = {
            color:'red',
            backgroundColor:'blue'
        }
        return (
                <a style={about}>关于我们</a>
        );
    }
}

export default About;
