import React, { createRef } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Menu, Responsive, Header, Grid, Segment, Sticky, Ref, Rail, Button, Icon, Container } from 'semantic-ui-react'
import Back2Top from 'react-back2top';
import NavBar from '../layouts/Header'
import {
    ActivityFirstAid,
    AnaphylaxisManagement,
    BespokeFirstAid,
    BlsAed,
    CatastrophicBleedManagement,
    FireSafety,
    FirstAidAtWork,
    FoodSafety,
    HealthAndSafety,
    MentalHealthFirstAid,
    OxygenTherapy,
    PaediatricFirstAid,
    SafeGuarding,
    ComplianceHome,
  } from '.'

export default class Compliance extends React.Component {
    state = { activeItem: 'Compliance', activeComponent: <ComplianceHome/> }

    contextRef = createRef()
  
    handleItemClick = (event, { name }) => this.setState({ activeItem: name })
        
    render() {
        const { activeItem, activeComponent } = this.state

        return (
            <>
                <NavBar/>
                <Grid
                    borderless 
                    id='compHero'
                    textAlign='center'
                    style={{ margin: '1em 0 1em 0' }}
                >
                    <Grid.Row>
                        <Header inverted as='h1' style={{ marginTop: '.4em', fontSize: '5em' }}>
                            COMPLIANCE
                        </Header>
                    </Grid.Row>
                </Grid>
                <Router>
                    <Responsive>
                        <Grid centered style={{ marginBottom: '.1em' }}>
                            <Grid.Column borderless stretched width={10}>
                                <Ref innerRef={this.contextRef}>
                                    <Rail position='right'>
                                        <Sticky context={this.contextRef} offset={100} styleElement={{ margin: '2.1em'}}>
                                            <Back2Top>
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
                                                    name='Compliance'
                                                    as={Link}
                                                    to='/compliance'
                                                    active={activeItem === 'Compliance'}
                                                    onClick={this.handleItemClick}
                                                />
                                                <Menu.Item
                                                    name='First Aid At Work'
                                                    as={Link}
                                                    to='/compliance/first-aid-at-work'
                                                    active={activeItem === 'First Aid At Work'}
                                                    onClick={this.handleItemClick}
                                                />
                                                <Menu.Item
                                                    name='Basic Life Support with AED'
                                                    as={Link}
                                                    to='/compliance/bls-aed'
                                                    active={activeItem === 'Basic Life Support with AED'}
                                                    onClick={this.handleItemClick}
                                                />
                                                <Menu.Item
                                                    name='Paediatric First Aid'
                                                    as={Link}
                                                    to='/compliance/paediatric-first-aid'
                                                    active={activeItem === 'Paediatric First Aid'}
                                                    onClick={this.handleItemClick}
                                                />
                                                <Menu.Item
                                                    name='Activity First Aid'
                                                    as={Link}
                                                    to='/compliance/activity-first-aid'
                                                    active={activeItem === 'Activity First Aid'}
                                                    onClick={this.handleItemClick}
                                                />
                                                <Menu.Item
                                                    name='Junior and Bespoke First Aid'
                                                    as={Link}
                                                    to='/compliance/bespoke-first-aid'
                                                    active={activeItem === 'Junior and Bespoke First Aid'}
                                                    onClick={this.handleItemClick}
                                                />
                                                <Menu.Item
                                                    name='Anaphylaxis Management'
                                                    as={Link}
                                                    to='/compliance/anaphylaxis-management'
                                                    active={activeItem === 'Anaphylaxis Management'}
                                                    onClick={this.handleItemClick}
                                                />
                                                <Menu.Item
                                                    name='Catastrophic Bleeds'
                                                    as={Link}
                                                    to='/compliance/catastrophic-bleed-management'
                                                    active={activeItem === 'Catastrophic Bleeds'}
                                                    onClick={this.handleItemClick}
                                                />
                                                <Menu.Item
                                                    name='Health and Safety'
                                                    as={Link}
                                                    to='/compliance/health-and-safety'
                                                    active={activeItem === 'Health and Safety'}
                                                    onClick={this.handleItemClick}
                                                />
                                                <Menu.Item
                                                    name='Mental Health First Aid'
                                                    as={Link}
                                                    to='/compliance/mental-health-first-aid'
                                                    active={activeItem === 'Mental Health First Aid'}
                                                    onClick={this.handleItemClick}
                                                />
                                                <Menu.Item
                                                    name='Oxygen Therapy'
                                                    as={Link}
                                                    to='/compliance/oxygen-therapy'
                                                    active={activeItem === 'Oxygen Therapy'}
                                                    onClick={this.handleItemClick}
                                                />
                                                <Menu.Item
                                                    name='Safe Guarding'
                                                    as={Link}
                                                    to='/compliance/safe-guarding'
                                                    active={activeItem === 'links'}
                                                    onClick={this.handleItemClick}
                                                />
                                            </Menu>
                                        </Sticky>
                                    </Rail>
                                </Ref>
                                <Segment style={{ padding: '3em', marginBottom: '1em' }}>
                                    <Switch>
                                        <Route exact path="/compliance" component={ComplianceHome} />
                                        <Route path="/compliance/first-aid-at-work" component={FirstAidAtWork} />
                                        <Route path="/compliance/bls-aed" component={BlsAed} />
                                        <Route path="/compliance/paediatric-first-aid" component={PaediatricFirstAid} />
                                        <Route path="/compliance/activity-first-aid" component={ActivityFirstAid} />
                                        <Route path="/compliance/bespoke-first-aid" component={BespokeFirstAid} />
                                        <Route path="/compliance/anaphylaxis-management" component={AnaphylaxisManagement} />
                                        <Route path="/compliance/catastrophic-bleed-management" component={CatastrophicBleedManagement} />
                                        <Route path="/compliance/health-and-safety" component={HealthAndSafety} />
                                        <Route path="/compliance/fire-safety" component={FireSafety} />
                                        <Route path="/compliance/food-safety" component={FoodSafety} />
                                        <Route path="/compliance/mental-health-first-aid" component={MentalHealthFirstAid} />
                                        <Route path="/compliance/oxygen-therapy" component={OxygenTherapy} />
                                        <Route path="/compliance/safe-guarding" component={SafeGuarding} />
                                    </Switch>
                                </Segment>
                            </Grid.Column>
                        </Grid>
                    </Responsive>
                </Router>
            </>
        )
    }
}

// -- Activity First Aid
// -- Bespoke First Aid & Junior First Aid

// First Aid At Work
// -- Emergency First Aid
// -- First Aid at Work Requalification

// Paediatric First Aid
// -- Emergency Paediatric First Aid

// Basic Life Support
// -- BLS AED
// -- CPR BLS AED

// Health & Safety
// -- Fire Safety
// -- Manual Handling

// Catastrophic Bleeds

// Oxygen Therapy

// Safe Guarding