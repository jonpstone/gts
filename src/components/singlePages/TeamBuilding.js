import React from 'react'
import { 
	Container, 
	Header, 
	Grid, 
	Segment, 
	Button, 
	Icon, 
	Menu, 
	Sidebar, 
	Responsive, 
	Image, 
	Visibility, 
	List 
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { MobileContainer } from './Home'
import Fade from 'react-reveal/Fade'
import ForcesCoursesCarousel from '../NonPageComponents/ForcesCoursesCarousel'

const getWidth = () => {
	const isSSR = typeof window === 'undefined'
	return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class ForceCovenant extends React.Component {
	state = {}

	hideFixedMenu = () => { this.setState({ fixed: false }) }
	showFixedMenu = () => { this.setState({ fixed: true }) }

	// componentDidMount() { window.scrollTo(0, 0) }

	render() {
		const { fixed } = this.state

		return (
			<Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
				<Visibility
					once={false}
					onBottomPassed={this.showFixedMenu}
					onBottomPassedReverse={this.hideFixedMenu}
				>
					<Segment
						id='teamBuildingHero'
						inverted
						textAlign='center'
						style={{ padding: '1em 0em' }}
						vertical
					>
						<Menu
							id='headerHome'
							borderless
							fixed={!fixed ? null : 'top'}
							inverted={!fixed}
							size='large'
							style={!fixed ? {
								backgroundColor: 'transparent', 
								border: 'none', 
								outline: 'none',
								padding: '.2em 2.4em'
							} : { padding: '.2em 2.4em'}}
						>
							<Menu.Menu>
								<Image
									id='gtsLogoHeader'
									as={Link} to='/'
									size='mini'
									src={!fixed ? '/images/GTS1.png' : '/images/GTS.png'}
									style={{ outline: 'none' }}

								/>
								<Menu.Item 
									className='menuPhoneNumbers' 
									inverted={!fixed}
								>
									Call Us Today:&nbsp; &nbsp;
									<a 
										id='telOne' 
										style={fixed ? { color: 'black', outline: 'none' } : { outline: 'none' }} 
										href='tel:07904014772'
									>
										07904 014772
									</a>
									&nbsp; | &nbsp; 
									<a 
										id='telTwo' 
										style={fixed ? { color: 'black', outline: 'none' } : { outline: 'none' }} 
										href='tel:01926825682'
									>
										01926 825682
									</a>
								</Menu.Item>
							</Menu.Menu>
							<Menu.Menu position='right'>
								<Menu.Item as={Link} to="/compliance" className='menuItems'>Compliance</Menu.Item>
								<Menu.Item as={Link} to="/organisation-security" className='menuItems'>Organisation Security</Menu.Item>
								<Menu.Item as={Link} to="/team-building" className='menuItems'>Team Building</Menu.Item>
								<Menu.Item as={Link} to="/forces-covenant" className='menuItems'>Forces Support</Menu.Item>
							</Menu.Menu>
						</Menu>
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
										content='TEAM BUILDING & EVENTS'
										inverted
										style={{
											fontSize: '4em',
											fontWeight: 'normal',
											marginTop: '18%'
										}}
									/>
								</Grid.Row>
								<Grid.Row>				
									<Grid.Column>
										<Header as='h2' inverted style={{color: '#DAF7A6'}}>
											OUR EXPERT EVENT MANAGER FRED BOUCHER IS SECOND TO NONE<br/>
											Your staff will be energised and motivated to achieve results 
										</Header>
									</Grid.Column>
								</Grid.Row>
							</Grid>
							<a href='#finish'>
								<Button inverted size='huge' className='scrollBottom' style={{ marginBottom: '8%' }}>
									&nbsp; Learn More &nbsp;
									<Icon name='angle down'/>
								</Button>
							</a>
						</Container>
					</Segment>
				</Visibility>
					<div id='finish'></div>
						<Fade bottom>
							<Grid borderless stackable verticalAlign='top'>
								<Grid.Row style={{ margin: '5em 0 1em 0' }}>
									<Header as='h3' icon textAlign='center' style={{ fontSize: '2em' }}>
										WOODLAND SURVIVAL COURSE
									</Header>
								</Grid.Row>
								<Grid.Row>
									<Grid.Column
										id='teamBuildingBullets'
										floated='left' 
										width={8} 
										style={{ 
											padding: '2em 4em', 
											marginBottom: '1.5em', 
											color: 'white', 
											fontSize: '1.33em'
										}}
									>
										<p>
											Bring your team together in this exciting outdoor experience, they will 
											develop new skills and learn dynamic ways to work together to solve any task
										</p>
											<List bulleted items={[
												'Building Shelter',
												'Making Fire',
												'Purifying Water',
												'Hunting Food',
												'Navigation',
												'Team Command Tasks',
												'Assault Courses (optional)',
												'Problem Solving'
											]}
										/>
									</Grid.Column>
									<Grid.Column id='paraSurvival' floated='right' width={8} style={{ padding: '2em 4em' }}>
										<p style={{ fontSize: '1.33em' }}>
											Our new Survival Skills and Command Tasks, run by our survival expert Fred 
											Boucher will bring your teams together to problem solve outside of the 
											office environment.
										</p>
										<p style={{ fontSize: '1.33em' }}>
											These can be run over a few hours or over night. A fun, active, action packed 
											experience awaits all that are courageous enough to take on this opportunity. A 
											tried and tested technique of developing a groups cohesion and communication 
											abilities are group activities both physical and mental.
										</p>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Fade>
					<Fade bottom>
						<Grid divided stackable verticalAlign='top'>
							<Grid.Row style={{ margin: '2em 0 1em 0' }}>
								<Header as='h3' icon textAlign='center' style={{ fontSize: '2em' }}>
									CORPORATE TEAM BUILDING EVENTS 
								</Header>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column
									id='faq' 
									floated='right' 
									width={8} 
									style={{ padding: '2em 4em' }}
								>
									<Header as='h1'>
										Frequently Asked Questions
									</Header><br/>
									<p style={{ fontSize: '1.33em' }}>
										<b>Do we need to travel or do you come to us?</b><br/>
										You can have an event run at your location or we can provide a suitable venue.<br/><br/>
										<b>How does pricing work?</b><br/>
										You can pay per head or for an overall booking. We will build an event to meet your needs.<br/><br/>
										<b>Ethos?</b><br/>
										You can incorporate the event into your company's training package to suit your message.<br/><br/>
									</p>
								</Grid.Column>
								<Grid.Column
									id='corporateTeamBuildingBullets'
									floated='left' 
									width={8} 
									style={{
										padding: '2em 4em', 
										color: 'white', 
										fontSize: '1.33em'
									}}
								>
									<p>
										Tailored to meet your bespoke needs for all group sizes and abilities. Our team 
										will build you the package to motivate and inspire your staff. You tell us what 
										you want to achieve and we will do the rest.
									</p>
										<List bulleted items={[
											'The Maze',
											'Who did it',
											'Army challenge',
											'The Den',
											'Many, many More' 			
										]}
									/>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Fade>
			</Responsive>
		)
	}
}

const ResponsiveContainer = () => (
	<>
		<ForceCovenant />
		<MobileContainer />
	</>
)

export default ResponsiveContainer