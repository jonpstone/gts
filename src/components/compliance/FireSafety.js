import React from 'react'
import Fade from 'react-reveal/Fade'
import { Container, Header, Divider, Grid, List } from 'semantic-ui-react'

export class FireSafety extends React.Component {

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	render() {
		return (
			<Container style={{ marginTop: '2em', fontSize: '1.2em' }}>
	
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
							Scotland).
						</Grid.Column>
					</Grid.Row>
				</Grid>
				
				<Fade bottom>
					<Grid stackable columns='equal'>
						<Divider horizontal style={{ margin: '5em 0' }}>Course Content</Divider>
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

export default FireSafety;

// import React from 'react'
// import { Container, Header } from 'semantic-ui-react'

// export default props => 
//   <Container text style={{ marginTop: '7em' }}>
//     <Header as='h2'>Fire Safety</Header>
//     <Header as='h5'>Level 2 Fire Safety : 1-day course</Header>
    
//     <strong>
//       You will, no doubt, be well aware of the potentially devastating effects of fires 
//       in the workplace in terms of lives lost, injuries, damage to property and the 
//       environment, and to business continuity. You may also be aware that it is believed 
//       that most fires are preventable. The importance of fire safety in the workplace is 
//       underpinned by health and safety legislation that places a duty on employers to 
//       establish policies and procedures and ensure their employees receive appropriate 
//       training.
//     </strong>

//     <strong>
//       This Fire Safety Training Course is designed for employees who want to develop 
//       their basic fire safety awareness in order to assist their employer by undertaking 
//       more specific fire safety roles in the workplace to manage fire risk (e.g. as fire 
//       wardens/marshals/stewards etc.) Successful candidates will be awarded a national 
//       level 2 qualification (Level 5 in Scotland).
//     </strong>

//     <strong>Syllabus</strong>
//     <p>
//       A range of subjects are covered including:
//     </p>
    
//     <ul>
//       <li>The hazards and risks associated with fire in the workplace</li>
//       <li>How fire risk is controlled in the workplace</li>
//       <li>The role of the nominated fire warden</li>
//       <li>The principles and practice of fire safety management at work</li>
//     </ul>

//     <p>
//       Golbourn training solutions also offer a Bespoke in house Fire Safety Awareness 
//       course.
//     </p>
//   </Container>
