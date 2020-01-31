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
				<NavBar path={this.props.location.pathname} />
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
                                >
                                    <Menu.Item name='Compliance Home' as={Link} to='/compliance' />
                                    {
                                        linkNames.map((item) => (
                                            <Menu.Item
                                                name={item}
                                                as={Link}
                                                to={`/compliance/${item.replace(/\s+/g, '-')}`}
                                            />
                                        ))
                                    }
                                </Sidebar>
                                <Sidebar.Pusher dimmed={sidebarOpened}>
                                    <Segment
                                        vertical
                                        textAlign='center'
                                        style={{ padding: '1em 0em', backgroundColor: 'white' }}
                                    >
                                        <Container>
                                            <Menu borderless secondary size='large'>
                                                <Button 
                                                    inverted 
                                                    color='blue' 
                                                    size='huge' 
                                                    onClick={this.handleToggle}
                                                >
                                                    <Icon name='sidebar' size='small'/>
                                                    <div style={{ display: 'inline-block', fontSize: '1em' }}>COMPLIANCE</div>
                                                </Button>
                                            </Menu>
                                        </Container>
                                        <RouterSection />
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

const RouterSection = () => (
    <Segment style={{ padding: '3em', margin: '.8em 0 1em 0' }}>
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
)