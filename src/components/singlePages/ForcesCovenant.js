import React from 'react'
import { Header, Grid, Segment, Responsive, Image } from 'semantic-ui-react'
import Fade from 'react-reveal/Fade'
import ForcesCoursesCarousel from '../NonPageComponents/ForcesCoursesCarousel'
import NavBar from '../layouts/Header'

export default class ForceCovenant extends React.Component {
	state = {}

	hideFixedMenu = () => { this.setState({ fixed: false }) }
	showFixedMenu = () => { this.setState({ fixed: true }) }

	componentDidMount() { window.scrollTo(0, 0) }

	render() {

		return (
			<>
				<NavBar path={this.props.location.pathname}/>
				<Fade bottom>
					<div id='finish'></div>
					<Segment style={{ padding: '8em' }} vertical>
						<Grid divided container stackable verticalAlign='top'>
							<Grid.Row>
								<Grid.Column 
									floated='left' 
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
								<Grid.Column floated='right' width={8} style={{paddingLeft: '5em'}}>
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
							<Grid.Row>
								<Header as='h3' style={{ fontSize: '2em', marginTop: '2em' }}>
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
							</Grid.Row>
							<Grid.Row>
								<p style={{ fontSize: '1.33em' }}>
									* You can use your SLC on all our course packages.
								</p>
							</Grid.Row>
						</Grid>
					</Segment>
				</Fade>
				<Fade bottom>
					<Segment style={{ padding: '0' }} vertical borderless>
						<Grid stackable columns='equal'>
							<Grid.Row style={{ margin: '0', padding: '0' }}>
								<Grid.Column style={{ backgroundColor: '#607e6d', padding: '5em 10em 5em 15em' }}>
									<Header 
										inverted 
										as='h3' 
										style={{ fontSize: '2em', color: 'white' }}
									>
										GTS MOD 3 Day Bundle Course Offers<br/><br/>
									</Header>
									<ForcesCoursesCarousel/>
								</Grid.Column>
								<Grid.Column style={{ backgroundColor: '#6eb8ff', padding: '5em 0 0 0' }}>
									<Grid.Row>
										<Image centered src='/images/SLC.jpg' size='big' />
									</Grid.Row>
									<Grid.Row>
										<Image 
											centered 
											src='/images/forcesFamily.jpg' 
											size='massive' 
											style={{ margin: '0', padding: '0' }} 
										/>
									</Grid.Row>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Segment>
				</Fade>
			</>
		)
	}
}