import React from 'react'
import { Container, Header, Grid, Segment, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import NavBar from '../../components/layouts/Header'

export default class ForceCovenant extends React.Component {
	state = {}

	hideFixedMenu = () => { this.setState({ fixed: false }) }
	showFixedMenu = () => { this.setState({ fixed: true }) }

	componentDidMount() { window.scrollTo(0, 0)	}

	render() {
		return (
			<>
				<NavBar/>
				<Segment
					id='forcesHero'
					inverted
					textAlign='center'
					vertical
					style={{ padding: '0'}}
				>
					<Container>
						<Grid
							stackable
							textAlign='center'
							columns='equal'
							style={{
								fontSize: '1.8em',
								fontWeight: 'normal',
								marginTop: '1.5em',
								marginBottom: '2em',
							}}
						>
							<Grid.Row>
								<Header
									as='h1'
									content='FORCES SUPPORT'
									inverted
									style={{
										fontSize: '4em',
										fontWeight: 'normal',
										marginTop: '35%'
									}}
								/>
							</Grid.Row>
							<Grid.Row>				
								<Grid.Column>
									<Header as='h2' inverted style={{color: '#FFC300'}}>
										Armed Forces Support - You can be ready for CIV DIV for as little as £125.00* 
									</Header>
								</Grid.Column>
							</Grid.Row>
						</Grid>
						<Button as={Link} to="/about" inverted size='huge' style={{ marginBottom: '8%' }}>
							&nbsp; Learn More &nbsp;
							<Icon name='angle down'/>
						</Button>
					</Container>
				</Segment>

			</>
		)
	}
}
