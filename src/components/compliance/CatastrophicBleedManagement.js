import React from 'react'
import Fade from 'react-reveal/Fade'
import { Container, Header, Divider, Grid, List } from 'semantic-ui-react'

export class CatastrophicBleedManagement extends React.Component {

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	render() {
		return (
			<Container style={{ marginTop: '2em', fontSize: '1.2em', lineHeight: '1.5' }}>
	
				<Header as='h2' textAlign='center' style={{ fontSize: '2em' }}>
					Catastrophic Bleed Management
				</Header>

				<Divider horizontal style={{ margin: '5em 0' }}>
					Catastrophic Bleed Management  &nbsp; | &nbsp; 3 hours
				</Divider>
		
				<Grid divided stackable columns='equal'>
					<Grid.Row>
						<Grid.Column style={{ padding: '0 2em 0 0' }}>
							Our Golbourn Training Solutions Catastrophic Bleed Management Course is ideal for 
							identified high risk industries such as farming, stalking, gun clubs, security, 
							construction, forestry, tree surgery and many more.
						</Grid.Column>
						<Grid.Column style={{ padding: '0 0 0 2em' }}>
							It can be run in the following options:<br/><br/>
								<List bulleted>
									<List.Item>A 2-3 hour stand alone course</List.Item>
									<List.Item>A bolt on to a regulated course, such as EFAW or FAW</List.Item>
									<List.Item> an add-on to the +F bolt on course</List.Item>
									<List.Item> part of the bespoke serious incident control measures course</List.Item>
								</List>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				
				<Fade bottom>
					<Divider horizontal style={{ margin: '5em 0' }}>Course Content</Divider>
					<Grid stackable columns='equal'>
						<Grid.Row id='bleedsSyllabus' style={{ color: 'white', padding: '5em 0 5em 9em' }}>
							<Grid.Column>
								<List bulleted items={[
										'Changes to UK Guidelines',
										'Recognising a Catastrophic External Bleed',
										'Equipment use and maintenance - Pressure Bandages, Tourniquets and multiple CELOX products',
										'Catastrophic External Bleeding Control Measures Methods',
										'Casualty After Care',
										'Dangers of the incorrect usage of Tourniquets and Haemostatic products',
										'Practical training in realistic scenario tests, to suit each client’s environment',
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

export default CatastrophicBleedManagement;