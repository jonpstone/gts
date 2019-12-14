import React from 'react'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom'
import { Container, Header, Divider, Grid, List, Button, Icon } from 'semantic-ui-react'

export default props =>
	<Container style={{ marginTop: '2em', fontSize: '1.2em' }}>
		<Header as='h2' textAlign='center' style={{ fontSize: '2em' }}>
			Bespoke First Aid
		</Header>

		<Grid divided stackable columns='equal'>
			<Divider horizontal style={{ margin: '5em 0' }}>
				Tailored Syllabus
			</Divider>
			<Grid.Row>
				<Grid.Column style={{ padding: '0 2em 0 0' }}>
					Golbourn Training Solutions will develop a First Aid Course to meet your 
					organizations specific needs, we have run courses for Scout Groups, Cadet Forces, 
					Sporting Groups and many more.<br/><br/>
					Alternately we can draw up a course based on what you want to achieve.
				</Grid.Column>
				<Grid.Column style={{ padding: '0 0 0 2em' }}>
					If you have a set program or syllabus, we will base our training model to meet 
					its specific needs.<br/><br/>
					Practical and theory based assessments, with scenario exercises can be used to great effect.
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column textAlign='center' style={{ paddingTop: '1em' }}>
					Please Contact us to arrange a course just for you.<br/><br/>
					<Button inverted size='huge' color='blue' as={Link} to='/contact' style={{ margin: '3em 0' }}>
						&nbsp; Call Today &nbsp;
						<Icon name='angle right'/>
					</Button>
				</Grid.Column>
			</Grid.Row>
		</Grid>

		<Header as='h2' textAlign='center' style={{ fontSize: '2em', marginBottom: '2em' }}>
			Junior First Aid
		</Header>

		<Grid divided stackable columns='equal'>
			<Grid.Row>
				At Golbourn Training Solutions we believe that children can save lives too. That is why we 
				have designed our Junior First Aiders Course. Aimed at teaching children as young as eight 
				how to save lives.<br/><br/>
				This course can be taught in a whole day or broken down to four 2 hour lessons. Essentially 
				we can work with you to make the course fit around your other needs.
			</Grid.Row>
		</Grid>

		<Fade bottom>
			<Grid stackable columns='equal'>
				<Divider horizontal style={{ margin: '5em 0' }}>Syllabus</Divider>
				<Grid.Row id='juniorSyllabus' style={{ color: 'white', padding: '2em 0 2em 9em' }}>
					<Grid.Column>
						<List items={[
								'Contents of the First Aid Box',
								'',
								'Required first aid numbers and information',
								'',
								'What to do if you find a poorly person',
								'',
								'CPR',
								'',
								'Recovery position',
								'',
								'Heart attack/Stroke',
							]}
						/>
					</Grid.Column>
					<Grid.Column>
						<List items={[
								'Asthma',
								'',
								'Choking',
								'',
								'Burns',
								'',
								'Epilepsy',
								'',
								'Bleeding',
							]}
						/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Fade>
	</Container>