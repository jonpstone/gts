import React from 'react'
import Fade from 'react-reveal/Fade'
import { Container, Header, Divider, Grid, List, Button, Icon  } from 'semantic-ui-react'

export default class MentalHealthFirstAid extends React.Component {
	constructor(props) {
		super(props);
		this.firstFocus = React.createRef()
		this.secondFocus = React.createRef()
	}

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	handleLeftOnClick = (event) => {
        if(this.firstFocus.current){
            this.firstFocus.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "start"
            })
		}
	}
	
	handleRightOnClick = (event) => {
		if(this.secondFocus.current){
			this.secondFocus.current.scrollIntoView({
				behavior: "smooth", 
				block: "start"
			})
		}
	}
		
	render() {
		return (
			<Container style={{ marginTop: '2em', fontSize: '1.2em' }}>
			
				<Header as='h2' textAlign='center' style={{ fontSize: '2em', marginBottom: '1.5em' }}>
					Mental Health First Aid
				</Header>

				<Container textAlign='center'>
					<Button 
						inverted 
						color='blue' 
						size='huge' 
						onClick={this.handleLeftOnClick} 
						style={{ marginRight: '1.2em'}}
					>
						&nbsp; Level 2 Award &nbsp;
						<Icon name='angle down'/>
					</Button>
					<Button inverted color='blue' size='huge' onClick={this.handleRightOnClick}>
					&nbsp; Level 3 Award &nbsp;
						<Icon name='double angle down'/>
					</Button>
				</Container>

				<Grid divided stackable columns='equal'>
					<Divider horizontal style={{ margin: '5em 0' }}>
						Level 1 Award in Awareness of First Aid for Mental Health &nbsp; | &nbsp; 4 hours
					</Divider>
					<Grid.Row>
						<Grid.Column style={{ padding: '0 2em 0 0' }}>
							Anyone can be affected by a mental health condition either themselves or a family member, 
							friend or colleague. All members of the public can benefit from this course and it is a 
							great stepping stone into First Aid for Mental Health.
						</Grid.Column>
						<Grid.Column style={{ padding: '0 0 0 2em' }}>
							This awareness course is suitable for everyone as it provides learners with the knowledge to
							recognise a suspected mental health condition and the skills to start a conversation and be 
							able to signpost a person towards professional help.
						</Grid.Column>
					</Grid.Row>
				</Grid>
				
				<Fade bottom>
					<Grid stackable columns='equal'>
						<Divider horizontal style={{ margin: '5em 0' }}>Syllabus</Divider>
						<Grid.Row id='mentalHealthOneSyllabus' style={{ color: 'white', padding: '2em 0 2em 7em' }}>
							<Grid.Column>
								<List bulleted style={{ fontSize: '2em', padding: '2em' }} items={[
										'What is First Aid for Mental Health?', 
										'Identifying mental health conditions',
										'Providing advice and starting a conversation',
									]}
								/>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>

				<Fade bottom>
					<Grid divided stackable columns='equal'>
						<Grid.Row style={{ margin: '5em 0 3em 0' }}>
							<Grid.Column style={{ padding: '0 2em 0 0' }}>
								Summative practical assessment is ongoing by the instructor each day, along with a 
								written assessment on each day. A Level 1 Award in Awareness of First Aid for Mental 
								Health will be issued to the learner, subject to successful assessment. No external 
								assessors are required.
							</Grid.Column>
							<Grid.Column style={{ padding: '0 0 0 2em' }}>
								<p>
									Upon successful completion of the qualification assessment, Learners will be awarded
									the Ofqual regulated Level 1 Award in Awareness of First Aid for Mental	Health.
								</p>
								<p>
									A maximum of 12 students can be accommodated on this course and all candidates must
									be a minimum of 16 years of age to qualify.
								</p>
								<div ref={this.firstFocus}></div>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>
				
				<Fade bottom>
					<Grid divided stackable columns='equal'>
						<Divider horizontal style={{ margin: '5em 0' }}>
							Level 2 Award in First Aid for Mental Health &nbsp; | &nbsp; 1 day
						</Divider>
						<Grid.Row>
							<Grid.Column style={{ padding: '0 2em 0 0' }}>
								This course is suitable for everyone but has been designed to help employers to provide	a 
								positive mental health culture within the workplace and to provide learners with 
								comprehensive knowledge on a range of the most common mental health conditions and the 
								skills to be able to act should a condition be suspected.
							</Grid.Column>
							<Grid.Column style={{ padding: '0 0 0 2em' }}>							
								Learners undertaking this course will be considered First Aiders for Mental Health and be a 
								point of contact within the workplace to help and support those with a suspected mental 
								health condition.
							</Grid.Column>
							<Divider horizontal style={{ margin: '5em 0' }}>❖</Divider>
							<Grid.Column style={{ padding: '0 2em 0 0' }}>
								Building on the Level 1 Award in Awareness of First Aid for Mental Health this course 
								introduces the First Aid for Mental Health Action Plan which allows learners to provide 
								their peers with comprehensive guidance and support for a suspected mental health condition. 
								Learners will be able to provide signposting to professional help and support that person 
								whilst they are receiving professional assistance.
							</Grid.Column>
							<Grid.Column style={{ padding: '0 0 0 2em' }}>
								This course also covers the effects of drugs and alcohol and provides learners with the 
								skills and knowledge to	assist employers in implementing a positive mental health culture to
								support employees within a workplace.
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>

				<Fade bottom>
					<Grid stackable columns='equal'>
						<Divider horizontal style={{ margin: '5em 0' }}>Syllabus</Divider>
						<Grid.Row id='mentalHealthTwoSyllabus' style={{ color: 'white', padding: '2em 0 2em 9em' }}>
							<Grid.Column>
								<List bulleted style={{ fontSize: '2em', padding: '2em' }} items={[
										'What is First Aid for Mental Health?',
										'Identifying mental health conditions',
										'Providing advice and starting a conversation',
										'Drugs and alcohol',
										'First Aid for Mental Health action plan',
										'First Aid for Mental Health in the workplace',
									]}
								/>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>
				
				<Fade bottom>
					<Grid divided stackable columns='equal'>
						<Grid.Row style={{ margin: '5em 0 3em 0' }}>
							<Grid.Column style={{ padding: '0 2em 0 0' }}>
								Summative practical assessment is ongoing by the instructor each day, along with 
								a written assessment on each day. A Level 2 Award in First Aid for Mental Health 
								will be issued to the learner, subject to successful assessment. No external 
								assessors are required.
							</Grid.Column>
							<Grid.Column style={{ padding: '0 0 0 2em' }}>
								<p>
									Upon successful completion of the qualification assessment, Learners will be 
									awarded the Ofqual regulated Level 2 Award in First Aid for Mental Health.
								</p>
								<p>
									A maximum of 12 students can be accommodated on this course and all candidates 
									must be a minimum of 16 years of age to qualify.
								</p>
								<div ref={this.secondFocus}></div>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>
				
				<Fade bottom>
					<Grid divided stackable columns='equal'>
						<Divider horizontal style={{ margin: '5em 0' }}>
							Level 3 Award in Supervising First Aid for Mental Health &nbsp; | &nbsp; 2 days
						</Divider>
						<Grid.Row>
							<Grid.Column style={{ padding: '0 2em 0 0' }}>
								This course builds on the Level 2 Award in First Aid for Mental Health and covers a wider 
								range of mental health conditions and goes into detail on the range of therapy and 
								professional support that a person may be given by professional bodies during treatment for 
								a mental health condition.
							</Grid.Column>
							<Grid.Column style={{ padding: '0 0 0 2em' }}>							
								Learners undertaking this course will be considered First Aiders for Mental Health and be a 
								point of contact within the workplace to help and support those with a suspected mental 
								health condition.
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>

				<Fade bottom>
					<Grid stackable columns='equal'>
						<Divider horizontal style={{ margin: '5em 0' }}>Syllabus</Divider>
						<Grid.Row id='mentalHealthThreeSyllabus' style={{ color: 'white', padding: '2em 0 2em 9em' }}>
							<Grid.Column>
								<List bulleted style={{ fontSize: '2em', padding: '2em' }} items={[
										'What is First Aid for Mental Health?',
										'Identifying mental health conditions',
										'Providing advice and starting a conversation',
										'Drugs and alcohol',
										'First Aid for Mental Health action plan',
										'A large range of Mental Health conditions covered in detail'
									]}
								/>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>
				
				<Fade bottom>
					<Grid divided stackable columns='equal'>
						<Grid.Row style={{ margin: '5em 0 3em 0' }}>
							<Grid.Column style={{ padding: '0 2em 0 0' }}>
								Summative practical assessment is ongoing by the instructor each day, along with 
								a written assessment on each day. A Level 3 Award in Supervising First Aid for Mental 
								Health will be issued to the learner, subject to successful assessment. No external 
								assessors are required.
							</Grid.Column>
							<Grid.Column style={{ padding: '0 0 0 2em' }}>
								<p>
									Upon successful completion of the qualification assessment, Learners will be 
									awarded the Ofqual regulated Level 3 Award in Supervising First Aid for Mental 
									Health.
								</p>
								<p>
									A maximum of 12 students can be accommodated on this course and all candidates 
									must be a minimum of 16 years of age to qualify.
								</p>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>
			</Container>
		)
	}
}
