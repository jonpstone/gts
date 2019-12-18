import React from 'react'
import Fade from 'react-reveal/Fade'
import { Container, Header, Divider, Grid, List, Button, Icon  } from 'semantic-ui-react'

export class FirstAidAtWork extends React.Component {
	constructor(props) {
		super(props);
		this.firstFocus = React.createRef()
        this.secondFocus = React.createRef()
	}

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	handleLeftOnClick = (event) => {
        if(this.firstFocus.current){
            this.firstFocus.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "start"
            })
		}
	}
	
	handleRightOnClick = (event) => {
		if(this.secondFocus.current){
			this.secondFocus.current.scrollIntoView({
				behavior: "smooth", 
				block: "start"
			})
		}
	}
		
	render() {
		return (
			<Container style={{ marginTop: '2em', fontSize: '1.2em' }}>
			
				<Header as='h2' textAlign='center' style={{ fontSize: '2em', marginBottom: '1.5em' }}>
					{this.props.firstTitle}
				</Header>

				<Container textAlign='center'>
					<Button 
						inverted 
						color='blue' 
						size='huge' 
						onClick={this.handleLeftOnClick} 
						style={{ marginRight: '1.2em'}}
					>
						&nbsp; {this.props.secondTitle} &nbsp;
						<Icon name='angle down'/>
					</Button>
					<Button inverted color='blue' size='huge' onClick={this.handleRightOnClick}>
					&nbsp; {this.props.thirdTitle} &nbsp;
						<Icon name='angle down'/>
					</Button>
				</Container>

				<Grid divided stackable columns='equal'>
					<Divider horizontal style={{ margin: '5em 0' }}>
						{this.props.firstCourseType} &nbsp; | &nbsp; {this.props.firstCourseLength}
					</Divider>
					<Grid.Row>
						<Grid.Column style={{ padding: '0 2em 0 0' }}>
                            {this.props.firstCourseIntroParaOne}
						</Grid.Column>
						<Grid.Column style={{ padding: '0 0 0 2em' }}>
                            {this.props.firstCourseIntroParaTwo}
						</Grid.Column>
					</Grid.Row>
					<Divider horizontal style={{ margin: '5em 0' }}>Course Duration</Divider>
					<Grid.Row>
                        {this.props.firstCourseDuration}
					</Grid.Row>
				</Grid>
				
				<Fade bottom>
					<Grid stackable columns='equal'>
						<Divider horizontal style={{ margin: '5em 0' }}>Syllabus</Divider>
                        {this.props.firstCourseSyllabus}
					</Grid>
				</Fade>
				<Fade bottom>
					<Grid divided stackable columns='equal'>
						<Grid.Row style={{ margin: '5em 0' }}>
							<Grid.Column style={{ padding: '0 2em 0 0' }}>
                                {this.props.firstCourseNarrativeParaOne}
							</Grid.Column>
							<Grid.Column style={{ padding: '0 0 0 2em' }}>
                                {this.props.firstCourseNarrativeParaTwo}
								<div ref={this.firstFocus}></div>
								{this.props.firstCourseNarrativeParaThree}
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>

                <Header as='h2' textAlign='center' style={{ fontSize: '2em', marginBottom: '1.5em' }}>
					{this.props.secondTitle}
				</Header>

				<Grid divided stackable columns='equal'>
					<Divider horizontal style={{ margin: '5em 0' }}>
						{this.props.secondCourseType} &nbsp; | &nbsp; {this.props.secondCourseLength}
					</Divider>
					<Grid.Row>
						<Grid.Column style={{ padding: '0 2em 0 0' }}>
                            {this.props.secondCourseIntroParaOne}
						</Grid.Column>
						<Grid.Column style={{ padding: '0 0 0 2em' }}>
                            {this.props.secondCourseIntroParaTwo}
						</Grid.Column>
					</Grid.Row>
					<Divider horizontal style={{ margin: '5em 0' }}>Course Duration</Divider>
					<Grid.Row>
                        {this.props.secondCourseDuration}
					</Grid.Row>
				</Grid>
				
				<Fade bottom>
					<Grid stackable columns='equal'>
						<Divider horizontal style={{ margin: '5em 0' }}>Syllabus</Divider>
                        {this.props.secondCourseSyllabus}
					</Grid>
				</Fade>
				<Fade bottom>
					<Grid divided stackable columns='equal'>
						<Grid.Row style={{ margin: '5em 0' }}>
							<Grid.Column style={{ padding: '0 2em 0 0' }}>
                                {this.props.secondCourseNarrativeParaOne}
							</Grid.Column>
							<Grid.Column style={{ padding: '0 0 0 2em' }}>
                                {this.props.secondCourseNarrativeParaTwo}
								<div ref={this.secondFocus}></div>
								{this.props.secondCourseNarrativeParaThree}
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>

                <Header as='h2' textAlign='center' style={{ fontSize: '2em', marginBottom: '1.5em' }}>
					{this.props.thirdTitle}
				</Header>

				<Grid divided stackable columns='equal'>
					<Divider horizontal style={{ margin: '5em 0' }}>
						{this.props.thirdCourseType} &nbsp; | &nbsp; {this.props.thirdCourseLength}
					</Divider>
					<Grid.Row>
						<Grid.Column style={{ padding: '0 2em 0 0' }}>
                            {this.props.thirdCourseIntroParaOne}
						</Grid.Column>
						<Grid.Column style={{ padding: '0 0 0 2em' }}>
                            {this.props.thirdCourseIntroParaTwo}
						</Grid.Column>
					</Grid.Row>
					<Divider horizontal style={{ margin: '5em 0' }}>Course Duration</Divider>
					<Grid.Row>
                        {this.props.thirdCourseDuration}
					</Grid.Row>
				</Grid>
				
				<Fade bottom>
					<Grid stackable columns='equal'>
						<Divider horizontal style={{ margin: '5em 0' }}>Syllabus</Divider>
                        {this.props.thirdCourseSyllabus}
					</Grid>
				</Fade>
				<Fade bottom>
					<Grid divided stackable columns='equal'>
						<Grid.Row style={{ margin: '5em 0' }}>
							<Grid.Column style={{ padding: '0 2em 0 0' }}>
                                {this.props.thirdCourseNarrativeParaOne}
							</Grid.Column>
							<Grid.Column style={{ padding: '0 0 0 2em' }}>
                                {this.props.thirdCourseNarrativeParaTwo}
								{this.props.thirdCourseNarrativeParaThree}
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Fade>
			</Container>
		)
	}
}

export default FirstAidAtWork;