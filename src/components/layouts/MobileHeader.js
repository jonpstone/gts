import React from 'react'
import { Link } from 'react-router-dom'
import {
	Button,
	Container,
	Icon,
	Menu,
	Responsive,
	Segment,
    Sidebar,
    Image,
} from 'semantic-ui-react'

const getWidth = () => {
	const isSSR = typeof window === 'undefined'
	return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

export default class MobileContainerMenu extends React.Component {
	state = {}

	handleSidebarHide = () => this.setState({ sidebarOpened: false })
	handleToggle = () => this.setState({ sidebarOpened: true })

	render() {
        const { sidebarOpened } = this.state
        const { body } =this.props

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
					<Menu.Item as={Link} to="/">Home</Menu.Item>
					<Menu.Item as={Link} to="/compliance" className='menuItems'>Compliance</Menu.Item>
					<Menu.Item as={Link} to="/organisation-security" className='menuItems'>Organisation Security</Menu.Item>
					<Menu.Item as={Link} to="/public-courses" className='menuItems'>Public Courses</Menu.Item>
                    <Menu.Item as={Link} to="/team-building" className='menuItems'>Team Building</Menu.Item>
					<Menu.Item as={Link} to="/forces-covenant" className='menuItems'>Forces Support</Menu.Item>
					<Menu.Item as={Link} to="/about" className='menuItems'>About</Menu.Item>
					<Menu.Item as={Link} to="/contact" className='menuItems'>Contact</Menu.Item>
				</Sidebar>

				<Sidebar.Pusher dimmed={sidebarOpened}>
					<Segment
                        vertical
						textAlign='center'
						style={{ padding: '1em 0em', backgroundColor: 'white' }}
					>
						<Container>
							<Menu borderless secondary size='large'>
								<Menu.Item onClick={this.handleToggle}>
									<Icon name='sidebar' size='large' />
								</Menu.Item>
								<Menu.Item position='right'>
									<Button as='a' href='tel:01926825682'>
										Call
									</Button>
									<Button as={Link} to='/contact' style={{ marginLeft: '0.5em' }}>
										Email
									</Button>
								</Menu.Item>
							</Menu>
                                <Image
                                    as={Link}
                                    to='/'
                                    src='/images/GTS.webp' 
                                    size='small'
                                    style={{ marginTop: '1em' }} 
                                    wrapped
                                />
						</Container>
                        {body}
					</Segment>
				</Sidebar.Pusher>
			</Responsive>
		)
	}
}