import React from 'react'
import { Container, Header, Grid } from 'semantic-ui-react'

export default class SecurityAudit extends React.Component {

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	render() {
		return (
			<Container style={{ margin: '2em 0', fontSize: '1.2em', lineHeight: '1.5' }}>

				<Header as='h2' textAlign='center' style={{ fontSize: '2em' }}>
					Security Audit
				</Header>
		
				<Grid divided stackable columns='equal' style={{ marginTop: '3em' }}>
					<Grid.Row style={{ marginBottom: '2em' }}>
						<p>
							Designed for organisations who have security processes and procedures in place and would like 
							them tested to ensure they are effective.  Or for organisations who would like a review on what
							security measures are needed for there organisation. Our team of security experts will 
							visit your premises and will inspect and review your orgainisations security and provide a
							report of our findings. For more information please&nbsp;
							<a href={"mailto:enqurires@golbourntrainingsolutions.co.uk"}>email us</a>.
						</p>
					</Grid.Row>
					<Grid.Row id='secAudit'>
					</Grid.Row>
				</Grid>
			</Container>
		)
	}
}
