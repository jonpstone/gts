import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Dropdown,
  Container,
  Icon,
  Image,
  Menu,
  Responsive,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class DesktopContainerMenu extends React.Component {

  render() {
    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>

          <Segment>
            <Menu
              borderless
              fixed='top'
              size='large'
            >
              <Menu.Item>
                <Image 
                  as={Link} to="/" 
                  size='mini' 
                  src='/images/GTS.png'
                  />
              </Menu.Item>
              <Menu.Menu position='right'>
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
                <Menu.Item 
                  as='a' 
                  href='https://www.facebook.com/golbourntrainingsolutions/'
                  target='_blank'
                >
                  <i className='facebook icon'></i>
                </Menu.Item>
                <Menu.Item as='a' href="#"><i className="linkedin icon"></i></Menu.Item>
                <Menu.Item as='a' href="#"><i className="instagram icon"></i></Menu.Item>
              </Menu.Menu>
            </Menu>
          </Segment>
      </Responsive>
    )
  }
}

class MobileContainerMenu extends React.Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })
  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
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
          </Segment>
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

const ResponsiveContainer = () => (
  <>
    <DesktopContainerMenu />
    <MobileContainerMenu />
  </>
)

export default ResponsiveContainer