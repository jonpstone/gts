import React from 'react'
import { Link } from 'react-router-dom'
import { Segment, Container, List, Grid } from 'semantic-ui-react'
import NavBar from '../layouts/Header'

export default class SiteMap extends React.Component {

	componentDidMount() { window.scrollTo(0, 0) }

	render() {
		return(
			<>
				<NavBar path={this.props.location.pathname}/>
                <Segment style={{ padding: '7em', marginBottom: '4em', border: 'none' }} vertical>
                    <Container text>
                        <Grid columns='equal' stackable>
                            <Grid.Row>
                                <Grid.Column>
                                        <List>
                                            <List.Item>
                                                <List.Icon name='home' />
                                                <List.Content>
                                                    <List.Header as={Link} to='/'>Home</List.Header>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Icon name='globe' />
                                                <List.Content>
                                                    <List.Header as={Link} to='/organisation-security'>
                                                        Organisation Security
                                                    </List.Header>
                                                    <List.List>
                                                        <List.Item>
                                                            <List.Icon name='caret right' />
                                                            <List.Content>
                                                                <List.Header as={Link} to='/organisation-security/Security-Audit'>
                                                                    Security Audit
                                                                </List.Header>
                                                            </List.Content>
                                                        </List.Item>
                                                        <List.Item>
                                                            <List.Icon name='caret right' />
                                                            <List.Content>
                                                                <List.Header as={Link} to='/organisation-security/Lockdown-Consultancy'>
                                                                    Lockdown Consultancy
                                                                </List.Header>
                                                            </List.Content>
                                                        </List.Item>
                                                        <List.Item>
                                                            <List.Icon name='caret right' />
                                                            <List.Content>
                                                                <List.Header as={Link} to='/organisation-security/SICM'>
                                                                    Serious Incident Control Measures
                                                                </List.Header>
                                                            </List.Content>
                                                        </List.Item>
                                                    </List.List>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Icon name='globe' />
                                                <List.Content>
                                                    <List.Header as={Link} to='/forces-covenant'>Forces Support</List.Header>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Icon name='globe' />
                                                <List.Content>
                                                    <List.Header as={Link} to='/team-building'>Team Building</List.Header>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Icon name='globe' />
                                                <List.Content>
                                                    <List.Header as={Link} to='/policy'>Policy</List.Header>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Icon name='globe' />
                                                <List.Content>
                                                    <List.Header as={Link} to='/about'>About</List.Header>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Icon name='globe' />
                                                <List.Content>
                                                    <List.Header as={Link} to='/contact'>Contact</List.Header>
                                                </List.Content>
                                            </List.Item>
                                        </List>
                                </Grid.Column>
                                <Grid.Column>
                                    <List>
                                        <List.Item>
                                            <List.Icon name='globe' />
                                            <List.Content>
                                                <List.Header as={Link} to='/compliance'>
                                                    Compliance
                                                </List.Header>
                                                <List.List>
                                                    <List.Item>
                                                        <List.Icon name='caret right' />
                                                        <List.Content>
                                                            <List.Header as={Link} to='/compliance/Health-And-Safety'>
                                                                Health & Safety 
                                                            </List.Header>
                                                            <List.Description>
                                                                Manual Handling<br/>
                                                                Fire Safety
                                                            </List.Description>
                                                        </List.Content>
                                                    </List.Item>
                                                    <List.Item>
                                                        <List.Icon name='caret right' />
                                                        <List.Content>
                                                            <List.Header as={Link} to='/compliance/First-Aid-At-Work'>
                                                                First Aid At Work
                                                            </List.Header>
                                                            <List.Description>
                                                                Emergency First Aid At Work<br/>
                                                                First Aid At Work Requalification
                                                            </List.Description>
                                                        </List.Content>
                                                    </List.Item>
                                                    <List.Item>
                                                        <List.Icon name='caret right' />
                                                        <List.Content>
                                                            <List.Header as={Link} to='/compliance/Basic-Life-Support-with-AED'>
                                                                Basic Life Support with AED
                                                            </List.Header>
                                                            <List.Description>
                                                                CPR with Basic Life Support & AED
                                                            </List.Description>
                                                        </List.Content>
                                                    </List.Item>
                                                    <List.Item>
                                                        <List.Icon name='caret right' />
                                                        <List.Content>
                                                            <List.Header as={Link} to='/compliance/Paediatric-First-Aid'>
                                                                Paediatric First Aid
                                                            </List.Header>
                                                            <List.Description>
                                                                Emergency Paediatric First Aid
                                                            </List.Description>
                                                        </List.Content>
                                                    </List.Item>
                                                    <List.Item>
                                                        <List.Icon name='caret right' />
                                                        <List.Content>
                                                            <List.Header as={Link} to='/compliance/Activity-First-Aid'>
                                                                Activity First Aid
                                                            </List.Header>
                                                        </List.Content>
                                                    </List.Item>
                                                    <List.Item>
                                                        <List.Icon name='caret right' />
                                                        <List.Content>
                                                            <List.Header as={Link} to='/compliance/Junior-And-Bespoke-First-Aid'>
                                                                Junior & Bespoke First Aid
                                                            </List.Header>
                                                        </List.Content>
                                                    </List.Item>
                                                    <List.Item>
                                                        <List.Icon name='caret right' />
                                                        <List.Content>
                                                            <List.Header as={Link} to='/compliance/Mental-Health-First-Aid'>
                                                                Mental Health First Aid
                                                            </List.Header>
                                                        </List.Content>
                                                    </List.Item>
                                                    <List.Item>
                                                        <List.Icon name='caret right' />
                                                        <List.Content>
                                                            <List.Header as={Link} to='/compliance/Anaphylaxis-Management'>
                                                                Anaphylaxis Management
                                                            </List.Header>
                                                        </List.Content>
                                                    </List.Item>
                                                    <List.Item>
                                                        <List.Icon name='caret right' />
                                                        <List.Content>
                                                            <List.Header as={Link} to='/compliance/Catastrophic-Bleeds'>
                                                                Catastrophic Bleed Management
                                                            </List.Header>
                                                        </List.Content>
                                                    </List.Item>
                                                    <List.Item>
                                                        <List.Icon name='caret right' />
                                                        <List.Content>
                                                            <List.Header as={Link} to='/compliance/Food-Safety'>
                                                                Food Safety & Good Nutrition Training
                                                            </List.Header>
                                                        </List.Content>
                                                    </List.Item>
                                                    <List.Item>
                                                        <List.Icon name='caret right' />
                                                        <List.Content>
                                                            <List.Header as={Link} to='/compliance/Safe-Guarding'>
                                                                Safe Guarding
                                                            </List.Header>
                                                        </List.Content>
                                                    </List.Item>
                                                </List.List>
                                            </List.Content>
                                        </List.Item>
                                    </List>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
				</Segment>
			</>
		);
	}
}