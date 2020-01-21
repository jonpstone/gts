import React from 'react';
import { Form, Segment, Container, Input, Grid } from 'semantic-ui-react'
import NavBar from '../../components/layouts/Header'

export default class Contact extends React.Component {

	componentDidMount() { window.scrollTo(0, 0) }

	render() {
		return(
			<>
				<NavBar path={this.props.location.pathname}/>
                <Segment style={{ padding: '5em', border: 'none' }} vertical>
					<Container text>
						<Form>
							<Form.Field label='*Name' placeholder='Name' control={Input}/>
							<Form.Input label='Company' placeholder='Company' />
							<Form.Input label='Address' placeholder='Address' />
							<Form.Field label='*Email' placeholder='*Email' control={Input}/>
							<Form.Field label='*Telephone' placeholder='*Telephone' control={Input}/>
							<Form.Input label='Course' placeholder='Course' />
							<Form.TextArea label='Message' placeholder='Tell us more...' />
							<Form.Checkbox 
								label='*I hereby agree that my data entered in the contact form will be stored electronically,
								and will be processed and used for the purpose of establishing contact. I am aware that I 
								can revoke my consent at any time.' />
							<Grid container>
								<Grid.Row>
									<p>Fields marked with * are required</p><br/>
								</Grid.Row>
							</Grid>
							<Form.Button>Submit</Form.Button>
						</Form>
					</Container>
				</Segment>
			</>
		);
	}
}