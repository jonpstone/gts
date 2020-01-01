import React from 'react'
import Fade from 'react-reveal/Fade'
import { Container, Header, Divider, Grid, List } from 'semantic-ui-react'

export default class SafeGuarding extends React.Component {

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	render() {
		return (
			<Container style={{ marginTop: '2em', fontSize: '1.2em', lineHeight: '1.5' }}>
	
				<Header as='h2' textAlign='center' style={{ fontSize: '2em', marginBottom: '3em' }}>
					Safeguarding Training
				</Header>
		
				<Grid divided stackable columns='equal'>
					<Grid.Row>
						Safeguarding is how we can protect children, young people and vulnerable adults from abuse or 
						neglect by the actions, or lack of actions, of another person. In order to safeguard and protect
						persons from abuse or neglect we need to learn how to identify vulnerable individuals and take 
						necessary steps to stop abuse and neglect.
					</Grid.Row>
					<Divider horizontal style={{ margin: '5em 0' }}>❖</Divider>
					<Grid.Row style={{ marginBottom: '3em' }}>
						<Grid.Column style={{ padding: '0 2em 0 0' }}>
							Everyone has the right to be safe and live without the fear of abuse, neglect or 
							exploitation and this course aims to teach you how to recognise the signs of abuse and 
							neglect and what actions you can take to stop this from happening and occurring again in the
							future. Abuse, neglect and exploitation can occur anywhere and by anyone, quite often being
							a person of trust.
						</Grid.Column>
						<Grid.Column style={{ padding: '0 0 0 2em' }}>
							This course is designed for all persons, no matter the field that they are directly involved 
							in, to give them the tools and knowledge to make a difference to a vulnerable person’s life. 
							It will also let the practitioner reporting the abuse know how they can safeguard themselves
							in every day work, while seeking help and reporting the incident identified.
						</Grid.Column>
					</Grid.Row>
				</Grid>
				
				<Fade bottom>
					<Grid stackable columns='equal'>
						<Divider horizontal style={{ margin: '5em 0' }}>Syllabus</Divider>
						<Grid.Row 
							id='safeGuardingSyllabus' 
							style={{ color: 'white', padding: '4em 1em 4em 6em', fontSize: '1.3em' }}
						>
							<Grid.Column>
								<List bulleted items={[
										'Safeguarding legislation and guidance',
										'Indictors of abuse or neglect',
										'Making judgments',
										'Communication',
									]}
								/>
							</Grid.Column>
							<Grid.Column>
								<List bulleted items={[
										'Roles and responsibilities',
										'Sharing of information',
										'Dealing with and reporting of allegations and complaints',
										'Assessment and marking',
									]}
								/>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>

				<Fade bottom>
					<Grid divided stackable columns='equal'>
						<Grid.Row style={{ margin: '5em 0' }}>
							Upon successful completion of the qualification assessment, Learners will be awarded an 
							Ofqual national Level 3 Award. A maximum of 12 students can be accommodated on this course 
							and all candidates must be a minimum of 18 years of age to qualify. A range of methods are 
							used, including, practical and questioning (open and multiple-choice).
						</Grid.Row>
					</Grid>
				</Fade>
			</Container>
		)
	}
}
