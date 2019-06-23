import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Dropdown, Image, Menu } from 'semantic-ui-react'

export default props =>
  <Menu fixed='top' inverted>
    <Container>
      <Menu.Item header>
        <NavLink to="/">
          <Image size='mini' src='/images/GTS.png' style={{ marginRight: '1.5em' }} />
        </NavLink>
      </Menu.Item>
      <Dropdown item simple text='Compliance'>
        <Dropdown.Menu>
          <Dropdown.Item>
            <i className='dropdown icon' />
            <span className='text'>First Aid</span>
            <Dropdown.Menu>
              <Dropdown.Item>
                <NavLink to="/compliance/first-aid-at-work" className="menuItem">
                  First Aid at Work (3 Days)
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/compliance/first-aid-at-work-requal" className="menuItem">
                  First Aid at Work Requalification (2 Days)
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/compliance/emergency-first-aid" className="menuItem">
                  Emergency First Aid at Work (1 Day)
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/compliance/paediatric-first-aid" className="menuItem">
                  Paediatric First Aid (2 Days)
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/compliance/emergency-paediatric-first-aid" className="menuItem">
                  Emergency Paediatric First Aid (1 Days)
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/compliance/activity-first-aid" className="menuItem">
                  Activity First Aid (2 Days)
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/compliance/bespoke-first-aid" className="menuItem">
                  Bespoke First Aid
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/compliance/catastrophic-bleed-management" className="menuItem">
                  Catastrophic Bleed Management
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/compliance/junior-first-aid" className="menuItem">
                  Junior First Aiders
                </NavLink>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item>
            <i className='dropdown icon' />
            <span className='text'>Life Support</span>
            <Dropdown.Menu>
              <Dropdown.Item>
                <NavLink to="/compliance/cpr-bls-aed" className="menuItem">
                  CPR/BLS & AED (1 Day)
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/compliance/bls-aed" className="menuItem">
                  BLS & AED (4 Hours)
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/compliance/oxygen-therapy" className="menuItem">
                  Oxygen Therapy
                </NavLink>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item>
            <i className='dropdown icon' />
            <span className='text'>Health & Safety</span>
            <Dropdown.Menu>
              <Dropdown.Item>
                <NavLink to="/compliance/health-and-safety" className="menuItem">
                  Health and Safety
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/compliance/health-and-safety-first-aid" className="menuItem">
                  Health and Safety First Aid
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/compliance/manual-handling" className="menuItem">
                  Manual Handling
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/compliance/food-safety" className="menuItem">
                  Food Safety
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/compliance/fire-safety" className="menuItem">
                  Fire Safety
                </NavLink>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item as='a'>Organisation Security</Menu.Item>
      <Menu.Item as='a'>Auditing</Menu.Item>
      <Menu.Item as='a'>Team Building</Menu.Item>
      <Menu.Item as='a'>Forces Covenant</Menu.Item>
      <Menu.Item as='a'>Public Course</Menu.Item>
      <Menu.Item as='a'>About</Menu.Item>
      <Menu.Item as='a'>Contact</Menu.Item>
    </Container>
  </Menu>

//  <Dropdown.Item><NavLink to="/compliance">Compliance</NavLink></Dropdown.Item>
//  <Dropdown.Item><NavLink to="/organisation-security">Organisation Security</NavLink></Dropdown.Item>
//  <Dropdown.Item><NavLink to="/auditing">Auditing</NavLink></Dropdown.Item>
//  <Dropdown.Item><NavLink to="/team-building">Team Building</NavLink></Dropdown.Item>
//  <Dropdown.Item><NavLink to="/forces-covenant">Forces Covenant</NavLink></Dropdown.Item>
//  <Dropdown.Item><NavLink to="/public-courses">Public Courses</NavLink></Dropdown.Item>
//  <Dropdown.Item><NavLink to="/about">About</NavLink></Dropdown.Item>
//  <Dropdown.Item><NavLink to="/contact">Contact</NavLink></Dropdown.Item>