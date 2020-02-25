import React from 'react'
import Fade from 'react-reveal/Fade'
import { Container, Header, Divider, Grid, Responsive } from 'semantic-ui-react'

export default class LockDownConsultancy extends React.Component {

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	render() {
		const { mobile } = this.props

		return (
			<Container style={{ marginTop: '2em', fontSize: '1.2em', lineHeight: '1.5' }}>

				<Header as='h2' textAlign='center' style={{ fontSize: '2em' }}>
					Serious Incident Control Measures (SICM)
				</Header>
		
				<Grid stackable columns='equal' style={{ marginTop: '3em' }}>
					<Grid.Row style={{ marginBottom: '2em' }}>
						The Serious Incident Control Measures Package can be suitable as a stand alone management system or as an integrated cell of your 
						current Corporate Incident Management system.
					</Grid.Row>
					<Grid.Row>
						<Grid.Column style={{ padding: '6% 12%', backgroundColor: '#c8dbe3', color: '#4f4f4f' }}>
							It is NOT about ALARMISM . . . <br/><br/>
							It IS about PREVENTION . . . <br/><br/>
							It IS about PREPARATION . . . <br/><br/>
							. . . and <strong>PRESERVING LIFE</strong>
						</Grid.Column>
						<Grid.Column id='terroristSICM' style={{ paddingLeft: '27%' }}></Grid.Column>
					</Grid.Row>
				</Grid>

				<Fade bottom>
					{
						!mobile ? (
							<>
								<Responsive minWidth={1920}>
									<Divider horizontal style={{ margin: '5em 0' }} computer={8}>
										Why do I need this course, that’s what the Security and Emergency Services are for?
									</Divider>
								</Responsive>
								<Responsive minWidth={769} maxWidth={1919}>
									<div style={{ margin: '5em 0 2em', fontSize: '1em', fontWeight: 'bold' }}>
										Why do I need this course, that’s what the Security and Emergency Services are for?
									</div>
								</Responsive>
							</>							
						) : (
								<div style={{ margin: '5em 0 2em', fontSize: '1em', fontWeight: 'bold' }}>
									Why do I need this course, that’s what the Security and Emergency Services are for?
								</div>
						)
					}
					<Grid stackable columns='equal'>
						<Grid.Row>
							<Grid.Column id='SICM2' style={{  }}></Grid.Column>
							<Grid.Column style={{ padding: '1em', backgroundColor: '#acc2b1', color: 'white' }}>
								<p>
									This country’s security and emergency services are the best in the world, and as a 
									testament to that, the UK has had very few terror attacks in recent years. However, 
									it is inevitable that an attack will eventually once again take place. When it 
									does, the initial response will be to neutralize the threat, not treating casualties.
								</p>
								<p>
									It is vital that HIGH RISK targets have the training and equipment in place to deter or 
									detect possible threats before they take place.
								</p>
								<p>
									Planned and Practiced emergency procedures and protocols are vital to minimise the 
									number of casualties in the event of any terror attack.
								</p>						
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>

				<Fade bottom>
					<Grid stackable columns='equal'>
						<Grid.Row style={{ marginTop: '3em' }}>
							<Grid.Column style={{ padding: '1em', backgroundColor: '#daeabd', color: '#4f4f4f' }}>
								<p>
									When this happens, people caught up in this attack should follow the National Police 
									Message of RUN, HIDE, TELL. You just need to know how to do this the right way. 
									Report when you are safe, Run, Hide, Barricade, Flight or Fight.
								</p>
								<p>
									The Serious Incident Control Measures Course will help you to make decisions under 
									stress and give you skills to protect yourself and others.
								</p>
								<p>
									When it’s safe to do so, you will have the trauma first aid skills to treat yourself
									or others using the latest medical equipment or emergency fashioned improvised 
									equipment. It is well documented that those who receive immediate point of wound 
									treatment can survive even major trauma injuries. 
								</p>								
							</Grid.Column>
							<Grid.Column id='SICM3' style={{  }}></Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>

				<Fade bottom>
					{
						!mobile ? (
							<Divider horizontal style={{ margin: '5em 0' }}>COURSE INTRODUCTION</Divider>
						) : (
							<div style={{ margin: '5em 0 2em', fontSize: '1em', fontWeight: 'bold' }}>
								Course Introduction
							</div>
						)
					}
					<Grid padded stackable columns='equal'>
						<Grid.Row>
							<Grid.Column id='SICM4' style={{  }}></Grid.Column>
							<Grid.Column style={{ padding: '1em', backgroundColor: '#92939d', color: 'white' }}>
							<p>
								This three day course has been developed as a guide to increase the skill set of key 
								industries and individuals outside the national emergency response agencies, in areas 
								such as initial trauma treatment and scene management.
							</p>
							<p>
								To extend the UK’s potential first on scene capabilities to competent civilians will 
								undoubtedly save lives by extending the	survivability of casualties from the point of 
								wounding to post professional care and minimising the risk of injury by logical and 
								precise scene management.
							</p>
							<p>
								The reality is that with multi-site armed attacks and bombings across Europe, America 
								and the world aimed at high capacity civilian populace targets such as schools, 
								stadiums, Shopping Centres and public events, the UK will inevitably be targeted once 
								again. If we can train the UK’s civilian security, academic institutions, event 
								management organisations and others with the skills to identify potential threats and 
								the ability to plan and react to them, lives will be saved.
							</p>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>

				<Fade bottom>
					<Grid stackable columns='equal'>
						<Grid.Row style={{ marginTop: '3em' }}>
							<Grid.Column style={{ padding: '1em', backgroundColor: '#e6e9ed', color: '#4f4f4f' }}>
							<p>
								We have been fortunate in the UK that our security services and police have maintained 
								such an effective operation to detect and deter most threats posed to our domestic 
								environment, however it is an eventuality that more terrorist like attacks will take 
								place in the UK. The real threat of mass casualty attacks on schools in the future is 
								also a real and viable threat, of the like seen regularly in the USA.
							</p>
							<p>
								In the event of any mass casualty attack or incident there will be a period that those 
								caught up in this situation will be any	casualties best chance of survival.
							</p>
							</Grid.Column>
							<Grid.Column id='SICM5' style={{  }}></Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>

				<Fade bottom>
					{
						!mobile ? (
							<Divider horizontal style={{ margin: '5em 0' }}>IMPORTANT SICM COURSE INFORMATION</Divider>
						) : (
							<div style={{ margin: '5em 0 2em', fontSize: '1em', fontWeight: 'bold' }}>
								Important SICM Course Information
							</div>
						)
					}
					<Grid stackable columns='equal' style={{ marginBottom: '2em' }}>
						<Grid.Row>
							<Grid.Column id='SICM6' style={{  }}></Grid.Column>
							<Grid.Column style={{ padding: '1em', backgroundColor: '#c6b49a', color: 'white' }}>
							<h4>COPYRIGHT</h4>
							<p>
								This course and its content belong to Golbourn Training Solutions, all educational means
								and distribution rights is that of	Golbourn Training Solutions only. The course 
								information and content is not to be shared or copied without authorisation for release
								contract.
							</p>

							<h4>COURSE TRAINING</h4>
							<p>
								This course is a three day, face to face training course. Training hours are 0900 - 1700
								each day.
							</p>

							<h4>TO OBTAIN THE FULL QUALIFICATION</h4>
							<p>
								Individual learners must complete both PART A - Day 1 & 2 and PART B - Day 3. 
								Organisations can obtain the full qualification, if two different employee's hold either
								PART A or Part B.
							</p>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>

				<Fade bottom>
					<Grid stackable columns='equal'>
						<Grid.Row style={{ margin: '2em 0' }}>
							<Grid.Column style={{ padding: '1em', backgroundColor: '#efdaca', color: '#4f4f4f' }}>
								<h4>HOW TO BOOK TRAINING</h4>
								<p>
									Individual bookings can be made on Golbourn Training Solutions Public SICM Courses.
								</p>
								<p>
									Organisations can book a private SICM Course for up to 20 learners, to be hosted at 
									the organisation or at a private venue.
								</p>
								<h4>SECURITY</h4>
								<p>
									It is essential that this course and its content is only released to its intended 
									audience and regulating bodies, to ensure threat control measures are not publicly 
									known.
								</p>
							</Grid.Column>
							<Grid.Column id='SICM7' style={{  }}></Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>
			</Container>
		)
	}
}