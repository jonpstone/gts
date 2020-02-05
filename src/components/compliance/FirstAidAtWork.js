import React from 'react'
import Fade from 'react-reveal/Fade'
import { Container, Header, Divider, Grid, List, Button, Icon } from 'semantic-ui-react'

export class FirstAidAtWork extends React.Component {
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
		const { mobile } = this.props

		return (
			<Container style={{ marginTop: '2em', fontSize: '1.2em', lineHeight: '1.5' }}>
			
				<Header as='h2' textAlign='center' style={{ fontSize: '2em', marginBottom: '1.5em' }}>
					First Aid at Work
				</Header>

				<Container textAlign='center'>
					<Button 
						inverted 
						color='blue' 
						size='huge' 
						onClick={this.handleLeftOnClick} 
						style={{ marginBottom: '.5em'}}
					>
						{
							mobile ? (
								"Emergency First Aid at Work"
							) : (
								<>
									&nbsp; Emergency First Aid at Work &nbsp;
									<Icon name='angle down'/>
								</>
							)
						}
					</Button>
					<Button 
						inverted 
						color='blue' 
						size='huge' 
						onClick={this.handleRightOnClick}
					>
						{
							mobile ? (
								"First Aid at Work Requalification"
							) : (
								<>
									&nbsp; First Aid at Work Requalification &nbsp;
									<Icon name='double angle down'/>
								</>
							)
						}
					</Button>
				</Container>

				{
					!mobile ? (
						<Divider horizontal style={{ margin: '5em 0' }}>
							Level 3 First Aid at Work &nbsp; | &nbsp; 3 days
						</Divider>
					) : (
						<div style={{ margin: '5em 0 3em 0', fontSize: '1em', fontWeight: 'bold' }}>
							Level 3 First Aid at Work | 3 Days
						</div>
					)
				}
				
				<Grid divided stackable columns='equal'>
					<Grid.Row>
						<Grid.Column style={{ padding: '0 2em 0 0' }}>
							This comprehensive three-day course covers a wide range of first aid 
							emergencies, enabling all participants to deal with emergency situations with 
							confidence in a prompt, safe and effective way.
						</Grid.Column>
						<Grid.Column style={{ padding: '0 0 0 2em' }}>
							This course will give the participants a qualification to the highest level of 
							First Aid, meeting the statutory requirements of the Health and Safety 
							(First Aid) Regulations 1981.
						</Grid.Column>
					</Grid.Row>						
				</Grid>
				<Divider horizontal style={{ margin: '5em 0' }}>Course Duration</Divider>
				<Grid>
					<Grid.Row>
						This course runs over 18 hours and is spread over at least 3 days. Ideally, the 
						course should be run over three consecutive days, but we have the flexibility to 
						accommodate your specific needs if you so desire providing it is completed within 
						10 weeks of starting the course and the training sessions last for a minimum of two 
						hours.
					</Grid.Row>
				</Grid>
				
				<Fade bottom>
					<Divider horizontal style={{ margin: '5em 0' }}>Syllabus</Divider>
					<Grid stackable columns='equal'>
						<Grid.Row 
							id='faawSyllabus' 
							style={
								mobile ? 
									{ color: 'white', padding: '2%' } : 
									{ color: 'white', padding: '10%' }
								}
							>
							<Grid.Column>
								<List bulleted items={[
										'Legalities, responsibilities and reporting', 
										'Heart attacks',
										'Dealing with an unresponsive casualty',
										'Eye injuries',
										'Fractures and spinal injuries',
										'Choking',
										'Control of bleeding',
										'Chest injuries',
										'Assessment of the situation',
										'Diabetes'
									]}
								/>
							</Grid.Column>
							<Grid.Column>
								<List bulleted items={[
										'Shock (including Anaphylaxis)', 
										'Asthma',
										'Head injuries',
										'Poisoning',
										'Sprains and strains',
										'Stroke',
										'Burns',
										'Epilepsy',
										'Resuscitation (including AED)',
										'Bandaging'
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
								A maximum of 12 students are allowed and must be a minimum of 14 years of age 
								and a certificate can be offered to all, subject to assessment.  A student 
								cannot assume a responsibility in the workplace until they reach the age of 16, 
								and then it is the employer's responsibility to ensure that the student is 
								suitable for that role.
							</Grid.Column>
							<Grid.Column style={{ padding: '0 0 0 2em' }}>
								Each student will also receive a free comprehensive fully illustrated training
								book to supplement the First Aid at Work course; this will be provided in your 
								training pack.<br /><br/>
								<div ref={this.firstFocus}></div>
								This qualification must be renewed every 3 years. It is recommended that 
								every first aider completes refresher training annually to keep their skills 
								current and competent.
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>

				<Fade bottom>
					<Header as='h2' textAlign='center' style={{ fontSize: '2em', marginBottom: '.5em' }}>
						Emergency First Aid at Work
					</Header>
				</Fade>
				
				<Grid divided stackable columns='equal'>
					<Fade bottom>
						<Grid.Row>
							{
								!mobile ? (
									<Divider horizontal style={{ margin: '5em 0' }}>
										Level 3 Emergency First Aid at Work &nbsp; | &nbsp; 1 day
									</Divider>
								) : (
									<div style={{ margin: '5em 0 3em 0', fontSize: '1em', fontWeight: 'bold' }}>
										Level 3 Emergency First Aid at Work | 1 Day
									</div>
								)
							}
							The Emergency First Aid at Work course will enable your company to meet its 
							regulatory requirements, if after completing a First Aid risk assessment your 
							organisation is classed as a low risk working environment. Golbourn Training 
							Solutions can provide First Aid risk assessment. All learners will have the 
							skills and knowledge to provide basic, lifesaving First Aid in the workplace.
						</Grid.Row>
					</Fade>
					<Fade bottom>
						<Grid.Row>
							<Divider horizontal style={{ margin: '5em 0' }}>Course Duration</Divider>
							This course runs over a minimum of six contact hours in the classroom, consisting
							of practical and theoretical activities. Feel free to reach out to us for further
							details.
						</Grid.Row>
					</Fade>
				</Grid>

				<Fade bottom>
					<Divider horizontal style={{ margin: '5em 0' }}>Syllabus</Divider>
					<Grid stackable columns='equal'>
						<Grid.Row 
							id='emergencyFaawSyllabus' 
							style={
								mobile ? 
									{ color: 'white', padding: '2%' } : 
									{ color: 'white', padding: '10%' }
								}
							>
							<Grid.Column>
								<List bulleted items={[
										'Responsibilities and reporting', 
										'Assessment of the situation',
										'Dealing with an unresponsive casualty',
										'Basic hygiene in First Aid',
										'Burns',
										'Epilepsy'
									]}
								/>
							</Grid.Column>
							<Grid.Column>
								<List bulleted items={[
										'Resuscitation (including AED)', 
										'Anatomy',
										'Minor injuries',
										'Bleeding control',
										'Choking',
										'Shock',
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
								Please note add-ons like +F and Catastrophic Bleed Control can be run in 
								conjunction, this course also includes AED training.<br/><br/>

								Each student will also receive a free comprehensive fully illustrated training 
								book to supplement the Emergency First Aid at Work course this will be provided 
								in your training pack.
							</Grid.Column>
							<Grid.Column style={{ padding: '0 0 0 2em' }}>
								A maximum of 12 students are allowed and must be a minimum of 14 years of age 
								and a certificate can be offered to all, subject to assessment.  A student 
								cannot assume a responsibility in the workplace until they reach the age of 16,
								and then it is the employer's responsibility to ensure that the student is 
								suitable for that role.<br/><br/>
								This qualification must be renewed every 3 years.  It is recommended that every
								first aider completes refresher training annually to keep their skills current 
								and competent.
								<div ref={this.secondFocus}></div>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>

				<Fade bottom>
					<Header as='h2' textAlign='center' style={{ fontSize: '2em', marginBottom: '.5em' }}>
						First Aid at Work Requalification
					</Header>
				</Fade>
				{
					!mobile ? (
						<Divider horizontal style={{ margin: '5em 0' }}>
							Requalification &nbsp; | &nbsp; 2 days
						</Divider>
					) : (
						<div style={{ margin: '5em 0 3em 0', fontSize: '1em', fontWeight: 'bold' }}>
							Requalification | 2 Days
						</div>
					)
				}

				<Fade bottom>
					<Grid divided stackable columns='equal'>
						<Grid.Row>
							<Grid.Column style={{ padding: '0 2em 0 0' }}>
								This two day First Aid at Work course is designed for those who currently hold a 
								First Aid at Work qualification and are due to expire.
							</Grid.Column>
							<Grid.Column style={{ padding: '0 0 0 2em' }}>
								This course runs over a minimum of six contact hours in the classroom, consisting
								of practical and theoretical activities.
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>
				
				<Fade bottom>
					<Divider horizontal style={{ margin: '5em 0' }}>Rules for Attendance</Divider>
					<Grid stackable columns='equal'>
						<Grid.Row 
							id='faawRequal' 
							style={ mobile ? { color: 'white', padding: '2%' } : { color: 'white', padding: '5em' }}>
							<Grid.Column style={{ padding: '0 2em 0 0' }}>
								A First Aider can renew their First Aid at Work qualification by attending a two 
								day	requalification course without question, if within 1 month past the expiry 
								date.
							</Grid.Column>
							<Grid.Column style={{ padding: '0 0 0 2em' }}>
								If the First Aider has lapsed by more than 1 month, but no longer than 3 months, 
								then the First Aider can requalify by attending a two day course providing ‘Special 
								considerations’ have been applied.
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>

				<Fade bottom>
					<Divider horizontal style={{ margin: '5em 0' }}>Special Considerations</Divider>
					<Grid divided stackable columns='equal'>
						<Grid.Row>
							<Grid.Column style={{ padding: '0 2em 0 0' }}>
								A signed letter from the employer to the provider of the training stating the reasons 
								why in their opinion, the First Aider is suitably experienced to attend a 2-day course 
								and does not require a full 3-day FAW course.
							</Grid.Column>
							<Grid.Column style={{ padding: '0 0 0 2em' }}>
								A decision is made by the provider of the training after discussions with the employer, 
								or the First Aider, and deciding that their previous experience is sufficient to attend 
								a two day course.
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>
				
				<Fade bottom>
					<Divider horizontal style={{ margin: '3em 0' }}>Important</Divider>
					<Grid stackable columns='equal'>
						<Grid.Row style={{ marginBottom: '4em' }}>
							<Grid.Column>
								If the First Aider has lapsed beyond 3 months, then they must attend a full 3-day First Aid at Work course.<br/><br/>

								The important thing to remember is that as soon as the certificate expires, the First Aider is no longer considered competent to 
								act as a First Aider in the workplace which may well leave the employer with a shortfall of First Aiders. Therefore, it would be 
								prudent to arrange their First Aid at Work Requalification before they expire.<br/><br/>

								Please note add-ons like +F and Catastrophic Bleed Control can be run in conjunction.
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>
			</Container>
		)
	}
}

export default FirstAidAtWork;