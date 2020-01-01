import React from 'react'
import Fade from 'react-reveal/Fade'
import { Container, Header, Divider, Grid, List } from 'semantic-ui-react'

export class ActivityFirstAid extends React.Component {

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	render() {
		return (
			<Container style={{ marginTop: '2em', fontSize: '1.2em', lineHeight: '1.5' }}>
	
			<Header as='h2' textAlign='center' style={{ fontSize: '2em' }}>
				Anaphylaxis Management
			</Header>
	
			<Grid divided stackable columns='equal'>
				<Divider horizontal style={{ margin: '5em 0' }}>
					Anaphylaxis Management &nbsp; | &nbsp; 1 day
				</Divider>
				<Grid.Row>
					<Grid.Column style={{ padding: '0 2em 0 0' }}>
						<p>
							An anaphylactic shock, or anaphylaxis, is a life-threatening, serious allergic 
							reaction to an allergen such as food substances or insect stings. If it is not 
							treated appropriately, it may cause death. This training is for qualified First 
							Aiders and Emergency First Aiders to enable them to recognise and treat anaphylaxis 
							safely and effectively.
						</p>
						<p>This is a classroom-based course of 6 contact hours.</p>
					</Grid.Column>
					<Grid.Column style={{ padding: '0 0 0 2em' }}>
						<p>
							When administering a medication, it is important to recognise and differentiate 
							between allergic reactions and the potentially life-threatening anaphylactic reactions 
							immediately. It is also essential to determine whether the individual has had an 
							allergic or anaphylactic response to the medication in the past or prior to 
							administration.
						</p>
						<p>
							This course is suitable for all First Aiders and healthcare professionals, as well as 
							those in a high risk environment where such medication is available.
						</p>
					</Grid.Column>
				</Grid.Row>
			</Grid>
			
			<Fade bottom>
				<Grid stackable columns='equal'>
					<Divider horizontal style={{ margin: '5em 0' }}>Syllabus</Divider>
					<Grid.Row id='anaphylaxisSyllabus' style={{ color: 'white', padding: '2em 0 2em 2em' }}>
						<Grid.Column>
							<List bulleted>
								<List.Item>Describe anaphylaxis</List.Item>
								<List.Item>Identify triggers for anaphylaxis</List.Item>
								<List.Item>Explain the need for an early call for help</List.Item>
								<List.Item>Describe life threatening problems associated with:
									<List.List>
										<List.Item>Airway</List.Item>
										<List.Item>Breathing</List.Item>
										<List.Item>Circulation</List.Item>
										<List.Item>Disability (Neurological status)</List.Item>
										<List.Item>Exposure (Skin and mucosal changes)</List.Item>
									</List.List>
								</List.Item>
							</List>
						</Grid.Column>
						<Grid.Column>
							<List bulleted>
								<List.Item>Explain the treatment for anaphylaxis:
									<List.List>
										<List.Item>Non re-breather mask</List.Item>
										<List.Item>Removal of trigger</List.Item>
										<List.Item>Auto-injector</List.Item>
										<List.Item>Identify key features of adrenaline-auto injectors</List.Item>
										<List.Item>Conduct an initial assessment using the ABCDE approach</List.Item>
										<List.Item>Demonstrate a recovery position</List.Item>
										<List.Item>Demonstrate resuscitation for adult and/or child</List.Item>
										<List.Item>Recognise the need to use an auto-injector</List.Item>
										<List.Item>Prepare medication for administration during anaphylaxis treatment</List.Item>
										<List.Item>Demonstrate the safe use of an adrenaline auto-injector using a training device</List.Item>
										<List.Item>Safely dispose of sharps according to agreed ways of working</List.Item>
										<List.Item>Handover the casualty to a medical professional</List.Item>
									</List.List>
								</List.Item>
							</List>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Fade>
			<Fade bottom>
				<Grid divided stackable columns='equal'>
					<Grid.Row style={{ margin: '5em 0' }}>
						<Grid.Column style={{ padding: '0 2em 0 0' }}>
							<p>
								Each student will also receive a free comprehensive fully illustrated training 
								book to supplement the Anaphylaxis Management course this will be provided in 
								your training pack.
							</p>
							<p>
								A maximum of 12 students are allowed and must be a minimum of 16 years of age.
							</p>  
						</Grid.Column>
						<Grid.Column style={{ padding: '0 0 0 2em' }}>
							<p>
								This qualification lasts for 3 years. To renew their qualification after 3 
								years, delegates will need to retake the full course. However, it is 
								recommended that, during the 3 year period, delegates attend annual refresher 
								courses.
							</p>   
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Fade>
		</Container>
		)
	}
}

export default ActivityFirstAid;