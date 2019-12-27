import React from 'react'
import { Link } from 'react-router-dom'
import {
	Button,
	Container,
	Icon,
	Image,
	Menu,
	Responsive,
	Segment,
	Sidebar,
	Visibility,
	MenuItem,
} from 'semantic-ui-react'

const getWidth = () => {
	const isSSR = typeof window === 'undefined'
	return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class DesktopContainerMenu extends React.Component {	
	render() {
		return (
			<Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
				<Visibility
					once={false}
					onBottomPassed={this.showFixedMenu}
					onBottomPassedReverse={this.hideFixedMenu}
				>
					<Segment
						inverted
						textAlign='center'
						vertical
					>
						<Menu
							fluid
							widths={10}
							fixed='top'
							size='large'
						>
							<Menu.Item as={Link} to="/" className='menuItems'>GTS Home</Menu.Item>
							<Menu.Item as={Link} to="/compliance" className='menuItems'>Compliance</Menu.Item>
							<Menu.Item as={Link} to="/organisation-security" className='menuItems'>Organisation Security</Menu.Item>
							<Menu.Item as={Link} to="/team-building" className='menuItems'>Team Building</Menu.Item>
							<Menu.Item as={Link} to="/forces-covenant" className='menuItems'>Forces Covenant</Menu.Item>
							<Menu.Item as={Link} to="/public-courses" className='menuItems'>Public Courses</Menu.Item>
						</Menu>
					</Segment>
				</Visibility>
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