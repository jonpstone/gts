import React from 'react'
import { Link } from 'react-router-dom'
import {
	Button,
	Dropdown,
	Container,
	Divider,
	Grid,
	Header,
	Icon,
	Image,
	List,
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
	<Container fluid>
		<Image 
			src='/images/GTS1.png' 
			size='small'
			style={{ marginTop: mobile ? '1em' : '5em' }} 
			wrapped
		/>
		<Header
			as='h1'
			content='GOLLUM TRAINING SOLUTIONS'
			inverted
			style={{
				fontSize: mobile ? '2em' : '4em',
				fontWeight: 'normal',
			}}
		/>
		<Grid 
			container
			stackable
			columns='equal'
			style={{
				fontSize: mobile ? '1em' : '1.7em',
				fontWeight: 'normal',
				marginTop: mobile ? '0.5em' : '1.5em',
				marginBottom: mobile ? '1em' : '2em',
				marginLeft: '15em'
			}}>
			<Grid.Row>				
				<Grid.Column width={2}>
				</Grid.Column>
				<Grid.Column width={4}>
					<Header as='h2' inverted style={{color: '#FF5733'}}>
						PROFESSIONAL
					</Header>
				</Grid.Column>
				<Grid.Column width={4}>
					<Header as='h2' inverted style={{color: '#FFC300'}}>
						AFFORDABLE
					</Header>
				</Grid.Column>
				<Grid.Column width={4}>
					<Header as='h2' inverted style={{color: '#DAF7A6'}}>
						FLEXIBLE
					</Header>
				</Grid.Column>
			</Grid.Row>
		</Grid>
		<Button as={Link} to="/about" inverted size='huge'>
			Learn More
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
            vertical>
            <Menu
              borderless
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              // pointing={!fixed}
              // secondary={!fixed}
              size='large'
              style={!fixed ? {
                backgroundColor: 'transparent',
                border: 'none',
                outline: 'none',
              } : null}
            >
              <Menu.Item>
                <Image 
                  as={Link} to="/" 
                  size='mini' 
                  src={!fixed ? '/images/GTS1.png' : '/images/GTS.png'}
                  />
              </Menu.Item>
              <Menu.Menu position='right'>
              <Menu.Item as={Link} to="/compliance">Compliance</Menu.Item>

                {/* Organization Security */}
                <Dropdown item simple text='Organisation Security'>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/organisation-security/lockdown-consultancy">
                        Lockdown Consultancy
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/organisation-security/security-audit">
                        Security Audit
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/organisation-security/safe-guarding">
                        Serious Incident Control Measures
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                
                {/* Single Pages */}
                <Menu.Item as={Link} to="/auditing">Auditing</Menu.Item>
                <Menu.Item as={Link} to="/team-building">Team Building</Menu.Item>
                <Menu.Item as={Link} to="/forces-covenant">Forces Covenant</Menu.Item>
                <Menu.Item as={Link} to="/public-courses">Public Courses</Menu.Item>
                <Menu.Item as={Link} to="/about">About</Menu.Item>
                <Menu.Item as={Link} to="/contact">Contact</Menu.Item>
                <Menu.Item 
                  as='a' 
                  href='https://www.facebook.com/golbourntrainingsolutions/'
                  target='_blank'
                ><i className='facebook icon'></i>
                </Menu.Item>
                <Menu.Item as='a' href="#"><i className="linkedin icon"></i></Menu.Item>
                <Menu.Item as='a' href="#"><i className="instagram icon"></i></Menu.Item>
              </Menu.Menu>
            </Menu>
            <HomepageHeading />
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

const ResponsiveContainer = ({ children }) => (
  <>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </>
)

const HomepageLayout = () => (
	<ResponsiveContainer>
		<Segment style={{ padding: '8em 8em' }} vertical>
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
							Gollum Training Solutions understands it can be difficult to release 
							staff for mandatory courses. All our courses can be delivered around 
							your business, in training hours or days, delivered during the day, 
							evening or weekend. We will travel to your business premises or supply
							a training centre and carry out a group session or 1-2-1 training.
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
							Explore further to get a feel for our unique take on learning.
						</p>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column textAlign='center'>
						<Button primary as={Link} to="/contact" size='huge'>Contact Us Today</Button>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
		<Segment style={{ padding: '0em' }} vertical>
			<Grid celled='internally' columns='equal' stackable>
				<Grid.Row textAlign='center'>
					<Grid.Column invert style={{ padding: '5em' }} id='comOne'>
						<Header inverted as='h3' style={{ fontSize: '2em' }}>
							"The real life experiences and stories that are brought to the training 
							make it far more interesting than a standard course."
						</Header>
						<p style={{ fontSize: '1.33em', color: 'white' }}>
							<b>Bridget</b> - Human Resources Administrator
						</p>
					</Grid.Column>
					<Grid.Column style={{ padding: '5em' }} id='comTwo'>
						<Header as='h3' style={{ fontSize: '2em' }}>
							"Attended a fire warden course with Gollum Training Solutions, best 
							fire safety and warden course I have done."
						</Header>
						<p style={{ fontSize: '1.33em' }}>
							<b>Larni</b> - Compliance Officer
						</p>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Instead of focusing on content creation and hard work, we have learned how to master the
          art of doing nothing by providing massive amounts of whitespace and generic content that
          can seem massive, monolithic and worth your attention.
        </p>
        <Button as='a' size='large'>
          Read More
        </Button>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Case Studies</a>
        </Divider>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
          it's really true. It took years of gene splicing and combinatory DNA research, but our
          bananas can really dance.
        </p>
        <Button as='a' size='large'>
          I'm Still Quite Interested
        </Button>
      </Container>
    </Segment>
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout
