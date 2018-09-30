import React, { Component } from 'react';
import {Cell, Grid, List, ListItem, ListItemContent} from "react-mdl";

class Contact extends Component {
    render() {
        return(
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h2>Lex Lutor</h2>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Adipisci commodi dolor illum laudantium, nihil obcaecati
                            optio quia reprehenderit sed sit. </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact me</h2>

                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className='fa fa-phone-square' aria-hidden='true' />
                                        +7 999 839 48 00
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className='fa fa-fax' aria-hidden='true' />
                                        +7 999 839 48 00
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className='fa fa-envelope' aria-hidden='true' />
                                        denchiklut@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className='fa fa-skype' aria-hidden='true' />
                                        denchiklut
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;