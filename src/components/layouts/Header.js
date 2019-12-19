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
} from 'semantic-ui-react'

const getWidth = () => {
	const isSSR = typeof window === 'undefined'
	return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class DesktopContainerMenu extends React.Component {	
	render() {
		return (
			<Responsive 
				getWidth={getWidth} 
				minWidth={Responsive.onlyTablet.minWidth}
			>
				<Segment
						textAlign='center'
						vertical
				>
					<Menu
						compact
						borderless
						fixed='top'
						size='large'
					>
						<Menu.Item>
						<Image
							style={{ outline: 'none' }}
							as={Link} to='/'
							size='mini' 
							src='/images/GTS.png'
						/>
						</Menu.Item>
						<Menu.Menu 	size='large' style={{ paddingLeft: '26%' }}>
							<Menu.Item as={Link} to="/compliance" style={{ outline: 'none' }}>Compliance</Menu.Item>
							<Menu.Item as={Link} to="/" style={{ outline: 'none' }}>Organisation Security</Menu.Item>
							<Menu.Item as={Link} to="/auditing" style={{ outline: 'none' }}>Auditing</Menu.Item>
							<Menu.Item as={Link} to="/team-building" style={{ outline: 'none' }}>Team Building</Menu.Item>
							<Menu.Item as={Link} to="/forces-covenant" style={{ outline: 'none' }}>Forces Covenant</Menu.Item>
							<Menu.Item as={Link} to="/public-courses" style={{ outline: 'none' }}>Public Courses</Menu.Item>
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