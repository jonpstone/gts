import React from 'react'
import Fade from 'react-reveal/Fade'
import { Container, Header, Divider, Grid, List, Button, Icon  } from 'semantic-ui-react'

export default class BlsAed extends React.Component {
	constructor(props) {
		super(props);
		this.emergencyFocus = React.createRef()
	}

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	handleOnClick = (event) => {
		if(this.emergencyFocus.current){
			this.emergencyFocus.current.scrollIntoView({ 
				behavior: "smooth", 
				block: "start"
			})
		}
	}

	render() {
		return (
			<Container style={{ marginTop: '2em', fontSize: '1.2em' }}>
			
				<Header as='h2' textAlign='center' style={{ fontSize: '2em', marginBottom: '1.5em' }}>
					Basic Life Support with AED
				</Header>

				<Container textAlign='center'>
					<Button 
						inverted 
						color='blue' 
						size='huge' 
						onClick={this.handleOnClick} 
					>
						&nbsp; CPR with Basic Life Support & AED &nbsp;
						<Icon name='angle down'/>
					</Button>
				</Container>

				<Grid divided stackable columns='equal'>
					<Divider horizontal style={{ margin: '5em 0' }}>
						Basic Life Support with AED &nbsp; | &nbsp; 4 hours
					</Divider>
					<Grid.Row>
						<Grid.Column style={{ padding: '0 2em 0 0' }}>
							<p>
								Heart and circulatory disease claims around 200,000 lives each year. Many could 
								have been saved if a defibrillator was made available.
							</p>
							<p>
								Not only does this course deal with the use of an AED but it also includes vital
								training in resuscitation and choking procedures.
							</p>
						</Grid.Column>
						<Grid.Column style={{ padding: '0 0 0 2em' }}>
							<p>
								Automated External Defibrillators (AED’s) are now becoming more common throughout
								a range of public and work places. A casualty’s survival rate will dramatically 
								increase if an AED is available and if you have appropriately qualified personnel 
								to use it.
							</p>
							<p>
								This very practical course will enable your learners to use the AED competently 
								and with confidence.
							</p>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				
				<Fade bottom>
					<Grid stackable columns='equal'>
						<Divider horizontal style={{ margin: '5em 0' }}>Syllabus</Divider>
						<Grid.Row id='blsAedSyllabus' style={{ color: 'white', padding: '4em 0 4em 9em' }}>
							<Grid.Column>
								<List bulleted items={[
										'Responsibilities and reporting',
										'Assessment of the situation',
										'Dealing with an unresponsive casualty',
										'Infection control',
									]}
								/>
							</Grid.Column>
							<Grid.Column>
								<List bulleted items={[
										'Resuscitation',
										'AED functions',
										'Defibrillation procedures',
										'Safety measures',
									]}
								/>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>
				<Fade bottom>
					<Grid divided stackable columns='equal'>
						<Grid.Row style={{ margin: '5em 0' }}>
							<Grid.Column style={{ padding: '0 2em 0 0' }}>
								<p>
									CPR and AED training is fast becoming a necessity. Golbourn Training Solutions 
									not only offer this dedicated CPR and AED training course but also a 4 hour 
									Basic pfe Support and AED course.
								</p>
								<p>
									Each student will also receive a free comprehensive fully illustrated training 
									book to supplement the CPR and AED course this will be provided in your training
									pack. 
								</p>
							</Grid.Column>
							<Grid.Column style={{ padding: '0 0 0 2em' }}>
								<p>
									A maximum of 12 students are allowed and must be a minimum of 16 years of age.
								</p>

								<p>
									This qualification lasts for 3 years. To renew their qualification after 3 
									years, delegates will need to retake the full course. However, it is recommended
									that, during the 3 year period, delegates attend annual refresher courses.
								</p>    
								<div ref={this.emergencyFocus}></div>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>

				<Fade bottom>
					<Header as='h2' textAlign='center' style={{ fontSize: '2em', marginBottom: '.5em' }}>
						CPR with Basic Life Support & AED
					</Header>
				</Fade>
				
				<Grid divided stackable columns='equal'>
					<Fade bottom>
						<Grid.Row>
							<Divider horizontal style={{ margin: '5em 0' }}>
								CPR with BLS & AED &nbsp; | &nbsp; 1 day
							</Divider>
							<Grid.Column style={{ padding: '0 2em 0 0' }}>
								Not only does this course deal with the use of an AED and the above syllabus, but
								it also includes vital training in resuscitation and choking procedures. A minimum 
								of six contact hours in the classroom, consisting of practical and theoretical 
								activities.
							</Grid.Column>
						</Grid.Row>
					</Fade>
				</Grid>

				<Fade bottom>
					<Grid stackable columns='equal'>
						<Divider horizontal style={{ margin: '5em 0' }}>Syllabus</Divider>
						<Grid.Row id='cprBlsAedSyllabus' style={{ color: 'white', padding: '4em 0 4em 9em' }}>
							<Grid.Column>
								<List bulleted items={[
										'Responsibilities and reporting', 
										'Dealing with an unresponsive casualty',
										'Assessment of the situation',
										'Paediatric defibrillation',
										'Defibrillation procedures',
									]}
								/>
							</Grid.Column>
							<Grid.Column>
								<List bulleted items={[
										'Resuscitation',
										'Choking',
										'Heart attacks',
										'AED safety and Functions',
										'Infection control',
									]}
								/>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>
				
				<Fade bottom>
					<Grid divided stackable columns='equal'>
						<Grid.Row style={{ margin: '5em 0' }}>
							<Grid.Column style={{ padding: '0 2em 0 0' }}>
								Each student will also receive a free comprehensive fully illustrated training 
								book to supplement the Emergency Paediatric First Aid course this will be 
								provided in your training pack.<br/><br/>
								A maximum of 12 students are allowed and must be a minimum of 16 years of age 
								and a certificate can be offered to all, subject to assessment. It is the 
								employer's responsibility to ensure that the student is suitable for that role.
							</Grid.Column>
							<Grid.Column style={{ padding: '0 0 0 2em' }}>
								This qualification must be renewed every 3 years. It is recommended that every 
								first aider completes refresher training annually to keep their skills current 
								and competent.
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>
			</Container>
		)
	}
}