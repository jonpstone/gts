import React, { createRef } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Menu, Responsive, Header, Grid, Segment, Sticky, Ref, Rail, Button, Icon } from 'semantic-ui-react'
import { SICM, LockdownConsultancy, SecurityAudit, OrgSecHome } from '../components/orgSec'
import Back2Top from 'react-back2top'
import NavBar from '../components/layouts/Header'

export default class Compliance extends React.Component {
    state = { activeItem: null }

    contextRef = createRef()
  
    handleItemClick = (event, { name }) => this.setState({ activeItem: name })
        
    render() {
        const { activeItem } = this.state
        const linkNames = ['Lockdown Consultancy', 'Security Audit', 'SICM']

        return (
            <>
                <NavBar/>
                <Grid
                    borderless 
                    id='orgSecHero'
                    textAlign='center'
                    style={{ margin: '1em 0 1em 0' }}
                >
                    <Grid.Row>
                        <Header inverted as='h1' style={{ marginTop: '.4em', fontSize: '5em' }}>
                            ORGANISATION SECURITY
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
                                                    name='Organisation Security'
                                                    as={Link}
                                                    to='/organisation-security'
                                                    active={activeItem === 'Organisation Security'}
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
                                <Segment style={{ padding: '3em', marginBottom: '1em' }}>
                                    <Switch>
                                        <Route exact path="/organisation-security" component={OrgSecHome} />
                                        <Route path="/organisation-security/Lockdown-Consultancy" component={LockdownConsultancy} />
                                        <Route path="/organisation-security/Security-Audit" component={SecurityAudit} />
                                        <Route path="/organisation-security/SICM" component={SICM} />
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