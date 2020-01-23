import React from 'react'
import { Segment, Container, Label } from 'semantic-ui-react'
import { Form } from 'formsy-semantic-ui-react';
import * as emailjs from 'emailjs-com'
import NavBar from '../../components/layouts/Header'

export default class Contact extends React.Component {
	state = { firstName: '', lastName: '', company: '', address: '', email: '', phone: '', course: '', message: '' }

	componentDidMount() { window.scrollTo(0, 0) }

	handleChange = (e, { name, value }) => this.setState({ [name]: value })

	onValidSubmit = () => {
		const { firstName, lastName, company, address, email, phone, course, message } = this.state
		
		let templateParams = {
			from_name: `${firstName} ${lastName}`,
			course_html: course,
			company_html: company,
			address_html: address,
			email_html: email,
			phone_html: phone,
			message_html: message,
		}
		emailjs.send(
			'gmail',
			'template_XXXXXXXXXX',
			templateParams,
			'user_XXXXXXXXXXXXXXXXXX'
		)
	}

	render() {
		return(
			<>
				<NavBar path={this.props.location.pathname}/>
                <Segment style={{ padding: '8em', border: 'none' }} vertical>
					<Container text>
						<Form
							ref={ ref => this.form = ref }
							onValidSubmit={ this.onValidSubmit }
						>
							<Form.Group widths="equal">
								<Form.Input
									required
									name="firstName"
									label="First name"
									placeholder="First name"
									onChange={this.handleChange}
									validations="isWords"
									errorLabel={ <Label color="red" pointing/> }
									validationErrors={{
										isWords: 'No numbers or special characters allowed',
										isDefaultRequiredValue: 'First Name is Required',
									}}
								/>
								<Form.Input
									required
									name="lastName"
									label="Last name"
									placeholder="Last name"
									onChange={this.handleChange}
									validations="isWords"
									errorLabel={ <Label color="red" pointing/> }
									validationErrors={{
										isWords: 'No numbers or special characters allowed',
										isDefaultRequiredValue: 'Last Name is Required',
									}}
								/>
							</Form.Group>

							<Form.Group widths="equal">
								<Form.Input
									required
									name="phone" 
									label="Phone" 
									placeholder="###########"
									onChange={this.handleChange}
									validations="isNumeric"
									errorLabel={ <Label color="red" pointing/> }
									validationErrors={{
										isNumeric: 'Only numbers allowed',
										isDefaultRequiredValue: 'Phone Number is Required',
									}}
								/>
								<Form.Input
									required
									name="email" 
									label="Email" 
									placeholder="example@domain.com"
									onChange={this.handleChange}
									validations="isEmail"
									errorLabel={ <Label color="red" pointing/> }
									validationErrors={{
										isEmail: 'Please enter a valid email',
										isDefaultRequiredValue: 'Email is Required',
									}}
								/>
							</Form.Group>
							
							<Form.Group widths="equal">
								<Form.Input 
									name="company" 
									label="Company/Organisation" 
									placeholder="Company/Organisation" 
									onChange={this.handleChange}
								/>
								<Form.Input 
									name="course" 
									label="Course" 
									placeholder="Course" 
									onChange={this.handleChange}
								/>
							</Form.Group>

							<Form.Input 
								name="address" 
								label="Address" 
								placeholder="Address" 
								onChange={this.handleChange}
							/>

							<Form.TextArea
								required
								name="message"
								label="Message"
								placeholder="Tell us more about you..."
								onChange={this.handleChange}
								errorLabel={ <Label color="red" pointing="above" /> }
								validationErrors={{
									isDefaultRequiredValue: 'We need to know more about you',
								}}
							/>

							<Form.Checkbox
								name="terms"
								label="I hereby agree that my data entered in the contact form will be stored electronically, and will be processed and used for the purpose of establishing contact. I am aware that I can revoke my consent at any time."
								onChange={this.handleChange}
								validations="isTrue"
								errorLabel={ <Label color="red" pointing="above" /> }
								validationErrors={{
									isTrue: 'Please agree to electronic data usage to proceed',
								}}
							/>

							<Form.Group>
								<Form.Button inverted content="Submit" color="blue"/>
								<Form.Button inverted type="button" color="blue" content="Reset" onClick={ () => this.form.reset() }/>
							</Form.Group>
						</Form>
					</Container>
				</Segment>
			</>
		);
	}
}