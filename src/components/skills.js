import React, { Component } from 'react';
import {Cell, Grid, ProgressBar} from "react-mdl";

class Skills extends Component {
    render() {
        return (
            <Grid>
                <Cell col={2}>
                    {this.props.skill}
                </Cell>

                <Cell col={10}>
                    <ProgressBar style={{margin: 'auto', width: '80%'}} progress={this.props.progress} />
                </Cell>
            </Grid>
        );
    }
}

export default Skills
