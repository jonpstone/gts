import React, { createRef } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Menu, Responsive, Header, Grid, Segment, Sticky, Ref, Rail, Button, Icon, Sidebar, Container } from 'semantic-ui-react'
import { SICM, LockdownConsultancy, SecurityAudit, OrgSecHome } from '../components/orgSec'
import Back2Top from 'react-back2top'
import NavBar from '../components/layouts/Header'
import MobileNavBar from '../components/layouts/MobileHeader'

export default class OrgSec extends React.Component {

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

class Body extends React.PureComponent {
    state = { activeItem: null }
    contextRef = createRef()

    componentDidMount() {
        let strippedPath = this.stripPathToString(this.props.path)
        if (this.state.activeItem !== strippedPath && (strippedPath === 'organisation-security')) {
            this.setState({ 
                activeItem: 'Operational Security'
            })
        }
        else if (this.state.activeItem !== strippedPath) {
            this.setState({ 
                activeItem: strippedPath
            })
        }
    }

    handleItemClick = (event, { name }) => { this.setState({ activeItem: name })}
	handleSidebarHide = () => this.setState({ sidebarOpened: false })
	handleToggle = () => this.setState({ sidebarOpened: true })

    stripPathToString = (path) => {
        var newPath = path.replace(/\\|\//g,' ').split(' ')
        return newPath[2] ? newPath[2].replace("-"," ") : newPath[1]
    }

    render() {
        const { activeItem, sidebarOpened  } = this.state
        const { mobile } = this.props
        const linkNames = ['Security Audit', 'Lockdown Consultancy', 'SICM']

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
                                                name='Operational Security'
                                                as={Link}
                                                to='/organisation-security'
                                                active={activeItem === 'Operational Security'}
                                                onClick={this.handleItemClick}
                                            />
                                            {
                                                linkNames.map((item) => (
                                                    <Menu.Item
                                                        id='menuItem'
                                                        style={{ outline: 'none' }}
                                                        name={item}
                                                        as={Link}
                                                        to={`/organisation-security/${item.replace(/\s+/g, '-')}`}
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
                                <RouterSection />
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
                                        name='Operational Security'
                                        as={Link} 
                                        to='/organisation-security'
                                        onClick={this.handleSidebarHide}
                                    />
                                    {
                                        linkNames.map((item) => (
                                            <Menu.Item
                                                name={item}
                                                as={Link}
                                                to={`/organisation-security/${item.replace(/\s+/g, '-')}`}
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
            <Route exact path="/organisation-security" component={OrgSecHome}/>
            <Route path="/organisation-security/Security-Audit" component={SecurityAudit} />
            <Route path="/organisation-security/Lockdown-Consultancy" render={() => <LockdownConsultancy mobile={props.mobile} />} />
            <Route path="/organisation-security/SICM" render={() => <SICM mobile={props.mobile} />} />
        </Switch>
    </Segment>
)