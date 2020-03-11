import React from 'react'
import { Header, Grid, Segment, Image } from 'semantic-ui-react'
import Fade from 'react-reveal/Fade'
import ForcesCoursesCarousel from '../NonPageComponents/ForcesCoursesCarousel'
import NavBar from '../layouts/Header'
import MobileNavBar from '../layouts/MobileHeader'

export default class ForceCovenant extends React.Component {

	render() {
		return (
			<>
				<NavBar path={this.props.location.pathname} body={<Body/>}/>
				<MobileNavBar body={<Body mobile/>}/>
			</>
		)
	}
}

class Body extends React.Component {
	state = {}

	hideFixedMenu = () => { this.setState({ fixed: false }) }
	showFixedMenu = () => { this.setState({ fixed: true }) }

	componentDidMount() { window.scrollTo(0, 0) }

	render() {
		const { mobile } = this.props

		return (
			<>
				<Header as='h2' style={mobile ? { fontSize: '3em' } : { display: 'none' }}>FORCES SUPPORT</Header>
				{console.log(this.props)}

				<Fade bottom>
					<div id='finish'></div>
					<Segment style={mobile ? { padding: '3em 1em', backgroundColor: 'white' } : { padding: '8em' }} vertical>
						<Grid divided container stackable verticalAlign='top'>
							<Grid.Row>
								<Grid.Column 
									width={8} 
									style={{paddingRight: '5em', marginBottom: '1.5em'}}
								>
									<Header as='h3' style={{ fontSize: '2em' }}>
										Serving, Retired, Dependent?
									</Header>
									<p style={{ fontSize: '1.33em' }}>
										Whether you are leaving the Armed Forces or your direct family would like to 
										increase their employability, Golbourn Training Solutions are passionate in 
										helping our Armed Forces and their families.
									</p>
									<p style={{ fontSize: '1.33em' }}>
										We work with serving personnel (Regular and Reserves), Veterans and direct 
										family members.
									</p>
								</Grid.Column>
								<Grid.Column floated='right' width={8} style={{ paddingLeft: '5em' }}>
									<Header as='h3' style={{ fontSize: '2em' }}>
										Forces Discount
									</Header>
									<p style={{ fontSize: '1.33em' }}>
										All Armed Forces can access any one of our public courses at a discounted rate 
										or can attend one of our specialised MOD Courses where we cover multiple 
										subjects over 3 days.  We run courses from Poole, Aldershot, Coventry, 
										Catterick and Lossiemouth. We can run courses to meet Unit needs at Unit or 
										from our locations. 
									</p>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Segment>
				</Fade>
				<Fade bottom>
					<Segment style={{ padding: '0', backgroundColor: '#607e6d' }} vertical borderless>
						<Grid container stackable columns='equal'>
							<Grid.Row style={!mobile ? { marginTop: '5em' } : { margin: '0', padding: '0' }}>
								<Grid.Column style={{ color: 'white', paddingRight: '5em' }}>
									<Header as='h3' style={{ fontSize: '2.2em', color: 'white' }}>
										Veteran Staff
									</Header>
										<p style={{ fontSize: '1.33em' }}>
											All our instructors are veterans themselves and understand the need for flexible 
											training. If you want a bespoke package putting together to meet your needs 
											please just ask, if we can, we will. 
										</p>
										<p style={{ fontSize: '1.33em' }}>
											Please contact us for further details.
										</p>
										<p style={{ fontSize: '1.33em' }}>
											* You can use your SLC on all our course packages.
										</p><br />
										<Image src='/images/SLC.webp' />
										{/* <Grid.Row id='slc'></Grid.Row>
										<Grid.Row id='forcesFamily'></Grid.Row> */}
								</Grid.Column>
								<Grid.Column style={{ paddingLeft: '5em' }}>
									<Header 
										inverted 
										as='h3' 
										style={{ fontSize: '2em', color: 'white' }}
									>
										<p>GTS MOD 3 Day Bundle Course Offers</p><br />
									</Header>
									<ForcesCoursesCarousel/><br />
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Segment>
				</Fade>
			</>
		)
	}
}
