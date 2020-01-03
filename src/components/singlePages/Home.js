import React from 'react'
import { Link } from 'react-router-dom'
import CoursesCarousel from '../NonPageComponents/CoursesCarousel'
import Fade from 'react-reveal/Fade'
import {
	Button,
	Container,
	Grid,
	Header,
	Icon,
	Image,
	Menu,
	Responsive,
	Segment,
	Sidebar,
	Visibility,
} from 'semantic-ui-react'

const getWidth = () => {
	const isSSR = typeof window === 'undefined'
	return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const HomepageHeading = ({ mobile }) => (
	<Container>
		<Grid
			stackable
			textAlign='center'
			columns='equal'
			style={{
				fontSize: mobile ? '1em' : '1.8em',
				fontWeight: 'normal',
				marginTop: mobile ? '0.5em' : '1.5em',
				marginBottom: mobile ? '1em' : '2em',
			}}
		>
			<Grid.Row>
				<Image 
					src='/images/GTS1.png' 
					size='small'
					style={{ marginTop: mobile ? '1em' : '5%' }} 
					wrapped
				/>
			</Grid.Row>
			<Grid.Row>
				<Header
					as='h1'
					content='GOLBOURN TRAINING SOLUTIONS'
					inverted
					style={{
						fontSize: mobile ? '2em' : '4em',
						fontWeight: 'normal',
					}}
				/>
			</Grid.Row>
			<Grid.Row>				
				<Grid.Column>
					<Header as='h2' inverted style={{color: '#FFC300'}}>
						PROFESSIONAL
					</Header>
				</Grid.Column>
				<Grid.Column>
					<Header as='h2' inverted style={{color: '#DAF7A6'}}>
						AFFORDABLE
					</Header>
				</Grid.Column>
				<Grid.Column>
					<Header as='h2' inverted style={{color: 'white'}}>
						FLEXIBLE
					</Header>
				</Grid.Column>
			</Grid.Row>
		</Grid>
		<Button as={Link} to="/about" inverted size='huge' style={{ marginBottom: '8%' }}>
			Learn More
			<Icon name='angle right'/>
		</Button>
	</Container>
)

class DesktopContainer extends React.Component {
	state = {}

	hideFixedMenu = () => this.setState({ fixed: false })
	showFixedMenu = () => this.setState({ fixed: true })

	render() {
		const { children } = this.props
		const { fixed } = this.state

		return (
			<Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
				<Visibility
					once={false}
					onBottomPassed={this.showFixedMenu}
					onBottomPassedReverse={this.hideFixedMenu}
				>
					<Segment
						id='heroHome'
						inverted
						textAlign='center'
						vertical
					>
						<Menu
							borderless={!fixed}
							fixed={!fixed ? null : 'top'}
							inverted={!fixed}
							size='large'
							style={!fixed ? {
								backgroundColor: 'transparent', 
								border: 'none', 
								outline: 'none',
							} : null}
						> 
							<Menu.Menu>
								<Image
									id='gtsLogoHeader'
									as={Link} to='/'
									size='mini' 
									src='/images/GTS1.png'
								/>
							</Menu.Menu>
							<Menu.Menu position='right'>
								<Menu.Item as={Link} to="/compliance" className='menuItems'><strong>Compliance</strong></Menu.Item>
								<Menu.Item as={Link} to="/organisation-security" className='menuItems'><strong>Organisation Security</strong></Menu.Item>
								<Menu.Item as={Link} to="/team-building" className='menuItems'><strong>Team Building</strong></Menu.Item>
								<Menu.Item as={Link} to="/forces-covenant" className='menuItems'><strong>Forces Covenant</strong></Menu.Item>
								<Menu.Item as={Link} to="/public-courses" className='menuItems'><strong>Public Courses</strong></Menu.Item>
							</Menu.Menu>
						</Menu>
					<HomepageHeading/>
					</Segment>
				</Visibility>
				{children}
			</Responsive>
		)
	}
}

class MobileContainer extends React.Component {
	state = {}

	handleSidebarHide = () => this.setState({ sidebarOpened: false })
	handleToggle = () => this.setState({ sidebarOpened: true })

	render() {
		const { children } = this.props
		const { sidebarOpened } = this.state

		return (
			<Responsive
				as={Sidebar.Pushable}
				getWidth={getWidth}
				maxWidth={Responsive.onlyMobile.maxWidth}
			>
				<Sidebar
					as={Menu}
					animation='push'
					inverted
					onHide={this.handleSidebarHide}
					vertical
					visible={sidebarOpened}
				>
				<Menu.Item as='a' active>
				Home
				</Menu.Item>
				<Menu.Item as='a'>Work</Menu.Item>
				<Menu.Item as='a'>Company</Menu.Item>
				<Menu.Item as='a'>Careers</Menu.Item>
				<Menu.Item as='a'>Log in</Menu.Item>
				<Menu.Item as='a'>Sign Up</Menu.Item>
			</Sidebar>

			<Sidebar.Pusher dimmed={sidebarOpened}>
				<Segment
				inverted
				textAlign='center'
				style={{ minHeight: 350, padding: '1em 0em' }}
				vertical
				>
				<Container>
					<Menu inverted pointing secondary size='large'>
					<Menu.Item onClick={this.handleToggle}>
						<Icon name='sidebar' />
					</Menu.Item>
					<Menu.Item position='right'>
						<Button as='a' inverted>
						Log in
						</Button>
						<Button as='a' inverted style={{ marginLeft: '0.5em' }}>
						Sign Up
						</Button>
					</Menu.Item>
					</Menu>
				</Container>
				<HomepageHeading mobile />
				</Segment>
				{children}
			</Sidebar.Pusher>
			</Responsive>
		)
	}
}

const ResponsiveContainer = ({ children }) => 
	<>
		<DesktopContainer>{children}</DesktopContainer>
		<MobileContainer>{children}</MobileContainer>
	</>

const HomepageLayout = () => (
	<ResponsiveContainer>
		<Fade bottom>
			<Segment style={{ padding: '6em' }} vertical>
				<Grid stackable>
					<Grid.Row>
						<Grid.Column>
							<Image src='/images/logoChain.png' size='massive' centered/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
		</Fade>
		<Fade bottom>
			<Segment style={{ padding: '0em' }} vertical>
				<Grid columns='equal' stackable>
					<Grid.Row textAlign='center'>
						<Grid.Column invert style={{ padding: '5em' }} id='comOne'>
							<Header inverted as='h3' style={{ fontSize: '2em' }}>
								"The real life experiences and stories that are brought to the training 
								make it far more interesting than a standard course."
							</Header>
							<p style={{ fontSize: '1.33em', color: 'white' }}>
								Bridget - Human Resources Administrator
							</p>
						</Grid.Column>
						<Grid.Column style={{ padding: '5em' }} id='comTwo'>
							<Header as='h3' style={{ fontSize: '2em' }}>
								"I attended a fire warden course with Golbourn Training Solutions, best 
								fire safety and warden course I have done."
							</Header>
							<p style={{ fontSize: '1.33em' }}>
								Larni - Compliance Officer
							</p>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
		</Fade>
		<Fade bottom>
			<Segment style={{ padding: '8em' }} vertical>
				<Grid divided container stackable verticalAlign='top'>
					<Grid.Row>
						<Grid.Column 
							floated='left' 
							width={8} 
							style={{paddingRight: '5em', marginBottom: '1.5em'}}
						>
							<Header as='h3' style={{ fontSize: '2em' }}>
								We Will Train Your Employees
							</Header>
							<p style={{ fontSize: '1.33em' }}>
								Golbourn Training Solutions understands that it can be difficult to 
								release staff for mandatory courses. All our courses can be delivered 
								around your business, in training hours or days. Courses can be conducted
								during the day, evening or weekend. We will travel to your business 
								premises or	supply a training centre and carry out a group session or 
								1-2-1 training.
							</p>
						</Grid.Column>
						<Grid.Column floated='right' width={8} style={{paddingLeft: '5em'}}>
							<Header as='h3' style={{ fontSize: '2em' }}>
								A Diverse Array of Training Packages
							</Header>
							<p style={{ fontSize: '1.33em' }}>
								We offer courses covering a wide variety of operationally critical 
								subjects for any modern business, including compliance, security, 
								auditing and team building.
							</p>          
							<p style={{ fontSize: '1.33em' }}>
								Explore further to get a feel for our unique take on training.
							</p>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column textAlign='center'>
							<Button inverted color='blue' as={Link} to="/contact" size='huge'>
								Contact Us Today
								<Icon name='angle right'/>
							</Button>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
		</Fade>
		<Fade bottom>
			<Segment style={{ padding: '0' }} vertical borderless>
				<Grid stackable columns='equal'>
					<Grid.Row style={{ margin: '0', padding: '0' }}>
						<Grid.Column id='comThree' style={{ padding: '5em 10em 5em 15em' }}>
							<Header inverted as='h3' style={{ fontSize: '2em' }}>
								Upcoming Public Courses
							</Header>
							<CoursesCarousel />
						</Grid.Column>
						<Grid.Column id='comFour' style={{ padding: '5em 10em 5em 15em' }}>
						<Header inverted as='h3' style={{ fontSize: '2em' }}>
								Supporting HM Forces and Veterans
							</Header>
							<p style={{ fontSize: '1.33em', color: 'white' }}>
								We pride our selves on helping our Armed Forces to gain qualifications 
								either during their service or after.  Our MOD Bundle courses are available 
								throughout the year and multiple locations for both service personnel and their 
								direct families.
							</p><br/>
							<Button inverted as={Link} to="/forces-covenant" size='huge'>
								Forces Covenant
								<Icon name='angle right'/>
							</Button>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
		</Fade>
	</ResponsiveContainer>
)

export default HomepageLayout
