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
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/activity-first-aid">Activity First Aid</NavLink>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item>List Item</Dropdown.Item>
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