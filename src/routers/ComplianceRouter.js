import React, { createRef } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Menu, Grid, Segment, Sticky, Ref, Rail, Button, Icon } from 'semantic-ui-react'
import Back2Top from 'react-back2top'
import NavBar from '../components/layouts/Header'
import {
    ActivityFirstAid, 
    AnaphylaxisManagement, 
    BespokeFirstAid, 
    BlsAed, 
    CatastrophicBleedManagement, 
    FirstAidAtWork,
    FoodSafety, 
    HealthAndSafety, 
    MentalHealthFirstAid, 
    PaediatricFirstAid, 
    SafeGuarding, 
    ComplianceHome,
} from '../components/compliance'

export default class Compliance extends React.Component {
    state = { activeItem: null }
    contextRef = createRef()

    componentDidMount() {
        let strippedPath = this.stripPathToString(this.props.location.pathname)
        if (this.state.activeItem !== strippedPath && (strippedPath === 'compliance')) {
            this.setState({ 
                activeItem: 'Compliance Home'
            })
        }
        else if (this.state.activeItem !== strippedPath) {
            this.setState({ 
                activeItem: strippedPath
            })
        }
    }

    stripPathToString = (path) => {
        let newPath = path.replace(/\\|\//g,' ').split(' ')
        return newPath[2] ? newPath[2].replace(/-/g, ' ') : newPath[1]
    }

    handleItemClick = (event, { name }) => {
        this.setState({ activeItem: name })
    }

    render() {
        const { activeItem } = this.state
        const linkNames = [
            'Health And Safety', 
            'First Aid At Work', 
            'Basic Life Support with AED', 
            'Paediatric First Aid', 
            'Activity First Aid', 
            'Junior And Bespoke First Aid', 
            'Mental Health First Aid', 
            'Anaphylaxis Management',
            'Catastrophic Bleeds', 
            'Food Safety', 
            'Safe Guarding'
        ]

        return (
            <>
				<NavBar path={this.props.location.pathname} />
                <Router>
                    <Grid centered style={{ margin: '1em 0 .1em 0' }}>
                        <Grid.Column borderless stretched width={10}>
                            <Ref innerRef={this.contextRef}>
                                <Rail position='right'>
                                    <Sticky context={this.contextRef} offset={100} styleElement={{ margin: '2.1em'}}>
                                        <Back2Top
                                            scrollDuration={500}
                                        >
                                            <Button inverted color='blue' size='huge'>
                                                &nbsp; Top &nbsp;
                                                <Icon name='double angle up'/>
                                            </Button>
                                        </Back2Top>
                                    </Sticky>
                                </Rail>
                            </Ref>
                            <Ref innerRef={this.contextRef}>
                                <Rail position='left'>
                                    <Sticky context={this.contextRef} offset={100} styleElement={{ marginTop: '2.1em'}}>
                                        <Menu fluid vertical tabular>
                                            <Menu.Item
                                                id='menuItem'
                                                style={{ outline: 'none' }}
                                                name='Compliance Home'
                                                as={Link}
                                                to='/compliance'
                                                active={activeItem === 'Compliance Home'}
                                                onClick={this.handleItemClick}
                                            />
                                            {
                                                linkNames.map((item) => (
                                                    <Menu.Item
                                                        id='menuItem'
                                                        style={{ outline: 'none' }}
                                                        name={item}
                                                        as={Link}
                                                        to={`/compliance/${item.replace(/\s+/g, '-')}`}
                                                        active={activeItem === item}
                                                        onClick={this.handleItemClick}
                                                    />
                                                ))
                                            }
                                        </Menu>
                                    </Sticky>
                                </Rail>
                            </Ref>
                            <Segment style={{ padding: '3em', marginBottom: '1em' }}>
                                <Switch>
                                    <Route exact path="/compliance" component={ComplianceHome} />
                                    <Route path="/compliance/Health-And-Safety" component={HealthAndSafety} />
                                    <Route path="/compliance/First-Aid-At-Work" component={FirstAidAtWork} />
                                    <Route path="/compliance/Basic-Life-Support-with-AED" component={BlsAed} />
                                    <Route path="/compliance/Paediatric-First-Aid" component={PaediatricFirstAid} />
                                    <Route path="/compliance/Activity-First-Aid" component={ActivityFirstAid} />
                                    <Route path="/compliance/Junior-And-Bespoke-First-Aid" component={BespokeFirstAid} />
                                    <Route path="/compliance/Anaphylaxis-Management" component={AnaphylaxisManagement} />
                                    <Route path="/compliance/Catastrophic-Bleeds" component={CatastrophicBleedManagement} />
                                    <Route path="/compliance/Food-Safety" component={FoodSafety} />
                                    <Route path="/compliance/Mental-Health-First-Aid" component={MentalHealthFirstAid} />
                                    <Route path="/compliance/Safe-Guarding" component={SafeGuarding} />
                                </Switch>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                </Router>
            </>
        )
    }
}