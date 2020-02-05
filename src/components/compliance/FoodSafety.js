import React from 'react'
import Fade from 'react-reveal/Fade'
import { Container, Header, Divider, Grid, List, Button, Icon  } from 'semantic-ui-react'

export default class BlsAed extends React.Component {
	constructor(props) {
		super(props);
		this.emergencyFocus = React.createRef()
	}

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	handleOnClick = (event) => {
		if(this.emergencyFocus.current){
			this.emergencyFocus.current.scrollIntoView({ 
				behavior: "smooth", 
				block: "start"
			})
		}
	}

	render() {
		const { mobile } = this.props

		return (
			<Container style={{ marginTop: '2em', fontSize: '1.2em', lineHeight: '1.5' }}>
			
				<Header as='h2' textAlign='center' style={{ fontSize: '2em', marginBottom: '1.5em' }}>
					Food Safety and Good Nutrition Training
				</Header>

				<Container textAlign='center'>
					<Button 
						inverted 
						color='blue' 
						size='huge' 
						onClick={this.handleOnClick} 
					>
						{
							mobile ? (
								"Level 2 Good Nutrition"
							) : (
								<>
									&nbsp; Level 2 Good Nutrition &nbsp;
									<Icon name='angle down'/>
								</>
							)
						}
					</Button>
				</Container>

				{
					!mobile ? (
						<Divider horizontal style={{ margin: '5em 0' }}>
							Level 2 Food Safety in Catering &nbsp; | &nbsp; 1 day
						</Divider>
					) : (
						<div style={{ margin: '5em 0 3em 0', fontSize: '1em', fontWeight: 'bold' }}>
							Level 2 Food Safety in Catering | 1 Day
						</div>
					)
				}

				<Grid divided stackable columns='equal'>
					<Grid.Row>
						<Grid.Column style={{ padding: '0 2em 0 0' }}>
							<p>
								This is an excellent introduction to Food Safety in Catering and will benefit all 
								employees at all levels, particularly those who hold, or are about to hold, a food 
								safety role within their catering organisation.
							</p>
							<p>
								Successful candidates will be awarded a national Level 2 (Level 5 in Scotland) 
								qualification which will provide an ideal platform to higher level training or career 
								development.
							</p>
						</Grid.Column>
						<Grid.Column style={{ padding: '0 0 0 2em' }}>
							The course will clarify aspects of food safety which many of us believe to be complex and 
							daunting. The importance of food safety in catering is underpinned by health and safety 
							legislation that places a duty on employers to establish policies and procedures and ensure 
							their employees receive appropriate training.
						</Grid.Column>
					</Grid.Row>
				</Grid>
				
				<Fade bottom>
					<Divider horizontal style={{ margin: '5em 0' }}>Syllabus</Divider>
					<Grid stackable columns='equal'>
						<Grid.Row 
							id='foodSafetyOneSyllabus' 
							style={ mobile ? 
								{ color: 'white', padding: '2%', fontSize: '1.33em', textAlign: 'left' } : 
								{ color: 'white', padding: '10%', fontSize: '1.5em' }
							}
						>
							<Grid.Column>
								<List bulleted items={[
										'How individuals can take responsibility for food safety',
										'The importance of keeping him/herself clean and hygienic',
										'The importance of keeping the work areas clean and hygienic',
										'The importance of keeping food safe'
									]}
								/>
								<div ref={this.emergencyFocus}></div>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>

				<Fade bottom>
					{
						!mobile ? (
							<Divider horizontal style={{ margin: '7em 0 5em 0' }}>
								Level 2 Good Nutrition &nbsp; | &nbsp; 4 hours
							</Divider>
						) : (
							<div style={{ margin: '5em 0 3em 0', fontSize: '1em', fontWeight: 'bold' }}>
								Level 2 Good Nutrition | 4 Hours
							</div>
						)
					}
					<Grid divided stackable columns='equal'>
						<Grid.Row>
							<Grid.Column style={{ padding: '0 2em 0 0' }}>
								<p>
									This Good Nutrition course is designed for anyone who is working or seeking a
									career in food preparation and/or food service. It will give you basic knowledge of 
									nutrition which will help you prepare well-balanced meals and menus, the result of 
									which will have a positive impact on health as well as an understanding of special 
									dietary requirements.
								</p>
								<p>
									In particular, if you work in hospital or school kitchens, residential homes or 
									community based kitchens, then this course will assist you in preparing well 
									balanced and nutritional meals.
								</p>
							</Grid.Column>
							<Grid.Column style={{ padding: '0 0 0 2em' }}>
								<p>
									If you are considering a career in the food industry, then this course will give you
									a good understanding and appreciation of nutritional values and well-balanced diets.
								</p>
								<p>
									It will also help those who are active in sport and recreation, children or adults, 
									in respect of producing well-balanced diets to support that activity.
								</p>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>

				<Fade bottom>
					<Divider horizontal style={{ margin: '5em 0' }}>Syllabus</Divider>
					<Grid stackable columns='equal'>
						<Grid.Row 
							id='foodSafetyTwoSyllabus' 
							style={ mobile ? 
								{ color: 'white', padding: '2%', fontSize: '1.33em', textAlign: 'left' } : 
								{ color: 'white', padding: '10%', fontSize: '1.5em' }
							}
						>
							<Grid.Column>
								<List bulleted items={[
										'The principle of balanced diets',
										'Current Government nutritional guidelines for a healthy diet',
										'Sources of essential nutrients',
										'Catering practices to be considered when planning and providing meals for those on special diets'
									]}
								/>
							</Grid.Column>
							<Grid.Column>
								<List bulleted items={[
										'Catering practices that help maintain the nutritional value of food',
										'How to plan and provide special diets',
										'The impact of special diets on health',
										'The impact of diet on health'
									]}
								/>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>
				
				<Fade bottom>
					<Divider horizontal style={{ margin: '5em 0' }}>Certification</Divider>
					<Grid>
						<Grid.Row>
							This is achieved by on-going theoretical teaching by the instructor, culminating with a 
							written test. This qualification does not expire, but refresher training and keeping up to 
							date with changes to policies and procedures is vital to keep the qualification current.
						</Grid.Row>
						<Divider horizontal style={{ margin: '5em 0' }}>Numbers</Divider>
						<Grid.Row>
							A maximum of 16 students are allowed and must be a minimum of 14 years of age and a 
							certificate can be offered to all, subject to assessment.
						</Grid.Row>
					</Grid>
				</Fade>
			</Container>
		)
	}
}