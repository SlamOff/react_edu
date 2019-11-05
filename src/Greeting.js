import React from 'react';

class Greeting extends React.Component {
    render(){
        const { name } = this.props;

        return (
            <div>Hello {name}</div>
        )
    }
}

export default Greeting;