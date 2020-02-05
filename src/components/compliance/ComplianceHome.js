import React from 'react'
import { Container, Header, Grid, Divider, Image, Label } from 'semantic-ui-react'

export default class ComplianceHome extends React.Component {
    
    componentDidMount() {
		window.scrollTo(0, 0)
    }
    
    render() {
        const { mobile } = this.props

        return (
            <Container style={{ marginTop: '2em', fontSize: '1.2em', lineHeight: '1.5' }}>
                <Header as='h2' textAlign='center' style={{ fontSize: '2em', marginBottom: '1.5em' }}>
                    What is Compliance?
                </Header>
                <Grid divided stackable columns='equal'>
                    <Grid.Row>
                        <p>
                            Regulatory compliance describes the goal that organizations aspire to achieve in their efforts 
                            to ensure that they are aware of and take steps to comply with relevant laws, policies, and 
                            regulations. Due to the increasing number of regulations and need for operational transparency, 
                            organizations are increasingly adopting the use of consolidated and harmonized sets of 
                            compliance controls. This approach is used to ensure that all necessary governance requirements 
                            can be met without the unnecessary duplication of effort and activity from resources.
                        </p>
                        <p>
                            There is considerable regulation in the United Kingdom, some of which is from European Union 
                            legislation. Various areas are policed by different bodies, such as the Financial Conduct 
                            Authority (FCA), Environment Agency, Scottish Environment Protection Agency, Information 
                            Commissioner's Office, Care Quality Commission, and others. For you and your employees, one 
                            of the most important is the Health and Safety Executive (HSE). 
                        </p>
                        <Label 
                            as='a' 
                            href='https://en.wikipedia.org/wiki/Regulatory_compliance'
                            target='_blank'
                            size='mini'
                            style={{ marginTop: '1em' }}
                            image
                            basic
                        >
                            <Image src='/images/cc_logo.png'/>
                            Wikipedia
                        </Label>
                    </Grid.Row>
                </Grid>       

				{
					!mobile ? (
                        <Divider horizontal style={{ margin: '3.5em 0' }}>
                            Is your organisation HSE Compliant?
                        </Divider>
					) : (
						<div style={{ margin: '5em 0 3em 0', fontSize: '1em', fontWeight: 'bold' }}>
							Is your organisation HSE Compliant?
						</div>
					)
				}
                    
                <Grid divided stackable columns='equal'>
                    <Grid.Row>
                        <Grid.Column style={{ padding: '0 2em 0 0' }}>
                            If you have over 5 employees you must have a written Health & Safety policy, safe system of 
                            work, risk assessments and adequate training.
                        </Grid.Column>
                        <Grid.Column style={{ padding: '0 0 0 2em' }}>
                            At Golbourn Training Solutions we can supply you with training to cover all your Compliance 
                            needs under the H&S 1974 Regulation. Our courses can be purchased as a one off course or we 
                            can provide you with a personalised bundle.  We run public courses or onsite training at 
                            your premises. We will always aim to tailor the course to reflect your business needs.
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}