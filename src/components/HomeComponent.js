import React, { Component } from 'react';


class HomeComponent extends Component {
    render() {
        return (
            <div style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#ff0900'
            }}>
                <h1>{this.props.title}</h1>
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h3>


            </div>
        );
    }
}

export default HomeComponent;

