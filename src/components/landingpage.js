import React, { Component } from 'react';
import {Cell, Grid} from "react-mdl";

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className={'landing-grid'}>
                    <Cell col={12}>
                        <img
                            src="http://img01.alkislarlayasiyorum.com/images/members/26_26/330/330299_4.jpg"
                            alt="avatar"
                            className='avatar-img'/>
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr/>

                            <p>
                                HTML/CSS | Bootstrap | JavaScript/Jquery | React | PHP | Python | Angular | Android | MySql
                            </p>

                            <div className="social-links">
                                {/*LinkedIn*/}
                                <a href="http://google.com" rel="noopener noreferrer" target='_blank'>
                                    <i className="fa fa-linkedin-square" aria-hidden='true' />
                                </a>

                                {/*Github*/}
                                <a href="http://google.com" rel="noopener noreferrer" target='_blank'>
                                    <i className="fa fa-github-square" aria-hidden='true' />
                                </a>

                                {/*Freecodecamp*/}
                                <a href="http://google.com" rel="noopener noreferrer" target='_blank'>
                                    <i className="fa fa-free-code-camp" aria-hidden='true' />
                                </a>

                                {/*YouTube*/}
                                <a href="http://google.com" rel="noopener noreferrer" target='_blank'>
                                    <i className="fa fa-youtube-square" aria-hidden='true' />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;