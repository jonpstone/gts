import React from 'react'
import { Header, Grid, List} from 'semantic-ui-react'
import Fade from 'react-reveal/Fade'
import NavBar from '../layouts/Header'

export default class TeamBuilding extends React.Component {

	componentDidMount() { window.scrollTo(0, 0) }

	render() {
		return (
			<>
				<NavBar path={this.props.location.pathname}/>
				<div id='finish'></div>
				<Fade bottom>
					<Grid borderless stackable verticalAlign='top'>
						<Grid.Row style={{ margin: '5em 0 1em 0' }}>
							<Header as='h3' icon textAlign='center' style={{ fontSize: '2em' }}>
								WOODLAND SURVIVAL COURSE
							</Header>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column
								id='teamBuildingBullets'
								floated='left' 
								width={8} 
								style={{ 
									padding: '2em 4em', 
									marginBottom: '1.5em', 
									color: 'white', 
									fontSize: '1.33em'
								}}
							>
								<p>
									Bring your team together in this exciting outdoor experience, they will 
									develop new skills and learn dynamic ways to work together to solve any task
								</p>
								<List bulleted items={[
									'Building Shelter',
									'Making Fire',
									'Purifying Water',
									'Hunting Food',
									'Navigation',
									'Team Command Tasks',
									'Assault Courses (optional)',
									'Problem Solving'
								]} />
							</Grid.Column>
							<Grid.Column id='paraSurvival' floated='right' width={8} style={{ padding: '2.65em 4em' }}>
								<p style={{ fontSize: '1.33em' }}>
									Our new Survival Skills and Command Tasks, run by our survival expert Fred 
									Boucher will bring your teams together to problem solve outside of the 
									office environment.
								</p>
								<p style={{ fontSize: '1.33em' }}>
									These can be run over a few hours or over night. A fun, active, action packed 
									experience awaits all that are courageous enough to take on this opportunity. A 
									tried and tested technique of developing a groups cohesion and communication 
									abilities are group activities both physical and mental.
								</p>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>
				<Fade bottom>
					<Grid stackable verticalAlign='top'>
						<Grid.Row style={{ margin: '2em 0 1em 0' }}>
							<Header as='h3' icon textAlign='center' style={{ fontSize: '2em' }}>
								CORPORATE TEAM BUILDING 
							</Header>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column
								id='faq' 
								floated='right' 
								width={8} 
								style={{ padding: '3em 4em' }}
							>
								<Header as='h1' style={{ color: 'white' }}>
									Frequently Asked Questions
								</Header><br/>
								<p style={{ fontSize: '1.33em' }}>
									<b>Do we need to travel or do you come to us?</b><br/>
									You can have an event run at your location or we can provide a suitable venue.<br/><br/>
									<b>How does pricing work?</b><br/>
									You can pay per head or for an overall booking. We will build an event to meet your needs.<br/><br/>
									<b>Ethos?</b><br/>
									You can incorporate the event into your company's training package to suit your message.<br/><br/>
								</p>
							</Grid.Column>
							<Grid.Column
								id='corporateTeamBuildingBullets'
								floated='left' 
								width={8} 
								style={{
									padding: '2em 4em', 
									color: 'white', 
									fontSize: '1.33em'
								}}
							>
								<p>
									Tailored to meet your bespoke needs for all group sizes and abilities. Our team 
									will build you the package to motivate and inspire your staff. You tell us what 
									you want to achieve and we will do the rest.
								</p>
								<List bulleted items={[
										'The Maze',
										'Who did it',
										'Army challenge',
										'The Den',
										'Many, many More' 			
									]}
								/>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>
				<Fade bottom>
					<Grid stackable verticalAlign='top'>
						<Grid.Row style={{ margin: '3em 0 1em 0' }}>
							<Header as='h3' icon textAlign='center' style={{ fontSize: '2em' }}>
								TEAM BUILDING WALKS
							</Header>
						</Grid.Row>
						<Grid.Row style={{ padding: '0', margin: '0' }}>
							<Grid.Column
								id='pastEventsText' 
								floated='right' 
								width={8} 
								style={{ padding: '2em 4em' }}
							>
								<p style={{ fontSize: '1.33em' }}>
									<b>Walk Hadrian’s Wall &nbsp; | &nbsp; Empire's End &nbsp; | &nbsp; 6 Days </b><br/>
									A group walk to truly test the limits of your staff, 82 miles in 6 days across 
									diverse terrain, carrying our party’s own tent, equipment, food and water. 
									Although this is not for the faint hearted, the bond and team spirit your staff 
									will gain from this experience will only be matched by their sense of 
									overwhelming achievement. You will be walking in history’s footsteps, our 
									instructor guides will be informing you of the historical facts of key moments 
									in the wall's history and events, the units that manned the mile forts and where 
									these men came from.
								</p>
								<p style={{ fontSize: '1.33em' }}>
									<b>Also On Offer...</b><br/>
									Battlefield Tour - Battle of Bosworth (1 day)<br/>
									Cotswold Way - Chipping Campden to Bath (4 days)<br/>
									Warwickshire Military Museum Tours (3 days)<br/>
								</p>
							</Grid.Column>
							<Grid.Column
								id='pastEvents'
								floated='left' 
								width={8} 
								style={{ padding: '2em 4em' }}
							>
								<p style={{ fontSize: '1.33em' }}>
									<b>Experience Hadrian’s Wall &nbsp; | &nbsp; Hadrian’s Gift &nbsp; | &nbsp; 5 Days</b><br/>
									This adventure is far less demanding on the feet than Empires End Walk, but 
									still a life experience never to be forgotten. This 5-day event will see you and
									your staff mini bused around the spectacular Roman museums along the length of 
									the wall, while enjoying the local hospitality from tea rooms to traditional 
									overnight accommodation. However, you won’t miss out on the iconic views of the
									Pennines section of the wall, snaking through the cliffs and see the wall tree 
									made famous in the Kevin costner film Robin Hood the Prince of Thieves. This 
									21-mile walk is slow time, allowing you to take in the beautiful landscapes. 
									This event will finish with a well-deserved evening out in Newcastle.
								</p>
								<p style={{ fontSize: '1.33em' }}>
									<b>Battlefield Tour &nbsp; | &nbsp; Battle of Edgehill &nbsp; | &nbsp; 1 Day</b><br/>
									This 15-mile walk will see you walk through some of the most amazing hill views 
									the midlands has to offer, covering the iconic Burton Dassett and Edgehill 
									hills. On your travels you and your staff will learn about the murderous local 
									history of the trails as well as stop at some of the oldest Warwickshire pubs 
									for refreshments and lunch. After dinner a period dressed matter expert in the 
									history of the Battle of Edgehill will give a detailed account from the view 
									point of which the King stood to observe the battle, detailing where the units 
									formed and engaged each other. You will also be able to handle period weapons 
									and equipment during this talk.
								</p>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>
			</>
		)
	}
}