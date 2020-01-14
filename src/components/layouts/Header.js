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

	render() {
		const { fixed } = this.state
		const { path } = this.props

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
									path === '/compliance' ? 'compHero' : (
										path === '/organisation-security' ? 'orgSecHero' : null 
									)
								)
							) 
						}
						inverted
						textAlign='center'
						style={{ padding: '1em 0em' }}
						vertical
					>
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
									src={!fixed ? '/images/GTS1.png' : '/images/GTS.png'}
									style={{ outline: 'none' }}

								/>
								<Menu.Item 
									className='menuPhoneNumbers' 
									inverted={!fixed}
								>
									Call Us Today:&nbsp; &nbsp;
									<a 
										id='telOne' 
										style={fixed ? { color: 'black', outline: 'none' } : { outline: 'none' }} 
										href='tel:07904014772'
									>
										07904 014772
									</a>
									&nbsp; | &nbsp; 
									<a 
										id='telTwo' 
										style={fixed ? { color: 'black', outline: 'none' } : { outline: 'none' }} 
										href='tel:01926825682'
									>
										01926 825682
									</a>
								</Menu.Item>
							</Menu.Menu>
							<Menu.Menu position='right'>
								<Menu.Item as={Link} to="/compliance" className='menuItems'>Compliance</Menu.Item>
								<Menu.Item as={Link} to="/organisation-security" className='menuItems'>Organisation Security</Menu.Item>
								<Menu.Item as={Link} to="/team-building" className='menuItems'>Team Building</Menu.Item>
								<Menu.Item as={Link} to="/forces-covenant" className='menuItems'>Forces Support</Menu.Item>
							</Menu.Menu>
						</Menu>
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
											style={{ fontSize: '4em', fontWeight: 'bold', marginTop: '27%' }}
										/> : (
											path === '/forces-covenant' ? 									
											<Header
												as='h1'
												content='FORCES SUPPORT'
												inverted
												style={{ fontSize: '4em', fontWeight: 'bold',	marginTop: '30%' }}
											/> : (
												path === '/organisation-security' ? 									
												<Header
													as='h1'
													content='ORGANISATION SECURITY'
													inverted
													style={{ fontSize: '3em', fontWeight: 'bold' }}
												/> : (
													path === '/compliance' ? 									
													<Header
														as='h1'
														content='COMPLIANCE'
														inverted
														style={{ fontSize: '3em', fontWeight: 'bold' }}
													/> : null
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
							<a href='#finish'>
								<Button inverted size='huge' className='scrollBottom' style={{ marginBottom: '8%' }}>
									&nbsp; Learn More &nbsp;
									<Icon name='angle down'/>
								</Button>
							</a>
						</Container>
					</Segment>
				</Visibility>
			</Responsive>
		)
	}
}