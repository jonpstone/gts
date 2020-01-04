import React from 'react'
import Fade from 'react-reveal/Fade'
import { Container, Header, Divider, Grid, List } from 'semantic-ui-react'

export default class LockDownConsultancy extends React.Component {

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	render() {
		return (
			<Container style={{ marginTop: '2em', fontSize: '1.2em', lineHeight: '1.5' }}>

				<Header as='h2' textAlign='center' style={{ fontSize: '2em' }}>
					Lockdown Training and Consultancy
				</Header>
		
				<Grid divided stackable columns='equal' style={{ marginTop: '3em' }}>
					<Grid.Row>
						In the current security climate across the United Kingdom and Europe, it is vital that identified
						potential targets are fully prepared to react effectively and instantly. Having a Lockdown 
						procedure in place is essential, however your Lockdown is only as good as the people doing it.
					</Grid.Row>
					<Divider horizontal style={{ margin: '5em 0' }}>Ask yourself these simple questions</Divider>
					<Grid.Row 
						id='lockdownQuestions' 
						textAlign='center'
						style={{ color: 'white', padding: '2em 0', fontSize: '1.5em' }}
					>
						<Grid.Column>
							<List bulleted items={[
									'Do you have a Lockdown procedure?',
									'Do your staff know and understand it?',
									'Do they have the confidence and training to achieve it?',
									'Are you confident it will work when it needs to?',
									'Can your staff deal with a knife, gun or blast injuries?',
									'Do you want our team to help?',
								]}
							/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				
				<Fade bottom>
					<Grid divided stackable columns='equal'>
						<Grid.Row style={{ margin: '5em 0' }}>
							<Grid.Column style={{ padding: '0 2em 0 0' }}>
								Our team of subject matter experts from across the military, police and counter-terrorist
								communities have 135 years combined operational experience in counter-threat and control 
								measures implementation in both government and private sectors.
							</Grid.Column>
							<Grid.Column style={{ padding: '0 0 0 2em' }}>
								See below the available options available from our team.&nbsp;
								<a href={"mailto:enquiries@golbourntrainingsolutions.co.uk}"}>Contact</a> us today to 
								find the right option for you.
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>

				<Fade bottom>
					<Grid stackable columns='equal'>
						<Grid.Row>
							<Divider horizontal style={{ margin: '0 0 5em' }}>
								Option 1 &nbsp; | &nbsp; Basic Package
							</Divider>
							<Grid.Column style={{ padding: '1em', backgroundColor: '#c8dbe3', color: '#4f4f4f' }}>
								One of our instructors will meet with the Senior Leadership or Management Team to gain 
								knowledge of current procedures and understand the layout.  They will then comprise a 
								recommendation report, this will inform areas of improvement and recommendations.
							</Grid.Column>
							<Grid.Column id='lockdownOptionOne'></Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>

				<Fade bottom>
					<Grid stackable columns='equal'>
						<Grid.Row>
							<Divider horizontal style={{ margin: '5em 0' }}>
								Option 2 &nbsp; | &nbsp; Intermediate Package
							</Divider>
							<Grid.Column id='lockdownOptionTwo'></Grid.Column>
							<Grid.Column style={{ padding: '1em', backgroundColor: '#acc2b1', color: 'white' }}>
								One of our instructors will meet with the Senior Leadership or Management Team to gain 
								knowledge of current procedures and understand the layout. They will then design the bespoke 
								procedures for your organisation within a week of this meeting.  This procedure will then be
								shared with the management team and once approved the staff will then undergo training in 
								the	new procedures.
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>

				<Fade bottom>
					<Grid padded stackable columns='equal'>
						<Grid.Row>
							<Divider horizontal style={{ margin: '5em 0' }}>
								Option 3 &nbsp; | &nbsp; Intermediate Plus Package
							</Divider>
							<Grid.Column style={{ padding: '1em', backgroundColor: '#e6e9ed', color: '#4f4f4f' }}>
								One of our instructors will meet with the Senior Leadership or Management Team to gain 
								knowledge of current procedures and understand the layout. They will then design the bespoke
								procedures for your organisation within a week of this meeting.  This procedure will then 
								be shared with the management team and once approved, the staff will then undergo training
								in the new procedures. All first aiders can undergo 3 hour upgrade CPD Regulated trauma 
								training to deal with catastrophic injuries, ideal for first aid cover to Europe. HSE 
								compliant qualification to buy and use frontline trauma first aid equipment like 
								tourniquets, haemostatic products and chest seals.  
							</Grid.Column>
							<Grid.Column id='lockdownOptionThree'></Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>

				<Fade bottom>
					<Grid stackable columns='equal' style={{ marginBottom: '2em' }}>
						<Grid.Row>
							<Divider horizontal style={{ margin: '5em 0' }}>
								Option 4 &nbsp; | &nbsp; Advanced Package - Serious Incident Control Measures
							</Divider>
							<Grid.Column id='lockdownOptionFour'></Grid.Column>
							<Grid.Column style={{ padding: '1em', backgroundColor: '#e0c8bf', color: 'white' }}>
								The S.I.C.M Package can be suitable as a stand alone management system or as an integrated 
								cell of your current Corporate Incident Management system. See the menu to the left for 
								further information.
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>
			</Container>
		)
	}
}
