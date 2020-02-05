import React from 'react'
import { Container, Header, Grid } from 'semantic-ui-react'

export default class OrgSecHome extends React.Component {
    
    componentDidMount() {
		window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <Container style={{ marginTop: '2em', fontSize: '1.2em', lineHeight: '1.5' }}>
                <Header as='h2' textAlign='center' style={{ fontSize: '2em', marginBottom: '1.5em' }}>
                    Operational Security
                </Header>

                <Grid divided stackable columns='equal' textAlign='center'>
                    <Grid.Row>
                        <Grid.Column tablet={16} computer={5} largeScreen={16} widescreen={5} style={{ marginBottom: '2em' }}>
                            <Grid.Row id='orgSecOne'>
                                <h1>SECURITY AUDIT</h1>
                            </Grid.Row>
                            Our team of former military and police professionals will conduct a review of your current 
                            security measures and processes and complete a report of their findings and
                            recommendations.
                        </Grid.Column>
                        <Grid.Column tablet={16} computer={5} largeScreen={16} widescreen={5} style={{ marginBottom: '2em' }}>
                            <Grid.Row id='orgSecTwo'>
                                <h1>LOCKDOWN CONSULTANCY</h1>
                            </Grid.Row>
                            We hope and we pray that the worst will never happen, but we must always be prepared. We
                            will provide consultancy and training to ensure your orgainisation is Lockdown ready.
                        </Grid.Column>
                        <Grid.Column tablet={16} computer={5} largeScreen={16} widescreen={5} style={{ marginBottom: '2em' }}>
                            <Grid.Row id='orgSecThree'>
                                <h1>SERIOUS INCIDENT CONTROL MEASURES</h1>
                            </Grid.Row>
                            As a nationally registered CPD qualification, our Serious Incident Control Measures course 
                            will give the learner the training to identify security risks and manage security incidents. 
                            This course also includes serious injury first aid.
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}