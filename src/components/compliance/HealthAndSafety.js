import React from 'react'
import Fade from 'react-reveal/Fade'
import { Container, Header, Divider, Grid, List, Button, Icon } from 'semantic-ui-react'

export class HealthAndSafety extends React.Component {
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
			<Container style={{ marginTop: '2em', fontSize: '1.2em', lineHeight: '1.5' }}>
			
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
						<Icon name='double angle down'/>
					</Button>
				</Container>

				<Grid stackable columns='equal'>
					<Grid.Row style={{ margin: '3em 0' }}>
						<Grid.Column>
							All workers have a right to work in places where risks to their health and safety are 
							properly controlled. Health and safety is there to help prevent you from suffering injury or
							illness	through work.
						</Grid.Column>
					</Grid.Row>
					<Grid.Row id='healthAndSafetySyllabus' style={{ color: 'white', padding: '3em 3em 3em 5em', fontSize: '1.5em' }}>
						<Grid.Column>
							<List bulleted items={[
									'Carryout Risk Assessments',
									'Put in place control measures',
									'Provide information',
									'Provide adequate training',
									'Provide appropriate level of supervision'
								]}
							/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				
				<Fade bottom>
					<Grid divided stackable columns='equal'>
						<Divider horizontal style={{ margin: '5em 0' }}>
							Level 1 Health & Safety in the workplace &nbsp; | &nbsp; 4 hours
						</Divider>
						<Grid.Row>
							<Grid.Column style={{ padding: '0 2em 0 0' }}>
								This is an excellent introduction to health and safety in the workplace and will benefit any
								worker, in any industry or sector and accommodates induction training for the new employee 
								very well.
							</Grid.Column>
							<Grid.Column style={{ padding: '0 0 0 2em' }}>
								All aspects of Health and Safety are important to a business whether you are an employee, 
								contractor or supplier and this half-day course will benefit both the learner and the 
								business, ensuring that the working environment is a safe and healthy one.
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>
				
				<Fade bottom>
					<Grid stackable columns='equal'>
						<Divider horizontal style={{ margin: '5em 0' }}>Syllabus</Divider>
						<Grid.Row id='healthAndSafetyOneSyllabus' style={{ color: 'white', padding: '3em 3em 3em 5em', fontSize: '1.5em' }}>
							<Grid.Column>
								<List bulleted items={[
										'Understanding the importance of health, safety and welfare standards in the workplace',
										'Knowing how hazards and risks are controlled in the workplace',
										'Being aware of the main causes and effects of poor health and safety at work',
										'Understanding how health and safety information is communicated in the workplace'
									]}
								/>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>

				<Fade bottom>
					<Grid divided stackable columns='equal'>
						<Divider horizontal style={{ margin: '5em 0' }}>
							Level 2 Health & Safety in the workplace &nbsp; | &nbsp; 1 Day
						</Divider>
						<Grid.Row>
							<Grid.Column style={{ padding: '0 2em 0 0' }}>
								This is an excellent introduction to health & safety in the workplace and will benefit 
								all employees, particularly those who may be accepting a health and safety role, such as
								a safety representative within their organisation, e.g. office or site manager.
							</Grid.Column>
							<Grid.Column style={{ padding: '0 0 0 2em' }}>
								Successful candidates will be awarded a national Level 2 (Level 5 in Scotland) 
								qualification which will provide an ideal platform to higher level training or career 
								development.
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>
				
				<Fade bottom>
					<Grid stackable columns='equal'>
						<Divider horizontal style={{ margin: '5em 0' }}>Syllabus</Divider>
						<Grid.Row 
							id='healthAndSafetyTwoSyllabus' 
							style={{ color: 'white', padding: '3em 3em 3em 5em', margin: '0 0 4em 0', fontSize: '1.5em' }}
						>
							<Grid.Column>
								<List bulleted items={[
										'The roles and responsibilities for health, safety and welfare in the workplace',
										'The value and process of risk assessments',
										'The identification and control of workplace hazards',
										'How to respond to workplace incidents and accidents'
									]}
								/>
								<div ref={this.firstFocus}></div>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>

				<Fade bottom>
					<Header as='h2' textAlign='center' style={{ fontSize: '2em', marginBottom: '.5em' }}>
						Manual Handling
					</Header>
				</Fade>

