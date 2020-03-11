import React from 'react';
import { Segment, Grid, Header, List, Image } from 'semantic-ui-react'
import NavBar from '../../components/layouts/Header'
import MobileNavBar from '../../components/layouts/MobileHeader'
import Fade from 'react-reveal/Fade'

export default class About extends React.Component {

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
        <Header as='h2' style={mobile ? { fontSize: '3em' } : { display: 'none' }}>ABOUT</Header>
        <Segment basic style={mobile ? { padding: '3em 1em' } : { padding: '8em' }} vertical>
            <Grid divided container stackable verticalAlign='top'>
                <Grid.Row> 
                    <Grid.Column 
                        floated='left' 
                        width={8} 
                        style={{paddingRight: '5em', marginBottom: '1.5em'}}
                    >
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            Philosophy
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            Golbourn Training Solutions believes in making training fun, interactive and 
                            realistic. With our courses the dreaded mandatory training is a thing of the 
                            past. We will adapt our courses around each and every learner to maximise not 
                            only their individual experience but for the group as a whole. The right 
                            environment, the right atmosphere and the right instructor can get the best out 
                            of everyone.
                        </p>
                        <p style={{ fontSize: '1.33em' }}>
                            Learning is <b>developing</b>, developing is <b>investing</b>, investing is 
                            securing <b>success</b> for the future.
                        </p>
                    </Grid.Column>
                    <Grid.Column floated='right' width={8} style={{paddingLeft: '5em'}}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            Method
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            We make our Training scenarios as realistic as possible with the use of casualty 
                            simulation and job related tasks, this is not only fun and realistic, but it's a 
                            crucial learning tool. When your First Aider for example is in an emergency 
                            situation their training and muscle memory will make the difference.
                        </p>
                        <p style={{ fontSize: '1.33em' }}>
                            We aim to help make your staff the best they can be, and with our security 
                            training we will prepare you with the skills to protect your staff and clients.
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        <Fade bottom>
            <Segment basic vertical>
                <Grid container stackable verticalAlign='top'>
                    <Grid.Row style={{ border: '0' }}>
                        <Grid.Column floated='right' width={8}>
                            <p style={{ fontSize: '1.33em' }}>
                                Golbourn Training Solutions Ltd provides UK coverage. We can come to your location 
                                or you can book at one of the centres from the below list.
                            </p>
                            <List bulleted style={{ fontSize: '1.33em' }} items={[
                                'Lossiemouth, Moray',
                                'Catterick, North Yorkshire',
                                'Coventry, West Midlands',
                                'Aldershot, Hampshire',
                                'Poole, Dorset'
                            ]} />
                        </Grid.Column>
                        <Grid.Column width={8} style={{ margin: '0', padding: '0'}}>
                            <Image
                                centered
                                src='/images/ukMap.webp' 
                                size='large' 
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </Fade>
        <Fade bottom>
            <Grid stackable verticalAlign='top'>
                <Grid.Row style={{ margin: '3em 0 1em 0' }}>
                    <Header
                        icon
                        as='h3' 
                        textAlign='center' 
                        style={mobile ? 
                            { marginTop: '2em', fontSize: '2em', marginBottom: '1em' } : 
                            { fontSize: '2em', marginBottom: '1em' }}
                        >
                        CLIENT TESTIMONIALS 
                    </Header>
                </Grid.Row>
            </Grid>
        </Fade>
        <Fade bottom>
            <Grid stackable verticalAlign='top'>
                <Grid.Row style={{ margin: '0', padding: '0', backgroundColor: '#a58f7e' }}>
                    <Grid.Column
                            floated='right' 
                            width={8} 
                            style={{
                                backgroundColor: '#7ea5a3',
                                padding: '2em 4em', 
                                color: 'white', 
                                fontSize: '1.33em'
                            }}
                        >
                        <p>
                            Excellent course and a great trainer - interactive, engaging and interesting. We 
                            have used Steve for both First Aid and AED training and I have definitely come away 
                            from both feeling confident that I could help in an emergency situation. We will, 
                            without question, use Steve again when refreshers are due. 
                        </p>
                        <p>
                            <b>Nick Felton 2017</b>
                        </p>
                    </Grid.Column>
                    <Grid.Column
                        floated='left' 
                        width={8} 
                        style={{
                            padding: '2em 4em', 
                            color: 'white', 
                            fontSize: '1.33em'
                        }}
                    >
                        <p>
                            Steve has delivered a number of outstanding courses for us as a subcontractor. He is 
                            extremely reliable and an excellent communicator. Feedback from our Trainees 
                            emphasise his commitment, attention to their needs and how interesting they find his
                            courses. Thank you Steve.
                        </p>
                        <p>
                            <b>Vivienne 2017</b>
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Fade>
        <Fade bottom>
            <Grid stackable verticalAlign='top'>
                <Grid.Row style={{ margin: '0', padding: '0', backgroundColor: '#7ea58f' }}>
                    <Grid.Column
                            floated='right' 
                            width={8} 
                            style={{
                                backgroundColor: '#a5a37e',
                                padding: '2em 4em', 
                                color: 'white', 
                                fontSize: '1.33em'
                            }}
                        >
                        <p>
                            I was really nervous about attending a First Aid course, Steve helped me feel 
                            relaxed and I thoroughly enjoyed it. I would definitely recommend Golbourn Training 
                            Solutions.
                        </p>
                        <p>
                            <b>Jo Cross 2017</b>
                        </p>
                    </Grid.Column>
                    <Grid.Column
                        floated='left' 
                        width={8} 
                        style={{
                            padding: '2em 4em', 
                            color: 'white', 
                            fontSize: '1.33em'
                        }}
                    >
                        <p>
                            Attended a First Aid Course as a requirement of being a Scout Leader. The day's 
                            course was informative, professional and fun. Thank you.
                        </p>
                        <p>
                            <b>Graham Folkes-Skinner 2017</b>
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Fade>
        <Fade bottom>
            <Grid stackable verticalAlign='top'>
                <Grid.Row style={{ margin: '0', padding: '0', backgroundColor: '#81a57e' }}>
                    <Grid.Column
                            floated='right' 
                            width={8} 
                            style={{
                                padding: '2em 4em', 
                                color: 'white', 
                                fontSize: '1.33em'
                            }}
                        >
                        <p>
                            Attended a fire warden course with Golbourn Training Solutions, best fire safety and 
                            warden course I have done. 
                        </p>
                        <p>
                            <b>Tanya Davies 2016</b>
                        </p>
                    </Grid.Column>
                    <Grid.Column
                        floated='left' 
                        width={8} 
                        style={{
                            backgroundColor: '#94a57e',
                            padding: '2em 4em', 
                            color: 'white', 
                            fontSize: '1.33em'
                        }}
                    >
                        <p>
                            Great CPD first aid training from Golbourn Training Solutions. Very informative but 
                            relaxed environment so we could ask lots of questions. Excellent trainer. Thank you. 
                        </p>
                        <p>
                            <b>Rachel 2016</b>
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Fade>
    </>
)