import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Dropdown, Header, Image, Menu } from 'semantic-ui-react'

const FixedMenuLayout = () => (
  <div className="header">
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src='/images/GTS.png' style={{ marginRight: '1.5em' }} />
        </Menu.Item>
        <Dropdown item simple text='Compliance'>
          <Dropdown.Menu> 
            <Dropdown.Item></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>

    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Semantic UI React Fixed Template</Header>
      <p>This is a basic fixed menu template using fixed size containers.</p>
      <p>
        A text container is used for the main container, which is useful for single column layouts.
      </p>

      <Image src='/images/wireframe/media-paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
    </Container>
  </div>
)

export default FixedMenuLayout


//  <Dropdown.Item><NavLink to="/compliance">Compliance</NavLink></Dropdown.Item>
//  <Dropdown.Item><NavLink to="/organisation-security">Organisation Security</NavLink></Dropdown.Item>
//  <Dropdown.Item><NavLink to="/auditing">Auditing</NavLink></Dropdown.Item>
//  <Dropdown.Item><NavLink to="/team-building">Team Building</NavLink></Dropdown.Item>
//  <Dropdown.Item><NavLink to="/forces-covenant">Forces Covenant</NavLink></Dropdown.Item>
//  <Dropdown.Item><NavLink to="/public-courses">Public Courses</NavLink></Dropdown.Item>
//  <Dropdown.Item><NavLink to="/about">About</NavLink></Dropdown.Item>
//  <Dropdown.Item><NavLink to="/contact">Contact</NavLink></Dropdown.Item>