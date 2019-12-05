import React, { Component } from 'react'
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
    <Header
      as='h2'
      content='PROFESSIONAL   |   AFFORDABLE   |   FLEXIBLE'
      inverted
      style={{
        fontSize: mobile ? '1em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
        marginBottom: mobile ? '1em' : '2em'
      }}
    />
    <Button size='huge' color='black'>
      Learn More
    </Button>
  </Container>
)

class DesktopContainer extends Component {
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
            style={{ 
              minHeight: 700, 
              padding: '1em 0em',
            }}
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
                    src='/images/GTS.png' 
                    style={{ 'marginRight': '33em' }} 
                    />
                </Menu.Item>
                <Container fluid>
                  <Dropdown item simple text='Compliance'>
                    <Dropdown.Menu>

                      {/* Compliance - First Aid */}
                      <Dropdown.Item>
                        <i className='dropdown icon' />
                        <span className='text'>First Aid</span>
                        <Dropdown.Menu>
                          <Dropdown.Item as={Link} to="/compliance/first-aid-at-work">
                            First Aid at Work (3 Days)
                          </Dropdown.Item>
                          <Dropdown.Item as={Link} to="/compliance/first-aid-at-work-requal">
                            First Aid at Work Requalification (2 Days)
                          </Dropdown.Item>
                          <Dropdown.Item as={Link} to="/compliance/emergency-first-aid">
                            Emergency First Aid at Work (1 Day)
                          </Dropdown.Item>
                          <Dropdown.Item as={Link} to="/compliance/paediatric-first-aid">
                            Paediatric First Aid (2 Days)
                          </Dropdown.Item>
                          <Dropdown.Item as={Link} to="/compliance/emergency-paediatric-first-aid">
                            Emergency Paediatric First Aid (1 Day)
                          </Dropdown.Item>
                          <Dropdown.Item as={Link} to="/compliance/activity-first-aid">
                            Activity First Aid (2 Days)
                          </Dropdown.Item>
                          <Dropdown.Item as={Link} to="/compliance/bespoke-first-aid">
                            Bespoke First Aid
                          </Dropdown.Item>
                          <Dropdown.Item as={Link} to="/compliance/catastrophic-bleed-management">
                            Catastrophic Bleed Management
                          </Dropdown.Item>
                          <Dropdown.Item as={Link} to="/compliance/junior-first-aid">
                            Junior First Aiders
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown.Item>

                      {/* Compliance - Life Support */ }
                      <Dropdown.Item>
                        <i className='dropdown icon' />
                        <span className='text'>Life Support</span>
                        <Dropdown.Menu>
                          <Dropdown.Item as={Link} to="/compliance/cpr-bls-aed">
                            CPR/BLS & AED (1 Day)
                          </Dropdown.Item>
                          <Dropdown.Item as={Link} to="/compliance/bls-aed">
                            BLS & AED (4 Hours)
                          </Dropdown.Item>
                          <Dropdown.Item as={Link} to="/compliance/oxygen-therapy">
                            Oxygen Therapy
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown.Item>

                      {/* Compliance - Health and Safety */}
                      <Dropdown.Item>
                        <i className='dropdown icon' />
                        <span className='text'>Health & Safety</span>
                        <Dropdown.Menu>
                          <Dropdown.Item as={Link} to="/compliance/health-and-safety">
                            Health and Safety
                          </Dropdown.Item>
                          <Dropdown.Item as={Link} to="/compliance/health-and-safety-first-aid">
                            Health and Safety First Aid
                          </Dropdown.Item>
                          <Dropdown.Item as={Link} to="/compliance/manual-handling">
                            Manual Handling
                          </Dropdown.Item>
                          <Dropdown.Item as={Link} to="/compliance/food-safety">
                            Food Safety
                          </Dropdown.Item>
                          <Dropdown.Item as={Link} to="/compliance/fire-safety">
                            Fire Safety
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown.Item>

                      {/* Compliance - Misc */}
                      <Dropdown.Item as={Link} to="/compliance/anaphylaxis-management">
                        Anaphylaxis Management
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/compliance/safe-guarding">
                        Safe Guarding
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

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
                </Container>

                <Menu.Menu position='right'>
                  <Menu.Item 
                    as='a' 
                    href='https://www.facebook.com/golbourntrainingsolutions/'
                    target='_blank'
                  >
                    <i class='facebook icon'></i>
                  </Menu.Item>
                  <Menu.Item as='a' href="#"><i class="linkedin icon"></i></Menu.Item>
                  <Menu.Item as='a' href="#"><i class="instagram icon"></i></Menu.Item>
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

class MobileContainer extends Component {
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
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Help Companies and Companions
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              We can give your company superpowers to do things that they never thought possible.
              Let us delight your customers and empower your needs... through pure data analytics.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Make Bananas That Can Dance
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes that's right, you thought it was the stuff of dreams, but even bananas can be
              bioengineered.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='/images/wireframe/white-image.png' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "What a Company"
            </Header>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='/images/avatar/large/nan.jpg' />
              <b>Nan</b> Chief Fun Officer Acme Toys
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
