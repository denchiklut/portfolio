import React, { Component } from 'react';
import {Cell, Grid} from "react-mdl";
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                        <img
                            src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                            alt="avatar"
                            style={{height:'200px'}}
                        />
                    </div>

                    <h2 style={{paddingTop: '2em'}}> lex Lutor </h2>
                    <h4 style={{color: 'grey'}}> Programmer </h4>

                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto
                        commodi delectus doloribus dolorum, eos esse eveniet illum itaque iure laboriosam
                        libero neque odit repellat similique ullam unde vero voluptatum.
                    </p>

                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

                    <h5> Address </h5>
                    <p>Moscow, Russia</p>
                    <h5>Phone</h5>
                    <p>+7 99 839 48 00</p>
                    <h5>Email</h5>
                    <p>denchiklut@gmail.com</p>
                    <h5>web</h5>
                    <p>denchiklut.com</p>

                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                </Cell>

                <Cell col={8} className='resume-right-col'>
                    <h2>Education</h2>

                    <Education
                        startYear={2002}
                        endYear={2006}
                        schoolName='My univercity'
                        schoolDescription='Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad adipisci consequuntur doloribus, eum fuga fugiat illo inventore iste, laudantium minus nemo nostrum quaerat, quibusdam quod saepe!'
                    />

                    <Education
                        startYear={2007}
                        endYear={2009}
                        schoolName='My 2nd univercity'
                        schoolDescription='Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad adipisci consequuntur doloribus, eum fuga fugiat illo inventore iste, laudantium minus nemo nostrum quaerat, quibusdam quod saepe!'
                    />

                    <hr style={{borderTop: '3px solid #e22947'}} />

                    <h2>Experience</h2>

                    <Experience
                        startYear={2009}
                        endYear={2014}
                        jobName='First job'
                        jobDescription='Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad adipisci consequuntur doloribus, eum fuga fugiat illo inventore iste, laudantium minus nemo nostrum quaerat, quibusdam quod saepe!'
                    />

                    <Experience
                        startYear={2014}
                        endYear={2017}
                        jobName='Second job'
                        jobDescription='Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad adipisci consequuntur doloribus, eum fuga fugiat illo inventore iste, laudantium minus nemo nostrum quaerat, quibusdam quod saepe!'
                    />

                    <hr style={{borderTop: '3px solid #e22947'}} />

                    <h2>Skills</h2>

                    <Skills
                        skill='HTML / CSS'
                        progress={100}
                    />
                    <Skills
                        skill='Bootstrap'
                        progress={80}
                    />
                    <Skills
                        skill='PHP'
                        progress={70}
                    />
                    <Skills
                        skill='JavaScript'
                        progress={40}
                    />
                    <Skills
                        skill='React'
                        progress={30}
                    />
                </Cell>
            </Grid>
        )
    }
}

export default Resume;