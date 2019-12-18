import React from 'react'
import Fade from 'react-reveal/Fade'
import { Container, Header, Divider, Grid, List, Button, Icon } from 'semantic-ui-react'

export class FireSafety extends React.Component {
	constructor(props) {
		super(props);
		this.emergencyFaawFocus = React.createRef()
		this.faawRequalFocus = React.createRef()
	}

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	handleLeftOnClick = (event) => {
        if(this.emergencyFaawFocus.current){
            this.emergencyFaawFocus.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "start"
            })
		}
	}
	
	handleRightOnClick = (event) => {
		if(this.faawRequalFocus.current){
			this.faawRequalFocus.current.scrollIntoView({
				behavior: "smooth", 
				block: "start"
			})
		}
	}

	render() {
		return (
			<Container style={{ marginTop: '2em', fontSize: '1.2em' }}>

				<Header as='h2' textAlign='center' style={{ fontSize: '2em', marginBottom: '1.5em' }}>
					Health & Safety Training
				</Header>

				<Container textAlign='center'>
					<Button 
						inverted 
						color='blue' 
						size='huge' 
						onClick={this.handleLeftOnClick} 
						style={{ marginRight: '1.2em'}}
					>
						&nbsp; Manual Handling &nbsp;
						<Icon name='angle down'/>
					</Button>
					<Button inverted color='blue' size='huge' onClick={this.handleRightOnClick}>
						&nbsp; Fire Safety &nbsp;
						<Icon name='angle down'/>
					</Button>
				</Container>

				<Grid divided stackable columns='equal'>
					<Divider horizontal style={{ margin: '5em 0' }}>
						Level 3 First Aid at Work &nbsp; | &nbsp; 3 days
					</Divider>
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
					<Divider horizontal style={{ margin: '5em 0' }}>Course Duration</Divider>
					<Grid.Row>
						This course runs over 18 hours and is spread over at least 3 days. Ideally, the 
						course should be run over three consecutive days, but we have the flexibility to 
						accommodate your specific needs if you so desire providing it is completed within 
						10 weeks of starting the course and the training sessions last for a minimum of two 
						hours.
					</Grid.Row>
				</Grid>
				
				<Fade bottom>
					<Grid stackable columns='equal'>
						<Divider horizontal style={{ margin: '5em 0' }}>Syllabus</Divider>
						<Grid.Row id='faawSyllabus' style={{ color: 'white', padding: '2em 0 2em 9em' }}>
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
								<div ref={this.emergencyFaawFocus}></div>
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
							<Divider horizontal style={{ margin: '5em 0' }}>
								Level 3 Emergency First Aid at Work &nbsp; | &nbsp; 1 day
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
						<Grid.Row id='emergencyFaawSyllabus' style={{ color: 'white', padding: '2em 0 2em 9em' }}>
							<Grid.Column>
								<List items={[
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
								<List items={[
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
								<div ref={this.faawRequalFocus}></div>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>
	
				<Header as='h2' textAlign='center' style={{ fontSize: '2em' }}>
					Fire Safety
				</Header>
		
				<Grid divided stackable columns='equal'>
					<Divider horizontal style={{ margin: '5em 0' }}>
						Level 2 Fire Safety &nbsp; | &nbsp; 1 Day
					</Divider>
						<Grid.Row>
						<Grid.Column style={{ padding: '0 2em 0 0' }}>
							You will, no doubt, be well aware of the potentially devastating effects of fires in 
							the workplace in terms of lives lost, injuries, damage to property and the environment, 
							and to business continuity. You may also be aware that it is believed that most fires 
							are preventable. The importance of fire safety in the workplace is underpinned by health 
							and safety legislation that places a duty on employers to establish policies and 
							procedures and ensure their employees receive appropriate training.
						</Grid.Column>
						<Grid.Column style={{ padding: '0 0 0 2em' }}>
							This Fire Safety Training Course is designed for employees who want to develop their basic
							fire safety awareness in order to assist their employer by undertaking more specific fire 
							safety roles in the workplace to manage fire risk (e.g. as fire wardens/marshals/stewards 
							etc.) Successful candidates will be awarded a national level 2 qualification (Level 5 in 
							Scotland). Golbourn training solutions also offer a Bespoke in house Fire Safety Awareness 
							course.
						</Grid.Column>
					</Grid.Row>
				</Grid>
				
				<Fade bottom>
					<Grid stackable columns='equal'>
						<Divider horizontal style={{ margin: '5em 0' }}>Course Content</Divider>
						<Grid.Row id='fireSyllabus' style={{ color: 'white', padding: '5em 0 5em 9em' }}>
							<Grid.Column>
								<List bulleted items={[
										'The hazards and risks associated with fire in the workplace',
										'How fire risk is controlled in the workplace',
										'The role of the nominated fire warden',
										'The principles and practice of fire safety management at work',
									]}
								/>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>
			</Container>
		)
	}
}

export default FireSafety;

// import React from 'react'
// import { Container, Header } from 'semantic-ui-react'

// export default props => 
//   <Container text style={{ marginTop: '7em' }}>
//     <Header as='h2'>Health & Safety Training</Header>

//     <p>
//       All workers have a right to work in places where risks to their health and safety 
//       are properly controlled. Health and safety is about stopping you getting hurt at 
//       work or ill through work. 
//     </p>

//     <p>
//       It is the employer's responsibility to:
//     </p>

//     <ul>
//     <li>Carryout Risk Assessments.</li>
//       <li>Put in place control measures.</li>
//       <li>Provide information.</li>
//       <li>Provide adequate training.</li>
//       <li>Provide appropriate level of supervision.</li>
//     </ul>
    
//     <Header as='h4'>Level 2 Health & Safety in the workplace: 1-day course</Header>
  
//     <p>
//       This is an excellent introduction to health & safety in the workplace and will 
//       benefit all employees, particularly those who may be accepting a health and 
//       safety role, such as a safety representative within their organisation;
//       office/site manager etc.
//     </p>

//     <p>
//       Successful candidates will be awarded a national Level 2 (Level 5 in Scotland) 
//       qualification which will provide an ideal platform to higher level training or 
//       career development.
//     </p>

//     <strong>Syllabus</strong>

//     <p>A range of subjects are covered on this course including:</p>

//     <ul>
//       <li>The roles and responsibilities for health, safety and welfare in the workplace</li>
//       <li>The vaue and process of risk assessments</li>
//       <li>The identification and control of workplace hazards</li>
//       <li>How to respond to workplace incidents and accidents.</li>
//     </ul>

//     <Header as='h4'>Level 1 Health & Safety in the workplace : 4 hour course</Header>
    
//     <p>
//       This is an excellent introduction to health and safety in the workplace and will 
//       benefit any worker, in any industry or sector and accommodates induction training 
//       for the new employee very well.
//     </p>

//     <p>
//       All aspects of Health and Safety are important to a business whether you are an 
//       employee, contractor or supplier and this half-day course will benefit both the 
//       learner and the business, ensuring that the working environment is a safe and 
//       healthy one.
//     </p>

//     <stong>Syllabus</stong>

//     <p>
//       A range of subjects are covered including:
//     </p>
//     <ul>
//       <li>Understanding the importance of health, safety and welfare standards in the workplace</li>
//       <li>Knowing how hazards and risks are controlled in the workplace</li>
//       <li>Being aware of the main causes and effects of poor health and safety at work</li>
//       <li>Understanding how health and safety information is communicated in the workplace.</li>
//     </ul>

//     <p>
//       We can also design bespoke non regulated health and safety courses designed specifically for your individual needs.
//     </p>
// </Container>
