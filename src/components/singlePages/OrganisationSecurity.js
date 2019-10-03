import React from 'react';
import { Container, Header} from 'semantic-ui-react'

export default props =>
  <>
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h2'>Security Audit</Header>
      <p>
    	  A review of your current security measures and processes and a report of our findings.
      </p>
    </Container>
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h2'>Lockdown Consultancy</Header>
      <p>
        Consultancy and training to ensure your orgainisation is Lockdown ready.
      </p>
    </Container>
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h2'>Serious Incident Control Measures</Header>
      <p>
        As a Nationally registered CPD qualification, our Serious Incident Control Measures course 
        will give the learner the training to identify security risks and manage security incidents.  
        This course also includes serious injury first aid.
      </p>
     </Container>
  </>
