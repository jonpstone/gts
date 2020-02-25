import React from 'react'
import { Segment, Container, List, Header } from 'semantic-ui-react'
import NavBar from '../components/layouts/Header'
import MobileNavBar from '../components/layouts/MobileHeader'
import Competency from '../policy/COMPETENCY_POLICY_STATEMENT.pdf'
import DataProtection from '../policy/DATA_PROTECTION_POLICY_STATEMENT.pdf'
import DisabilityAndDiscrimination from '../policy/DISABILITY_and_DISCRIMINATION_POLICY_STATEMENT.pdf'
import EqualityAndDiversity from '../policy/EQUALITY_and_DIVERSITY_POLICY_STATEMENT.pdf'
import FireSafety from '../policy/FIRE_SAFETY_POLICY_STATEMENT.pdf'
import HealthAndSafety from '../policy/HEALTH_and_SAFETY_POLICY_STATEMENT.pdf'

export default class Policy extends React.Component {

	componentDidMount() { window.scrollTo(0, 0) }

	render() {
		return (
			<>
				<NavBar path={this.props.location.pathname} body={<Body/>}/>
				<MobileNavBar body={<Body mobile/>}/>
			</>
		)
	}
}

const Body = ({ mobile }) => (
	<>
		<Header as='h2' style={mobile ? { fontSize: '3em' } : { display: 'none' }}>POLICY</Header>
		<Segment style={ mobile ? {padding: '5%', border: 'none'} : { padding: '5em', border: 'none' }} vertical>
			<Container text>
				<List divided relaxed>
					<List.Item style={{ padding: '1em 0'}}>
						<List.Content>
							<List.Header>
								<List.Icon name='file pdf' size='large' verticalAlign='middle' color='red'/>
								<a href={Competency} rel="noopener noreferrer" target="_blank">
									Competency Policy Statement
								</a>
							</List.Header><br/>
							<List.Description>
								Golbourn Training Solutions is dedicated to ensuring our courses, subject 
								knowledge, references and all relevant documentation is as current and accurate 
								as possible. It is vital all instruc...
							</List.Description>
						</List.Content>
					</List.Item>
					<List.Item style={{ padding: '1em 0'}}>
						<List.Content>
							<List.Header>
								<List.Icon name='file pdf' size='large' verticalAlign='middle' color='red'/>
								<a href={DataProtection} rel="noopener noreferrer" target="_blank">
									Data Protection Policy Statement
								</a>
							</List.Header><br/>
							<List.Description>
								Golbourn Training Solutions is a registered member of the Information Commissary 
								Office (ICO) and will meet all steps to stay fully compliant with the Data 
								Protection Act 1998. The informati...
							</List.Description>
						</List.Content>
					</List.Item>
					<List.Item style={{ padding: '1em 0'}}>
						<List.Content>
							<List.Header>
								<List.Icon name='file pdf' size='large' verticalAlign='middle' color='red'/>
								<a href={DisabilityAndDiscrimination} rel="noopener noreferrer" target="_blank">
									Disability & Discrimination Policy Statement
								</a>
							</List.Header><br/>
							<List.Description>
								Golbourn Training Solutions is steadfast in its support for all persons to be 
								able to aspire and achieve in their life, all persons are born equal and have 
								the right to be given the same cha...
							</List.Description>
						</List.Content>
					</List.Item>
					<List.Item style={{ padding: '1em 0'}}>
						<List.Content>
							<List.Header>
								<List.Icon name='file pdf' size='large' verticalAlign='middle' color='red'/>
								<a href={EqualityAndDiversity} rel="noopener noreferrer" target="_blank">
									Equality & Diversity Policy Statement
								</a>
							</List.Header><br/>
							<List.Description>
								Equality and Diversity (E&D) are paramount to all Private and Public working 
								environments in the UK. It is therefore Golbourn Training Solutions Policy that 
								all individual’s rights and needs...
							</List.Description>
						</List.Content>
					</List.Item>
					<List.Item style={{ padding: '1em 0'}}>
						<List.Content>
							<List.Header>
								<List.Icon name='file pdf' size='large' verticalAlign='middle' color='red'/>
								<a href={FireSafety} rel="noopener noreferrer" target="_blank">
									Fire Safety Policy Statement
								</a>
							</List.Header><br/>
							<List.Description>
								As the owner of Golbourn Training Solutions I have overall responsibility for 
								Fire Safety in all my company’s learning environments. The Fire Safety checks 
								will be carried out prior to learn...
							</List.Description>
						</List.Content>
					</List.Item>
					<List.Item style={{ padding: '1em 0'}}>
						<List.Content>
							<List.Header>
								<List.Icon name='file pdf' size='large' verticalAlign='middle' color='red'/>
								<a href={HealthAndSafety} rel="noopener noreferrer" target="_blank">
									Health & Safety Policy Statement
								</a>
							</List.Header><br/>
							<List.Description>
								Safety is a priority which underpins all of the company’s activities and 
								decision making. Golbourn Training Solutions is dedicated to ensuring the safety 
								of individuals and the protection of...
							</List.Description>
						</List.Content>
					</List.Item>
				</List>
			</Container>
		</Segment>
	</>
)