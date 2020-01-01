import React from 'react'
import Fade from 'react-reveal/Fade'
import { Container, Header, Divider, Grid, List, Button, Icon  } from 'semantic-ui-react'

export class PaediatricFirstAid extends React.Component {
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
			<Container style={{ marginTop: '2em', fontSize: '1.2em', lineHeight: '1.5' }}>
			
				<Header as='h2' textAlign='center' style={{ fontSize: '2em', marginBottom: '1.5em' }}>
					Paediatric First Aid
				</Header>

				<Container textAlign='center'>
					<Button 
						inverted 
						color='blue' 
						size='huge' 
						onClick={this.handleOnClick} 
					>
						&nbsp; Emergency Paediatric First Aid &nbsp;
						<Icon name='angle down'/>
					</Button>
				</Container>

				<Grid divided stackable columns='equal'>
					<Divider horizontal style={{ margin: '5em 0' }}>
						Paediatric First Aid &nbsp; | &nbsp; 2 days
					</Divider>
					<Grid.Row>
						<Grid.Column style={{ padding: '0 2em 0 0' }}>
							This course has been developed for those who are working with children and 
							infants. It will be of particular interest to teachers, child minders, crèche 
							assistants, playgroup personnel and anyone else who has a responsibility for the
							welfare of children whilst in their care.<br/><br/>
							It is ideal for individuals who are responsible for children and infants, who 
							wish to gain a nationally accredited Level 3 Award.
						</Grid.Column>
						<Grid.Column style={{ padding: '0 0 0 2em' }}>
							This two-day course satisfies the guidelines and criteria as laid down by the 
							Early Years Foundation Stage (EYFS) and Ofsted. In order to obtain this 
							qualification, you must attend both days and complete the two units of 
							accreditation.
						</Grid.Column>
					</Grid.Row>
					<Divider horizontal style={{ margin: '5em 0' }}>Course Duration</Divider>
					<Grid.Row>
						This course runs over a minimum of 12 hours making up these two units 
						consisting of theoretical and practical work. should be run over two 
						consecutive days, but we have the flexibility to accommodate your specific 
						needs if you so desire providing it is completed within 6 weeks of starting 
						the course.
					</Grid.Row>
				</Grid>
				
				<Fade bottom>
					<Grid stackable columns='equal'>
						<Divider horizontal style={{ margin: '5em 0' }}>Syllabus</Divider>
						<Grid.Row id='paediatricSyllabus' style={{ color: 'white', padding: '2em 0 2em 9em' }}>
							<Grid.Column>
								<List bulleted items={[
										'Responsibilities and reporting',
										'Resuscitation (including AED)',
										'Assessment of the situation',
										'Fainting',
										'Dealing with an unresponsive casualty',
										'Choking',
										'Head injuries',
										'Diabetes',
										'Burns',
										'Shock',
									]}
								/>
							</Grid.Column>
							<Grid.Column>
								<List bulleted items={[
										'Infantile convulsions',
										'Foreign bodies',
										'Control of bleeding',
										'Anaphylaxis',
										'Eye injuries',
										'Fractures',
										'Heat and Cold',
										'Asthma',
										'Sickle cell anemia',
										'Meningitis',
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
								book to supplement the Paediatric First Aid course this will be provided in your
								training pack.
							</Grid.Column>
							<Grid.Column style={{ padding: '0 0 0 2em' }}>
								A maximum of 12 students are allowed and must be a minimum of 16 years of age 
								and a certificate can be offered to all, subject to assessment. It is the 
								employer's responsibility to ensure that the student is suitable for that role.<br /><br/>
								This qualification must be renewed every 3 years. It is recommended that every
								first aider completes refresher training annually to keep their skills current
								and competent.
								<div ref={this.emergencyFocus}></div>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>

				<Fade bottom>
					<Header as='h2' textAlign='center' style={{ fontSize: '2em', marginBottom: '.5em' }}>
						Emergency Paediatric First Aid
					</Header>
				</Fade>
				
				<Grid divided stackable columns='equal'>
					<Fade bottom>
						<Grid.Row>
							<Divider horizontal style={{ margin: '5em 0' }}>
								Emergency Paediatric First Aid &nbsp; | &nbsp; 1 day
							</Divider>
							<Grid.Column style={{ padding: '0 2em 0 0' }}>
								The Emergency First Aid at Work course will enable your company to meet its 
								regulatory requirements, if after completing a First Aid risk assessment your 
								organisation is classed as a low risk working environment. Golbourn Training 
								Solutions can provide First Aid risk assessment. All learners will have the 
								skills and knowledge to provide basic, lifesaving First Aid in the workplace.
							</Grid.Column>
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
					<Grid stackable columns='equal'>
						<Divider horizontal style={{ margin: '5em 0' }}>Syllabus</Divider>
						<Grid.Row id='emergencyPaediatricSyllabus' style={{ color: 'white', padding: '4em 0 4em 9em' }}>
							<Grid.Column>
								<List bulleted items={[
										'Responsibilities and reporting',
										'Resuscitation (including AED)',
										'Dealing with an unresponsive casualty',
										'Minor injuries ',
									]}
								/>
							</Grid.Column>
							<Grid.Column>
								<List bulleted items={[
										'Assessment of the situation',
										'Epilepsy',
										'Wounds and bleeding',
										'Anaphylaxis and Shock',
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

export default PaediatricFirstAid