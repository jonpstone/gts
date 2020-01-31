import React from 'react'
import moment from 'moment'
import { Segment, Header } from 'semantic-ui-react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import NavBar from '../../components/layouts/Header'
import MobileNavBar from '../../components/layouts/MobileHeader'
import events from '../events'
import 'react-big-calendar/lib/css/react-big-calendar.css'

export default class PublicCourses extends React.Component {

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

const localizer = momentLocalizer(moment)

const Body = ({ mobile }) => (
	<>
		<Header as='h2' style={mobile ? { fontSize: '3em' } : { display: 'none' }}>PUBLIC COURSES</Header>
		<Segment basic style={mobile ? { marginTop: '2em' } : null }>
			<Calendar
				localizer={localizer}
				events={events}
				startAccessor="start"
				endAccessor="end"
				style={{ height: 700 }}
			/>
		</Segment>
	</>
)