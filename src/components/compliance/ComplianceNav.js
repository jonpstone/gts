import React, { createRef } from 'react'
import { Menu, Responsive, Header, Grid, Segment, Sticky, Ref, Rail, Button, Icon, Container } from 'semantic-ui-react'
import Back2Top from 'react-back2top';
import NavBar from '../layouts/Header'
import {
    ActivityFirstAid,
    AnaphylaxisManagement,
    BespokeFirstAid,
    BlsAed,
    CprBlsAed,
    CatastrophicBleedManagement,
    FireSafety,
    FirstAidAtWork,
    FoodSafety,
    HealthAndSafety,
    HealthAndSafetyFirstAid,
    JuniorFirstAid,
    ManualHandling,
    MentalHealthFirstAid,
    OxygenTherapy,
    PaediatricFirstAid,
    SafeGuarding,
    ComplianceHome,
  } from '.'

export default class Compliance extends React.Component {
    state = { activeItem: 'Compliance', activeComponent: <ComplianceHome/> }

    contextRef = createRef()
  
    handleItemClick = (e, { name }) => 
        this.setState({ 
            activeItem: name,
            activeComponent: this.setComponent(name)
        })

    setComponent = (name) => {
        switch (name) {
            case "Compliance":
                return <ComplianceHome/>
            case "First Aid At Work":
                return <FirstAidAtWork/>
            case "Activity First Aid":
                return <ActivityFirstAid/>
            case "Anaphylaxis Management":
                return <AnaphylaxisManagement/>
            case "Bespoke First Aid":
                return <BespokeFirstAid/>
            case "BLS & AED":
                return <BlsAed/>
            case "CPR, BLS & AED":
                return <CprBlsAed/>
            case "Catastrophic Bleeds":
                return <CatastrophicBleedManagement/>
            case "Fire Safety":
                return <FireSafety/>
            case "Food Safety":
                return <FoodSafety/>
            case "Health & Safety":
                return <HealthAndSafety/>
            case "Health & Safety First Aid":
                return <HealthAndSafetyFirstAid/>
            case "Junior First Aid":
                return <JuniorFirstAid/>
            case "Manual Handling":
                return <ManualHandling/>
            case "Mental Health First Aid":
                return <MentalHealthFirstAid/>
            case "Oxygen Therapy":
                return <OxygenTherapy/>
            case "Paediatric First Aid":
                return <PaediatricFirstAid/>
            case "Safe Guarding":
                return <SafeGuarding/>
            default:
                return <ComplianceHome/>;
        }
    }
        
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
                <Responsive>
                    <Grid centered style={{ marginBottom: '.1em' }}>
                        <Grid.Column borderless stretched width={10}>
                            <Ref innerRef={this.contextRef}>
                                <Rail position='right'>
                                    <Sticky context={this.contextRef} offset={100} styleElement={{ marginTop: '2.1em'}}>
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
                                                active={activeItem === 'Compliance'}
                                                onClick={this.handleItemClick}
                                            />
                                            <Menu.Item
                                                name='First Aid At Work'
                                                active={activeItem === 'First Aid At Work'}
                                                onClick={this.handleItemClick}
                                            />
                                            <Menu.Item
                                                name='Paediatric First Aid'
                                                active={activeItem === 'Paediatric First Aid'}
                                                onClick={this.handleItemClick}
                                            />
                                            <Menu.Item
                                                name='Activity First Aid'
                                                active={activeItem === 'Activity First Aid'}
                                                onClick={this.handleItemClick}
                                            />
                                            <Menu.Item
                                                name='Anaphylaxis Management'
                                                active={activeItem === 'Anaphylaxis Management'}
                                                onClick={this.handleItemClick}
                                            />
                                            <Menu.Item
                                                name='Bespoke First Aid'
                                                active={activeItem === 'Bespoke First Aid'}
                                                onClick={this.handleItemClick}
                                            />
                                            <Menu.Item
                                                name='BLS & AED'
                                                active={activeItem === 'BLS & AED'}
                                                onClick={this.handleItemClick}
                                            />
                                            <Menu.Item
                                                name='CPR, BLS & AED'
                                                active={activeItem === 'CPR, BLS & AED'}
                                                onClick={this.handleItemClick}
                                            />
                                            <Menu.Item
                                                name='Catastrophic Bleeds'
                                                active={activeItem === 'Catastrophic Bleed Management'}
                                                onClick={this.handleItemClick}
                                            />
                                            <Menu.Item
                                                name='Fire Safety'
                                                active={activeItem === 'Fire Safety'}
                                                onClick={this.handleItemClick}
                                            />
                                            <Menu.Item
                                                name='Health & Safety'
                                                active={activeItem === 'Health & Safety'}
                                                onClick={this.handleItemClick}
                                            />
                                            <Menu.Item
                                                name='Health & Safety First Aid'
                                                active={activeItem === 'Health & Safety First Aid'}
                                                onClick={this.handleItemClick}
                                            />
                                            <Menu.Item
                                                name='Junior First Aid'
                                                active={activeItem === 'Junior First Aid'}
                                                onClick={this.handleItemClick}
                                            />
                                            <Menu.Item
                                                name='Manual Handling'
                                                active={activeItem === 'Manual Handling'}
                                                onClick={this.handleItemClick}
                                            />
                                            <Menu.Item
                                                name='Mental Health First Aid'
                                                active={activeItem === 'Mental Health First Aid'}
                                                onClick={this.handleItemClick}
                                            />
                                            <Menu.Item
                                                name='Oxygen Therapy'
                                                active={activeItem === 'Oxygen Therapy'}
                                                onClick={this.handleItemClick}
                                            />
                                            <Menu.Item
                                                name='Safe Guarding'
                                                active={activeItem === 'links'}
                                                onClick={this.handleItemClick}
                                            />
                                        </Menu>
                                    </Sticky>
                                </Rail>
                            </Ref>
                            <Segment style={{ padding: '3em', marginBottom: '1em' }}>
                                {activeComponent}
                            </Segment>
                        </Grid.Column>
                    </Grid>
                </Responsive>
            </>
        )
    }
}

// First Aid??????????????????????
// -- Activity First Aid
// -- Bespoke First Aid
// -- Junior First Aid

// First Aid At Work
// -- Emergency First Aid
// -- First Aid at Work Requalification

// Paediatric First Aid
// -- Emergency Paediatric First Aid

// Basic Life Support
// -- BLS AED
// -- CPR BLS AED

// Health & Safety
// -- Health & Safety First Aid
// -- Manual Handling

// Catastrophic Bleeds

// Fire Safety

// Oxygen Therapy

// Safe Guarding