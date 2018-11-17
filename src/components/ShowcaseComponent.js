import React, { Component } from 'react';


class ShowcaseComponent extends Component {
    render() {
        return (
            <div style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#ff0900'
            }}>
                    <h1>{this.props.title}</h1>

            </div>
        );
    }
}

export default ShowcaseComponent;

