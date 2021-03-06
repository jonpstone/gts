import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Grid, Header, List, Segment } from 'semantic-ui-react'

export default props =>
	<Segment inverted vertical style={{ padding: '5em' }}>
		<Grid container divided inverted stackable>
			<Grid.Row>
				<Grid.Column width={1}>
				</Grid.Column>
				<Grid.Column width={4}>
					<Header as='h4' inverted>
						Golbourn Training Solutions Ltd
					</Header>
					<p>
						The Apex, 2 Sheriffs Orchard<br/>
						Coventry<br/>
						CV1 2PP<br/>
						United Kingdom<br/>
					</p>
				</Grid.Column>
				<Grid.Column width={3}>
					<Header inverted as='h4' content='Our Company' />
					<List link inverted >
						<List.Item as={Link} to="/about" style={{ outline: 'none' }}>About</List.Item >
						<List.Item as={Link} to="/contact" style={{ outline: 'none' }}>Contact</List.Item>
						<List.Item as={Link} to="/sitemap" style={{ outline: 'none' }}>Sitemap</List.Item>
						<List.Item as={Link} to="/policy" style={{ outline: 'none' }}>Policy</List.Item>
					</List>
				</Grid.Column>
				<Grid.Column width={3}>
					<Header inverted as='h4' content='Resources' />
					<List link inverted>
						<List.Item as='a' href='https://www.hse.gov.uk/' target='_blank' style={{ outline: 'none' }}>
							Health & Safety Executive
						</List.Item>
						<List.Item as='a' href='https://www.gov.uk/government/publications/first-aid-in-schools' target='_blank' style={{ outline: 'none' }}>
							First Aid in Schools 
						</List.Item>
						<List.Item as='a' href='https://www.nhs.uk/using-the-nhs/nhs-services/mental-health-services/' target='_blank' style={{ outline: 'none' }}>
							Mental Health Services
						</List.Item>
						<List.Item as='a' href='https://www.mi5.gov.uk/threat-levels' target='_blank' style={{ outline: 'none' }}>
							Terrorist Threat Level
						</List.Item>
					</List>
				</Grid.Column>
				<Grid.Column width={5}>
					<List horizontal>
						<List.Item style={{ margin: '0 0 .4em 0', padding: '0' }}>
							<Button 
								inverted 
								size='huge' 
								icon='facebook'
								as='a'
								href='https://www.facebook.com/golbourntrainingsolutions/'
								target='_blank'						
							/>
						</List.Item>
						<List.Item style={{ margin: '0 0 .4em 0', padding: '0' }}>
							<Button 
								inverted 
								size="huge" 
								icon='twitter'
								as='a'
								href='https://twitter.com/G_T_S_Training'
								target='_blank'
							/>
						</List.Item>
						<List.Item style={{ margin: '0', padding: '0' }}>
							<Button 
								inverted 
								size='huge' 
								icon='linkedin'
								href='https://www.linkedin.com/company/golbourn-training-solutions-ltd/' 
								target='_blank'
							/>
						</List.Item>
						<List.Item style={{ margin: '0', padding: '0' }}>
							<Button
								inverted 
								size="huge" 
								icon='instagram'
								as='a'
								href='https://www.instagram.com/'
								target='_blank'
							/>
						</List.Item>
					</List>
				<Grid.Row>
					<p style={{ fontSize: '.8em', marginTop: '2em', color: 'grey' }}>
						Registered in England and Wales, No. 11621225<br/>
						© Golbourn Training Solutions 
					</p>
				</Grid.Row>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</Segment>
