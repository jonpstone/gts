import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Container, Dropdown, Image, Menu } from 'semantic-ui-react'

export default props =>
  <Menu fixed='top' inverted>
    <Container>
      <Menu.Item header>
        <Link to="/">
          <Image size='mini' src='/images/GTS.png' style={{ marginRight: '1.5em' }} />
        </Link>
      </Menu.Item>
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

      {/* Organisation Security */}
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
      <Menu.Item as='a' href="#"><i class="facebook icon"></i></Menu.Item>
      <Menu.Item as='a' href="#"><i class="linkedin icon"></i></Menu.Item>
      <Menu.Item as='a' href="#"><i class="instagram icon"></i></Menu.Item>
    </Container>
  </Menu>