import React from 'react'
import Fade from 'react-reveal/Fade'
import { Container, Header, Divider, Grid, List, Button, Icon  } from 'semantic-ui-react'

export class BlsAed extends React.Component {
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

export default BlsAed;

{/* <p>
Heart and circulatory disease claims around 200,000 lives each year. Many could 
have been saved if a defibrillator was made available.
</p>

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

<p>
Not only does this course deal with the use of an AED and the above sylla bus but it also includes vital 
training in resuscitation and choking procedures.
</p>

<p>
<strong>Course Duration</strong><br />
A minimum of six contact hours in the classroom, consisting of practical and 
theoretical activities.
</p>

<p>
<strong>Syllabus</strong><br />
A range of subjects are covered including:
</p>

<ul>
<li>Responsibilities and reporting</li> 
<li>Dealing with an unresponsive casualty</li>
<li>Assessment of the situation</li>
<li>Paediatric defibrillation</li>
<li>Defibrillation procedures</li>
<li>Resuscitation</li>
<li>Choking</li>
<li>Heart attacks</li>
<li>AED safety and Functions</li>
<li>Infection control</li>
</ul>

<p>
CPR and AED training is fast becoming a necessity. Golbourn Training Solutions 
not only offer this dedicated CPR and AED training course but also a 4 hour 
Basic Life Support and AED course.
</p>

<p>
Each student will also receive a free comprehensive fully illustrated training 
book to supplement the CPR and AED course this will be provided in your training
pack.
</p>

<p>
A maximum of 12 students are allowed and must be a minimum of 16 years of age.
</p>

<p>
This qualification lasts for 3 years. To renew their qualification after 3 
years, delegates will need to retake the full course. However, it is recommended
that, during the 3 year period, delegates attend annual refresher courses.
</p> */}
// import React from 'react'
// import { Container, Header } from 'semantic-ui-react'

// export default props => 
//   <Container text style={{ marginTop: '7em' }}>
//     <Header as='h2'>Mental Health First Aid</Header>
    
//     <p>
//       There are three levels of Mental Health First Aid course each designed with 
//       different levels of responsibility in mind.
//     </p>

//     <strong>Level 1 Award in Awareness of First Aid for Mental Health – ½ Day</strong>
//     <p>
//       Anyone can be affected by a mental health condition either themselves or a family 
//       member, friend or colleague.
//     </p>

//     <p>
//       This awareness course is suitable for everyone as it provides learners with the 
//       knowledge to recognise a suspected mental health condition and the skills to start
//       a conversation and be able to signpost a person towards professional help.
//     </p>

//     <p>
//       All members of the public can benefit from this course and it is a great stepping 
//       stone into First Aid for Mental Health.
//     </p>

//     <strong>Syllabus</strong>
//     <p>
//       A range of subjects are covered including:
//     </p>

//     <ul>
//       <li>What is First Aid for Mental Health?</li>       
//       <li>Identifying mental health conditions</li>        
//       <li>Providing advice and starting a conversation</li>      
//     </ul>

//     <strong>Level 2 Award in First Aid for Mental Health – 1 Day</strong>
//     <p>
//       This course is suitable for everyone but has been designed to help employers to 
//       provide a positive mental health culture within the workplace and to provide 
//       learners with comprehensive knowledge on a range of the most common mental health 
//       conditions and the skills to be able to act should a condition be suspected.
//     </p>

//     <p>
//       Learners undertaking this course will be considered First Aiders for Mental Health 
//       and be a point of contact within the workplace to help and support those with a 
//       suspected mental health condition.
//     </p>

//     <p>
//       Building on the Level 1 Award in Awareness of First Aid for Mental Health this 
//       course introduces the First Aid for Mental Health Action Plan which allows 
//       learners to provide their peers with comprehensive guidance and support for a 
//       suspected mental health condition. Learners will be able to provide signposting 
//       to professional help and support that person whilst they are receiving professional 
//       assistance.
//     </p>

//     <p>
//       This course also covers the effects of drugs and alcohol and provides learners 
//       with the skills and knowledge to assist employers in implementing a positive 
//       mental health culture to support employees within a workplace.
//     </p>

//     <strong>Syllabus</strong>
//     <p>
//       A range of subjects are covered including:
//     </p>

//     <ul>
//       <li>What is First Aid for Mental Health?</li>
//       <li>Identifying mental health conditions</li>
//       <li>Providing advice and starting a conversation</li>
//       <li>Drugs and alcohol</li>
//       <li>First Aid for Mental Health action plan</li>
//       <li>First Aid for Mental Health in the workplace</li>
//     </ul>

//     <strong>Level 3 Award in Supervising First Aid for Mental Health – 2 Days</strong>
//     <p>
//       This course builds on the Level 2 Award in First Aid for Mental Health and covers 
//       a wider range of mental health conditions and goes into detail on the range of 
//       therapy and professional support that a person may be given by professional bodies 
//       during treatment for a mental health condition.
//     </p>

//     <p>
//       The course is suitable for all persons within a workplace but is aimed at those 
//       who hold a supervisory/managerial level position and who have responsibility for 
//       implementing a positive mental health culture and responsibility for First Aid for 
//       Mental Health within an organisation.
//     </p>

//     <strong>Syllabus</strong>
  
//     <p>
//       A range of subjects are covered including:
//     </p>
//     <ul>
//       <li>What is First Aid for Mental Health?</li>
//       <li>Identifying mental health conditions</li>
//       <li>Providing advice and starting a conversation</li>
//       <li>Drugs and alcohol</li>
//       <li>First Aid for Mental Health action plan</li>
//       <li>First Aid for Mental Health in the workplace</li>
//       <li>A large range of Mental Health conditions covered in detail</li>
//     </ul>

//     <strong>Certification</strong>
//     <p>
//       Upon successful completion of the qualification assessment, Learners will be 
//       awarded the Ofqual regulated Level 3 Award in Supervising First Aid for Mental 
//       Health, Level 2 Award in First Aid for Mental Health or Level 1 Award in Awareness 
//       of First Aid for Mental Health.
//     </p>

//     <strong>Assessment</strong>
//     <p>
//       Summative practical assessment is ongoing by the instructor each day, along with 
//       a written assessment on each day. A Level 3 Award in Supervising First Aid for 
//       Mental Health will be issued to the learner, subject to successful assessment. No 
//       external assessors are required.
//     </p>

//     <strong>Numbers</strong>
//     <p>
//       A maximum of 12 students can be accommodated on this course and all candidates must 
//       be a minimum of 16 years of age to qualify.
//     </p>
//   </Container>
