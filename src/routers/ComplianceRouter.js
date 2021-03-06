import React, { createRef } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Menu, Grid, Segment, Sticky, Ref, Rail, Button, Icon, Responsive, Sidebar, Container } from 'semantic-ui-react'
import Back2Top from 'react-back2top'
import NavBar from '../components/layouts/Header'
import MobileNavBar from '../components/layouts/MobileHeader'
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

    componentDidMount() { window.scrollTo(0, 0) }

    render() {
        const { pathname } = this.props.location

        return (
            <>
                <NavBar path={pathname} body={<Body path={pathname}/>}/>
                <MobileNavBar body={<Body path={pathname} mobile/>}/>
            </>
        )
    }
}

class Body extends React.Component {
    state = { activeItem: null }
    contextRef = createRef()

    componentDidMount() {
        let strippedPath = this.stripPathToString(this.props.path)
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

    handleItemClick = (event, { name }) => { this.setState({ activeItem: name })}
	handleSidebarHide = () => this.setState({ sidebarOpened: false })
	handleToggle = () => this.setState({ sidebarOpened: true })

    render() {
        const { activeItem, sidebarOpened } = this.state

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
                <Router>
                    <Grid centered style={{ margin: '1em 0 .1em 0' }}>
                        <Grid.Column borderless stretched computer={16} largeScreen={7} widescreen={10}>
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

                            <Responsive minWidth={1200}>
                                <RouterSection/>
                            </Responsive>

                            <Responsive	as={Sidebar.Pushable} maxWidth={1199}>
                                <Sidebar
                                    as={Menu}
                                    animation='push'
                                    inverted
                                    onHide={this.handleSidebarHide}
                                    vertical
                                    visible={sidebarOpened}
                                    direction='right'
                                >
                                    <Menu.Item 
                                        name='Compliance Home' 
                                        as={Link} 
                                        to='/compliance' 
                                        onClick={this.handleSidebarHide}
                                    />
                                    {
                                        linkNames.map((item) => (
                                            <Menu.Item
                                                name={item}
                                                as={Link}
                                                to={`/compliance/${item.replace(/\s+/g, '-')}`}
                                                onClick={this.handleSidebarHide}
                                            />
                                        ))
                                    }
                                </Sidebar>
                                <Sidebar.Pusher>
                                    <Segment
                                        vertical
                                        textAlign='center'
                                        style={{ padding: '1em 0em', backgroundColor: 'white' }}
                                    >
                                            <Container>
                                                <Button 
                                                    inverted 
                                                    color='blue' 
                                                    size='huge' 
                                                    onClick={this.handleToggle}
                                                >
                                                    <Icon name='sidebar' size='small'/>
                                                    <div style={{ display: 'inline-block', fontSize: '.8em' }}>COMPLIANCE</div>
                                                </Button>
                                            </Container>
                                        <RouterSection mobile/>
                                    </Segment>
                                </Sidebar.Pusher>
                            </Responsive>
                        </Grid.Column>
                    </Grid>
                </Router>
            </>
        )
    }
}

const RouterSection = (props) => (
    <Segment style={props.mobile ? 
        { padding: '3em .5em', margin: '1em 0 1em 0' } : 
        { padding: '3em', margin: '.8em 0 1em 0' }}
    >
        <Switch>
            <Route exact path="/compliance" render={() => <ComplianceHome mobile={props.mobile} />} />
            <Route path="/compliance/Health-And-Safety" render={() => <HealthAndSafety mobile={props.mobile} />} />
            <Route path="/compliance/First-Aid-At-Work" render={() => <FirstAidAtWork mobile={props.mobile} />} />
            <Route path="/compliance/Basic-Life-Support-with-AED" render={() => <BlsAed mobile={props.mobile} />} />
            <Route path="/compliance/Paediatric-First-Aid" render={() => <PaediatricFirstAid mobile={props.mobile} />} />
            <Route path="/compliance/Activity-First-Aid" render={() => <ActivityFirstAid mobile={props.mobile} />} />
            <Route path="/compliance/Junior-And-Bespoke-First-Aid" render={() => <BespokeFirstAid mobile={props.mobile} />} />
            <Route path="/compliance/Anaphylaxis-Management" render={() => <AnaphylaxisManagement mobile={props.mobile} />} />
            <Route path="/compliance/Catastrophic-Bleeds" render={() => <CatastrophicBleedManagement mobile={props.mobile} />} />
            <Route path="/compliance/Food-Safety" render={() => <FoodSafety mobile={props.mobile} />} />
            <Route path="/compliance/Mental-Health-First-Aid" render={() => <MentalHealthFirstAid mobile={props.mobile} />} />
            <Route path="/compliance/Safe-Guarding" render={() => <SafeGuarding mobile={props.mobile} />} />
        </Switch>
    </Segment>
)