				<Fade bottom>
					<Grid divided stackable columns='equal'>
						<Divider horizontal style={{ margin: '5em 0' }}>
							Level 2 Manual Handling Course (Principles and Practice) &nbsp; | &nbsp; 1 Day
						</Divider>
						<Grid.Row>
							<Grid.Column style={{ padding: '0 2em 0 0' }}>
								<p>
									We are all exposed at times to some form of manual handling such as lifting, carrying, 
									pulling and pushing actions that can be compounded by simultaneous movements such as 
									climbing or pivoting. Personal injuries resulting from incorrect manual handling in the 
									workplace accounts for over one million working days lost per year, as well as the pain and 
									suffering experienced by the casualties. Correct manual handling techniques can make a huge 
									difference.
								</p>
								<p>
									The risks arising from manual handling have been recognised by the Health and Safety 
									Executive for many years, as evidenced in their regulations and advisory activities 
									promoting good practice.
								</p>
							</Grid.Column>
							<Grid.Column style={{ padding: '0 0 0 2em' }}>
								<p>
									This course provides an ideal approach to safer and more effective manual handling – not
									only meeting HSE recommendations, but also promoting good and safe practices in any 
									situation.
								</p>

								<p>
									The Regulations require employers to provide their employees with health and safety 
									information and training – supplemented, as necessary, with more specific 
									information and training on manual handling injury risks and prevention.
								</p>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>

				<Fade bottom>
					<Grid stackable columns='equal'>
						<Divider horizontal style={{ margin: '5em 0' }}>Syllabus</Divider>
						<Grid.Row 
							id='manualHandlingSyllabus' 
							style={{ color: 'white', padding: '3em 3em 3em 5em', margin: '0 0 4em 0', fontSize: '1.5em' }}
						>
							<Grid.Column>
								<List bulleted items={[
										'Understand the reasons for safe manual handling',
										'Understand how manual handling risk assessments contribute to improving health and safety',
										'Understand the principles, types of equipment and testing requirements associated with manual handling safety',
										'Be able to apply safe manual handling principles'
									]}
								/>
								<div ref={this.secondFocus}></div>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>

				<Fade bottom>
					<Header as='h2' textAlign='center' style={{ fontSize: '2em', marginBottom: '.5em' }}>
						Fire Safety
					</Header>
				</Fade>

				<Fade bottom>
					<Grid divided stackable columns='equal'>
						<Divider horizontal style={{ margin: '5em 0' }}>
							Level 2 Fire Safety &nbsp; | &nbsp; 2 days
						</Divider>
						<Grid.Row>
							<Grid.Column style={{ padding: '0 2em 0 0' }}>
								You will, no doubt, be well aware of the potentially devastating effects of fires in the
								workplace in terms of lives lost, injuries, damage to property and the environment, and 
								to business continuity. You may also be aware that it is believed that most fires are 
								preventable. The importance of fire safety in the workplace is underpinned by health and
								safety legislation that places a duty on employers to establish policies and procedures 
								and ensure their employees receive appropriate training.
							</Grid.Column>
							<Grid.Column style={{ padding: '0 0 0 2em' }}>
								This Fire Safety Training Course is designed for employees who want to develop their 
								basic fire safety awareness in order to assist their employer by undertaking more 
								specific fire safety roles in the workplace to manage fire risk
								(e.g. as fire wardens/marshals/stewards etc.) Successful candidates will be awarded a 
								national level 2 qualification (Level 5 in Scotland).
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>
				
				<Fade bottom>
					<Grid stackable columns='equal'>
						<Divider horizontal style={{ margin: '5em 0' }}>Syllabus</Divider>
						<Grid.Row 
							id='fireSyllabus' 
							style={{ color: 'white', padding: '3em 3em 3em 5em', fontSize: '1.5em' }}
						>
							<Grid.Column>
								<List bulleted items={[
										'The hazards and risks associated with fire in the workplace',
										'How fire risk is controlled in the workplace',
										'The role of the nominated fire warden',
										'The principles and practice of fire safety management at work'
									]}
								/>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>

				<Fade bottom>
					<Grid divided stackable columns='equal'>
					<Divider horizontal style={{ margin: '5em 0' }}>Note</Divider>
						<Container textAlign='center' style={{ marginBottom: '2em' }}>
							<strong>Golbourn training solutions also offer a Bespoke in house Fire Safety Awareness course.</strong>
						</Container>
					</Grid>
				</Fade>
			</Container>
		)
	}
}

export default HealthAndSafety;