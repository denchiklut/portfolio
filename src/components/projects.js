import React, { Component } from 'react';
import {Button, Card, CardActions, CardMenu, CardText, CardTitle, Cell, Grid, IconButton, Tab, Tabs} from "react-mdl";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return(
                <div className='projects-grid'>
                    {/*Project 1*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background:
                                'url(https://fr-images.tuto.net/tuto/thumb/648/288/47753.jpg) center / cover'}}>
                            Bootstrap project #1
                        </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto fugiat
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: 'white'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                    {/*Project 2*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background:
                                'url(https://fr-images.tuto.net/tuto/thumb/648/288/47753.jpg) center / cover'}}>
                            Bootstrap project #2
                        </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto fugiat
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: 'white'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                    {/*Project 3*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background:
                                'url(https://fr-images.tuto.net/tuto/thumb/648/288/47753.jpg) center / cover'}}>
                            Bootstrap project #3
                        </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto fugiat
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: 'white'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return(
                <div className='projects-grid'>
                    {/*Project 1*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background:
                                'url(http://www.mindphp.com/forums/download/file.php?id=36389) center / cover'}}>
                            React project #1
                        </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto fugiat
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: 'white'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                    {/*Project 2*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background:
                                'url(http://www.mindphp.com/forums/download/file.php?id=36389) center / cover'}}>
                            React project #2
                        </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto fugiat
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: 'white'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return(
                <div className='projects-grid'>
                    {/*Project 1*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background:
                                'url(https://i0.wp.com/sunvery.com.ua/wp-content/uploads/2018/03/Angular-JS.jpg?zoom=2.625&resize=382%2C215) center / cover'}}>
                            Angular project #1
                        </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto fugiat
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: 'white'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return(
                <div className='projects-grid'>
                    {/*Project 1*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background:
                                'url(https://www.siteground.com/blog/wp-content/uploads/2016/12/Blog-PHP7-2.jpg) center / cover'}}>
                            PHP project #1
                        </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto fugiat
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: 'white'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                    {/*Project 2*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background:
                                'url(https://www.siteground.com/blog/wp-content/uploads/2016/12/Blog-PHP7-2.jpg) center / cover'}}>
                            PHP project #2
                        </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto fugiat
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: 'white'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                    {/*Project 2*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background:
                                'url(https://www.siteground.com/blog/wp-content/uploads/2016/12/Blog-PHP7-2.jpg) center / cover'}}>
                            PHP project #2
                        </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto fugiat
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: 'white'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 4) {
            return(
                <div className='projects-grid'>
                    {/*Project 1*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background:
                                'url(https://1.bp.blogspot.com/-AOh_vBqtgQE/Wx-uUmRbeAI/AAAAAAAAxDY/s9eoWuunEnUP3Jo92Be4xOqoVm7Mcr9EwCLcBGAs/s728-e100/android-adb-hack.png) center / cover'}}>
                            Android project #1
                        </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto fugiat
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: 'white'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }


    render() {
        return(
            <div className='category-tabs'>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>Bootstrap</Tab>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>PHP</Tab>
                    <Tab>Android</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;