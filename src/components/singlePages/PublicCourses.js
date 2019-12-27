import React from 'react';
import { Container, Header } from 'semantic-ui-react'
import NavBar from '../../components/layouts/Header'

export default props =>
	<>
		<NavBar/>
		<Container text style={{ marginTop: '7em' }}>
			<Header as='h2'>Public Courses Dates</Header>
			<p>
				See Golbourn Training Solutions Managing Directors training availability, please keep in mind any date and location 
				is possible through the Regional Instructors.
				
				Below are a list of all our Public Courses, we also deliver private courses please contact us for more details.
			</p>
		</Container>
	</>