import React from 'react'
import { Container, Header, Grid, Segment, Button, Icon, Menu, Sidebar, Responsive, Image, Visibility } from 'semantic-ui-react'
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
					<Fade bottom>
					<div id='finish'></div>
						<Segment style={{ padding: '4em 8em 8em 8em' }} vertical>
							<Grid divided container stackable verticalAlign='top'>
								<Grid.Row style={{ margin: '1em 0 2em 0' }}>
									<Header as='h3' icon textAlign='center' style={{ fontSize: '2em' }}>
										WOODLAND SURVIVAL COURSE
									</Header>
								</Grid.Row>
								<Grid.Row>
									<Grid.Column 
										floated='left' 
										width={8} 
										style={{paddingRight: '5em', marginBottom: '1.5em'}}
									>
										<Header as='h3' style={{ fontSize: '2em' }}>
											Serving, Retired, Dependent?
										</Header>
										<p style={{ fontSize: '1.33em' }}>
											Whether you are leaving the Armed Forces or your direct family would like to 
											increase their employability, Golbourn Training Solutions are passionate in 
											helping our Armed Forces and their families.
										</p>
										<p style={{ fontSize: '1.33em' }}>
											We work with serving personnel (Regular and Reserves), Veterans and direct 
											family members.
										</p>
									</Grid.Column>
									<Grid.Column floated='right' width={8} style={{paddingLeft: '5em'}}>
										<Header as='h3' style={{ fontSize: '2em' }}>
											Forces Discount
										</Header>
										<p style={{ fontSize: '1.33em' }}>
											All Armed Forces can access any one of our public courses at a discounted rate 
											or can attend one of our specialised MOD Courses where we cover multiple 
											subjects over 3 days.  We run courses from Poole, Aldershot, Coventry, 
											Catterick and Lossiemouth. We can run courses to meet Unit needs at Unit or 
											from our locations. 
										</p>
									</Grid.Column>
								</Grid.Row>
								<Grid.Row>
									<Grid.Column 
										floated='left' 
										width={8} 
										style={{paddingRight: '5em', marginBottom: '1.5em'}}
									>
										<Header as='h3' style={{ fontSize: '2em' }}>
											Serving, Retired, Dependent?
										</Header>
										<p style={{ fontSize: '1.33em' }}>
											Whether you are leaving the Armed Forces or your direct family would like to 
											increase their employability, Golbourn Training Solutions are passionate in 
											helping our Armed Forces and their families.
										</p>
										<p style={{ fontSize: '1.33em' }}>
											We work with serving personnel (Regular and Reserves), Veterans and direct 
											family members.
										</p>
									</Grid.Column>
									<Grid.Column floated='right' width={8} style={{paddingLeft: '5em'}}>
										<Header as='h3' style={{ fontSize: '2em' }}>
											Forces Discount
										</Header>
										<p style={{ fontSize: '1.33em' }}>
											All Armed Forces can access any one of our public courses at a discounted rate 
											or can attend one of our specialised MOD Courses where we cover multiple 
											subjects over 3 days.  We run courses from Poole, Aldershot, Coventry, 
											Catterick and Lossiemouth. We can run courses to meet Unit needs at Unit or 
											from our locations. 
										</p>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Segment>
					</Fade>
					<Fade bottom>
						<Segment style={{ padding: '0' }} vertical borderless>
							<Grid stackable columns='equal'>
								<Grid.Row style={{ margin: '0', padding: '0' }}>
									<Grid.Column style={{ backgroundColor: '#607e6d', padding: '5em 10em 5em 15em' }}>
										<Header 
											inverted 
											as='h3' 
											style={{ fontSize: '2em', color: 'white' }}
										>
											GTS MOD 3 Day Bundle Course Offers<br/><br/>
										</Header>
										<ForcesCoursesCarousel/>
									</Grid.Column>
									<Grid.Column style={{ backgroundColor: '#6eb8ff', padding: '5em 0 0 0' }}>
										<Grid.Row>
											<Image centered src='/images/SLC.jpg' size='big' />
										</Grid.Row>
										<Grid.Row>
											<Image 
												centered 
												src='/images/forcesFamily.jpg' 
												size='massive' 
												style={{ margin: '0', padding: '0' }} 
											/>
										</Grid.Row>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Segment>
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