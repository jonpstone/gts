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
	Visibility,
	Grid,
	Header
} from 'semantic-ui-react'

const getWidth = () => {
	const isSSR = typeof window === 'undefined'
	return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

export default class DesktopContainerMenu extends React.Component {
	state = {}

	hideFixedMenu = () => { this.setState({ fixed: false }) }
	showFixedMenu = () => { this.setState({ fixed: true }) }
	
	componentDidMount() { window.scrollTo(0, 0) }

	render() {
		const { fixed } = this.state
		const { path, body } = this.props

		return (
			<Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
				<Visibility
					once={false}
					onBottomPassed={this.showFixedMenu}
					onBottomPassedReverse={this.hideFixedMenu}
				>
					<Segment
						id={ 
							path === '/team-building' ? 'teamBuildingHero' : (
								path === '/forces-covenant' ? 'forcesHero' : (
									path.includes('compliance') ? 'compHero' : (
										path.includes('organisation-security') ? 'orgSecHero' : (
											path === '/about' ? 'aboutHero' : (
												path === '/contact' ? 'contactHero' : (
													path === '/policy' ? 'policyHero' : (
														path === '/sitemap' ? 'sitemapHero' : (
															path === '/public-courses' ? 'publicHero' : null
														)
													)
												)
											)
										) 
									)
								)
							) 
						}
						inverted
						textAlign='center'
						style={{ padding: '1em 0em' }}
						vertical
					>
						<NavMenu fixed={fixed}/>
						<Container>
							<Grid
								stackable
								textAlign='center'
								columns='equal'
								style={{
									fontSize: '1.8em',
									fontWeight: 'normal',
									marginTop: '1.1em',
									marginBottom: '2em',
								}}
							>
								<Grid.Row style={{ padding: '0' }}>
									{
										path === '/team-building' ? 									
										<Header
											as='h1'
											content='TEAM BUILDING & EVENTS'
											inverted
											style={{ fontSize: '4em', fontWeight: 'bold', marginTop: '25%' }}
										/> : (
											path === '/forces-covenant' ? 									
											<Header
												as='h1'
												content='FORCES SUPPORT'
												inverted
												style={{ fontSize: '4em', fontWeight: 'bold',	marginTop: '30%' }}
											/> : (
												path.includes('organisation-security') ? 									
												<Header
													as='h1'
													content='ORGANISATION SECURITY'
													inverted
													style={{ fontSize: '3em', fontWeight: 'bold' }}
												/> : (
													path.includes('compliance') ? 									
													<Header
														as='h1'
														content='COMPLIANCE'
														inverted
														style={{ fontSize: '3em', fontWeight: 'bold' }}
													/> : (
														path === '/about' ?
														<Header
															as='h1'
															content='ABOUT GTS'
															inverted
															style={{ fontSize: '3em', fontWeight: 'bold' }}
														/> : (
															path === '/contact' ?
															<Header
																as='h1'
																content='CONTACT US'
																inverted
																style={{ fontSize: '3em', fontWeight: 'bold' }}
															/> : (
																path === '/policy' ?
																<Header
																	as='h1'
																	content='POLICIES'
																	inverted
																	style={{ fontSize: '3em', fontWeight: 'bold' }}
																/> : (
																	path === '/sitemap' ?
																	<Header
																		as='h1'
																		content='SITEMAP'
																		inverted
																		style={{ fontSize: '3em', fontWeight: 'bold' }}
																	/> : (
																		path === '/public-courses' ?
																		<Header
																			as='h1'
																			content='PUBLIC COURSES'
																			inverted
																			style={{ fontSize: '3em', fontWeight: 'bold' }}
																		/> : null
																	)
																)
															)
														)
													)
												)
											)
										)
									}
								</Grid.Row>
								<Grid.Row>
									<Grid.Column>
										{
											path === '/team-building' ? 
											<Header as='h2' inverted style={{color: '#DAF7A6'}}>
												OUR EXPERT EVENT MANAGER FRED BOUCHER IS SECOND TO NONE<br/>
												Your staff will be energised and motivated to achieve results 
											</Header> : (
												path === '/forces-covenant' ? 
												<Header as='h2' inverted style={{color: '#FFC300'}}>
													Armed Forces Support - You can be ready for CIV DIV for as little as £125.00* 
												</Header> : null
											)
										}
									</Grid.Column>
								</Grid.Row>
							</Grid>
								<Button inverted as='a' href='#finish' size='huge' className='scrollBottom' style={{ marginBottom: '8%' }}>
									&nbsp; Learn More &nbsp;
									<Icon name='angle down'/>
								</Button>
						</Container>
					</Segment>
				</Visibility>
				{body}
			</Responsive>
		)
	}
}

const NavMenu = ({fixed}) =>
	<Menu
		borderless
		fixed={!fixed ? null : 'top'}
		inverted={!fixed}
		size='large'
		style={!fixed ? {
			backgroundColor: 'transparent', 
			border: 'none', 
			outline: 'none',
			padding: '.2em 2.4em'
		} : { padding: '.2em 2.4em'}}
		>
		<Menu.Menu>
			<Image
				id='gtsLogoHeader'
				as={Link} to='/'
				size='mini'
				src={!fixed ? '/images/GTS1.webp' : '/images/GTS.webp'}
				style={{ outline: 'none', margin: '.7em 1em 0 0' }}
			/>
			<Menu.Item as={Link} to='/contact' icon inverted={!fixed} style={{ outline: 'none' }}>
				<Icon name='mail' size='large'/>
				&nbsp; Email Us
			</Menu.Item>
			<Menu.Item as='a' href='tel:01926825682' icon inverted={!fixed} style={{ outline: 'none' }}>
				<Icon name='phone square' size='large'/>
				&nbsp; +44 (0)1926 825682
			</Menu.Item>
			<Menu.Item 
				className='menuPhoneNumbers' 
				inverted={!fixed}
			>
			</Menu.Item>
		</Menu.Menu>
		<Menu.Menu position='right'>
			<Menu.Item as={Link} to="/compliance" className='menuItems'>Compliance</Menu.Item>
			<Menu.Item as={Link} to="/organisation-security" className='menuItems'>Organisation Security</Menu.Item>
			<Menu.Item as={Link} to="/public-courses" className='menuItems'>Public Courses</Menu.Item>
			<Menu.Item as={Link} to="/team-building" className='menuItems'>Team Building</Menu.Item>
			<Menu.Item as={Link} to="/forces-covenant" className='menuItems'>Forces Support</Menu.Item>
		</Menu.Menu>
	</Menu>