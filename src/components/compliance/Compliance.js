import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Container, Menu, Responsive, Header, Grid, Segment, Image } from 'semantic-ui-react'
import NavBar from '../layouts/Header'

  const ComplianceHome = props => 
    <>
        <Header as='h2'>Compliance</Header>
        <p>
            Is your organisation HSE Compliant?  If you have over 5 employees you must have 
            a written Health & Safety policy, safe system of work, risk assessments and 
            adequate training.
        </p>
        <p>
            At Golbourn Training Solutions we can supply you with training to cover all your
            Compliance needs under the H&S 1974 Regulation. Our courses can be purchased as a
            one off course or we can provide you with a personalised bundle.  We run public 
            courses or onsite training at your premises. We will always aim to tailor the 
            course to reflect your business needs.
        </p>
    </>

export default class Compliance extends React.Component {
    state = { activeItem: 'bio' }
  
    handleItemClick = (e, { name }) => 
        this.setState({ 
            activeItem: name,
            // Component: active
        })
  
    render() {
        const { activeItem } = this.state

            return (
                <>
                    <NavBar/>
                    <Grid id='compHero' borderless textAlign='center' style={{ margin: '1em 0 .8em 0' }}>
                        <Grid.Column>
                            <Header inverted as='h1' style={{ marginTop: '.4em', fontSize: '5em' }}>COMPLIANCE</Header>
                        </Grid.Column>
                    </Grid>
                    <Responsive>
                        <Grid >
                            <Grid.Column width={2}>
                                <Menu fluid vertical tabular>
                                <Menu.Item
                                    name='bio'
                                    active={activeItem === 'bio'}
                                    onClick={this.handleItemClick}
                                />
                                <Menu.Item
                                    name='pics'
                                    active={activeItem === 'pics'}
                                    onClick={this.handleItemClick}
                                />
                                <Menu.Item
                                    name='companies'
                                    active={activeItem === 'companies'}
                                    onClick={this.handleItemClick}
                                />
                                <Menu.Item
                                    name='links'
                                    active={activeItem === 'links'}
                                    onClick={this.handleItemClick}
                                />
                                </Menu>
                            </Grid.Column>
                            <Grid.Column borderless stretched width={12}>
                                <Segment>
                                    This is an stretched grid column. This segment will always match the
                                    tab height
                                </Segment>
                            </Grid.Column>
                        </Grid>
                    </Responsive>
                </>
            )
        }
    }