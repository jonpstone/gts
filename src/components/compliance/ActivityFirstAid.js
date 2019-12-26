import React from 'react'
import Fade from 'react-reveal/Fade'
import { Container, Header, Divider, Grid, List } from 'semantic-ui-react'

export default class ActivityFirstAid extends React.Component {

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	render() {
		return (
			<Container style={{ marginTop: '2em', fontSize: '1.2em' }}>
	
				<Header as='h2' textAlign='center' style={{ fontSize: '2em' }}>
					Activity First Aid
				</Header>
		
				<Grid divided stackable columns='equal'>
					<Divider horizontal style={{ margin: '5em 0' }}>
						Level 3 Activity First Aid &nbsp; | &nbsp; 2 days
					</Divider>
					<Grid.Row>
						<Grid.Column style={{ padding: '0 2em 0 0' }}>
							This Level 3 qualification is made up of two units including First Aid Essentials. 
							It is specifically designed for those who are involved in any form of activity, 
							including sports, leisure and recreation.
						</Grid.Column>
						<Grid.Column style={{ padding: '0 0 0 2em' }}>
							Not only is Basic Life Support included, but many other First Aid conditions are 
							also covered, making the full qualification very comprehensive.
						</Grid.Column>
					</Grid.Row>
					<Divider horizontal style={{ margin: '5em 0' }}>Course Duration</Divider>
					<Grid.Row>
						A minimum of 12 contact hours in the classroom, consisting of practical and 
						theoretical activities. Feel free to contact us for further details.
					</Grid.Row>
				</Grid>
				
				<Fade bottom>
					<Grid stackable columns='equal'>
						<Divider horizontal style={{ margin: '5em 0' }}>Syllabus</Divider>
						<Grid.Row id='activitySyllabus' style={{ color: 'white', padding: '2em 0 2em 9em' }}>
							<Grid.Column>
								<List bulleted items={[
										'Responsibilities and reporting',
										'Heart attack',
										'Assessment of the situation',
										'Resuscitation (including AED)',
										'Dealing with an unresponsive casualty',
										'Minor injuries',
										'Basic hygiene in First Aid',
										'Bleeding control',
										'Fractures',
										'Head injuries',
									]}
								/>
							</Grid.Column>
							<Grid.Column>
								<List bulleted items={[
										'Drowning injuries',
										'Diabetes',
										'Electrical injuries',
										'Angina',
										'Spinal injuries',
										'Choking',
										'Heat and cold',
										'Seizures',
										'Burns and Shock',
										'Asthma',
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
								book to supplement the Activity First Aid course this will be provided in your 
								training pack.<br/><br/>
								This qualification must be renewed every 3 years.  It is recommended that every
								first aider completes refresher training annually to keep their skills current 
								and competent.
							</Grid.Column>
							<Grid.Column style={{ padding: '0 0 0 2em' }}>
								A maximum of 12 students are allowed and must be a minimum of 14 years of age 
								and a certificate can be offered to all, subject to assessment. A student 
								cannot assume a responsibility in the workplace until they reach the age of 16, 
								and then it is the employer’s responsibility to ensure that the student is 
								suitable for that role. The certificate will expire as dated on the certificate, 
								irrespective of age.
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>
			</Container>
		)
	}
}
