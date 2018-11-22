import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';




class AppBarComponent extends Component {
    render() {
        return (


                    <Toolbar style={{backgroundColor: '#00FF0B'}}>
                    <Typography variant="h6" color="inherit">
                    </Typography>
                    </Toolbar>
        );
    }
}

export default AppBarComponent;
