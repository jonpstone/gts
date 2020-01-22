import React from 'react'
import { Form, Segment, Container, Grid, Checkbox } from 'semantic-ui-react'
import * as emailjs from 'emailjs-com'
import NavBar from '../../components/layouts/Header'

export default class Contact extends React.Component {
	state = { name: '', company: '', address: '', email: '', telephone: '', course: '', message: '', checked: false	}

	componentDidMount() { window.scrollTo(0, 0) }

	handleChange = (e, { name, value }) => this.setState({ [name]: value })

	handleSubmit = () => {
		const { name, company, address, email, telephone, course, message, checked } = this.state
		let templateParams = {
			from_name: name,
			to_name: 'GTS Team',
			course_html: course,
			company_html: company,
			address_html: address,
			email_html: email,
			telephone_html: telephone,
			message_html: message,
	   }
	   if (checked === true) {
			emailjs.send(
				'gmail',
				'template_XXXXXXX',
				templateParams,
				'user_XXXXXXXXXX'
			)
	   } else {
		   return false
	   }
	}

	checkedHandler = () => {
		this.setState((prevState, props) => ({
		  checked : !prevState.checked
		}), () => console.log(this.state.checked))
	}

	render() {
		const { name, company, address, email, telephone, course, message, checked } = this.state

		return(
			<>
				<NavBar path={this.props.location.pathname}/>
                <Segment style={{ padding: '5em', border: 'none' }} vertical>
					<Container text>
						<Form onSubmit={this.handleSubmit}>
							<Form.Input
								name='name'
								label='Name' 
								placeholder='Name'
								value={name}
								onChange={this.handleChange}
								required
							/>
							<Form.Input
								name='company'
								label='Company'
								placeholder='Company'
								value={company}
								onChange={this.handleChange}
							/>
							<Form.Input 
								name='address' 
								label='Address' 
								placeholder='Address'
								value={address}
								onChange={this.handleChange}
							/>
							<Form.Input 
								name='email' 
								label='Email' 
								placeholder='Email'
								value={email}
								onChange={this.handleChange}
								required
							/>
							<Form.Input 
								name='telephone' 
								label='Telephone' 
								placeholder='Telephone'
								value={telephone}
								onChange={this.handleChange}
								required
							/>
							<Form.Input
								name='course' 
								label='Course' 
								placeholder='Course'
								value={course}
								onChange={this.handleChange}
							/>
							<Form.TextArea 
								name='message' 
								label='Message' 
								placeholder='Tell us more...'
								value={message}
								onChange={this.handleChange}
							/>
							<Form.Field 
								control={Checkbox} 
								label={{ children: 'I hereby agree that my data entered in the contact form will be stored electronically, and will be processed and used for the purpose of establishing contact. I am aware that I can revoke my consent at any time.' }}
								checked={checked}                
								onChange={this.checkedHandler}
							/>
							<Grid container>
								<Grid.Row>
									Fields marked with <div style={{ color: 'red' }}>&nbsp;*&nbsp;</div> are required<br/>
								</Grid.Row>
							</Grid><br/>
							<Form.Button content='Submit' />
						</Form>
					</Container>
				</Segment>
			</>
		);
	}
}