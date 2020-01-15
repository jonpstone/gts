import React from "react";
import { Button, Header } from 'semantic-ui-react';
import { CarouselProvider, Slide, Slider, ButtonBack, ButtonNext } from "pure-react-carousel";

const TextCarousel = () => (
	<CarouselProvider
		naturalSlideWidth={1.8}
		naturalSlideHeight={1.2}
		totalSlides={6}
		isPlaying={true}
		interval={4000}
		playDirection={'forward'}
		touchEnabled={true}
	>
		<Slider>
			<Slide index={0}>
				<p style={{ fontSize: '1.1em', color: 'white' }}>
					<p><b>January 2020</b></p>
					<b>Coventry</b>, West Midlands - EMERGENCY FIRST AID AT WORK LEVEL 3 (FULLY BOOKED)<br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Wednesday, 15 January, 9:30 hours to Wednesday, 15 January, 17:00 hours
					</Header>
					<b>Coventry</b>, West Midlands - EMERGENCY FIRST AID AT WORK LEVEL 3<br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Saturday, 18 January, 9:30 hours to Saturday, 18 January, 17:00 hours
					</Header>
					<b>Coventry</b>, West Midlands - EMERGENCY FIRST AID AT WORK LEVEL 3<br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Tuesday, 21 January, 9:30 hours to Tuesday, 21 January, 17:00 hours
					</Header>
				</p>
			</Slide>
			<Slide index={1}>
				<p style={{ fontSize: '1.1em', color: 'white'}}>
					<p><b>February 2020</b></p>
					<b>Coventry</b>, West Midlands - SUPERVISOR OF MENTAL HEALTH FIRST AID LEVEL 3<br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Monday, 3 February, 9:30 hours to Tuesday, 4 February, 17:00 hours
					</Header>
					<b>Coventry</b>, West Midlands - MENTAL HEALTH FIRST AID LEVEL 2<br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Monday, 3 February, 9:30 hours to Monday, 3 February, 17:00 hours
					</Header>
					<b>Aldershot</b>, Hampshire - FULL FIRST AID AT WORK LEVEL 3 AND CAT BLEED CONTROL CPD<br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Monday, 10 February, 9:30 hours to Wednesday, 12 February, 16:30 hours
					</Header>
					<b>Stockton</b>, Warwickshire - FIRE SAFETY LEVEL 2<br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Tuesday, 25 February, 9:30 hours to Tuesday, 25 February, 15:30 hours
					</Header>
					<b>Stockton</b>, Warwickshire - HEALTH & SAFETY IN THE WORKPLACE LEVEL 2<br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Wednesday, 26 February, 9:30 hours to Wednesday, 26 February, 17:00 hours
					</Header>
				</p>
			</Slide>
			<Slide index={2}>
				<p style={{ fontSize: '1.1em', color: 'white' }}>
					<p><b>March 2020</b></p>
					<b>Catterick</b>, North Yorkshire - EMERGENCY FIRST AT WORK AID LEVEL 3<br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Monday, 16 March, 9:30 hours to Monday, 16 March, 16:30 hours
					</Header>
					<b>Catterick</b>, North Yorkshire - FIRE SAFETY LEVEL 2 <br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Tuesday, 17 March, 9:30 hours to Tuesday, 17 March, 16:30 hours
					</Header>
					<b>Catterick</b>, North Yorkshire - HEALTH & SAFETY IN THE WORKPLACE LEVEL 2<br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Wednesday, 18 March, 9:30 hours to Wednesday, 18 March, 16:30 hours
					</Header>
					<b>Coventry</b>, West Midlands - FULL FIRST AID AT WORK LEVEL 3 AND CAT BLEED CPD<br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Monday, 23 March, 9:30 hours to Wednesday, 25 March, 16:30 hours
					</Header>
				</p>
				</Slide>
				<Slide index={3}>
				<p style={{ fontSize: '1.1em', color: 'white' }}>
					<p><b>April 2020</b></p>
					<b>Poole</b>, Dorset - EMERGENCY FIRST AT WORK AID LEVEL 3<br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Monday, 13 April, 9:30 hours to Monday, 13 April, 16:30 hours
					</Header>
					<b>Poole</b>, Dorset - FIRE SAFETY LEVEL 2<br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Tuesday, 14 April, 9:30 hours to Tuesday, 14 April, 16:30 hours
					</Header>
					<b>Poole</b>, Dorset - HEALTH & SAFETY LEVEL 2<br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Wednesday, 15 April, 9:30 hours to Wednesday, 15 April, 16:30 hours
					</Header>
					<b>Stratford-upon-Avon</b>, Warwickshire - EMERGENCY FIRST AID AT WORK LEVEL 3<br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Wednesday, 22 April, 9:30 hours to Wednesday, 22 April, 17:00 hours
					</Header>
					<b>Stockton</b>, Warwickshire - MENTAL HEALTH FIRST AID LEVEL 2<br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Monday, 27 April, 9:30 hours to Monday, 27 April, 16:30 hours
					</Header>
					<b>Stockton</b>, Warwickshire - SUPERVISOR OF MENTAL HEALTH FIRST AID LEVEL 3<br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Monday, 27 April, 9:30 hours to Tuesday, 28 April, 16:30 hours
					</Header>
					<b>Stockton</b>, Warwickshire - SAFEGUARDING AND PROTECTING CHILDREN, YOUNG PEOPLE OR VULNERABLE ADULTS LEVEL 3<br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Wednesday, 29 April, 9:30 hours to Wednesday, 29 April, 16:30 hours
					</Header>
				</p>
			</Slide>
			<Slide index={4}>
				<p style={{ fontSize: '1.1em', color: 'white' }}>
				<p><b>May 2020</b></p>
					<b>Aldershot</b>, Hampshire - EMERGENCY FIRST AID AT WORK LEVEL 3<br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Monday, 4 May, 9:30 hours to Monday, 4 May, 16:30 hours
					</Header>
					<b>Aldershot</b>, Hampshire - FIRE SAFETY LEVEL 2<br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Tuesday, 5 May, 9:30 hours to Tuesday, 5 May, 15:30 hours
					</Header>
					<b>Catterick</b>, North Yorkshire - MENTAL HEALTH FIRST AID LEVEL 2<br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Monday, 11 May, 9:30 hours to Monday, 11 May, 16:30 hours
					</Header>
					<b>Catterick</b>, North Yorkshire - SUPERVISOR OF MENTAL HEALTH FIRST AID LEVEL 3<br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Monday, 11 May, 9:30 hours to Tuesday, 12 May, 16:30 hours
					</Header>
					<b>Catterick</b>, North Yorkshire - SAFEGUARDING AND PROTECTING CHILDREN, YOUNG PEOPLE OR VULNERABLE ADULTS LEVEL 3 <br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Wednesday, 13 May, 9:30 hours to Wednesday, 13 May, 16:30 hours
					</Header>
					<b>Coventry</b>, West Midlands - MANUAL HANDLING PRINCIPLES AND PRACTICE LEVEL 2<br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Monday, 18 May, 9:30 hours to Monday, 18 May, 16:30 hours
					</Header>
					<b>Coventry</b>, West Midlands - FOOD SAFETY LEVEL 2<br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Tuesday, 19 May, 9:30 hours to Tuesday, 19 May, 16:30 hours
					</Header>			
					<b>Coventry</b>, West Midlands - GOOD NUTRITION LEVEL 2<br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Wednesday, 20 May, 9:30 hours to Wednesday, 20 May, 16:30 hours
					</Header>			
					<b>Stratford-upon-Avon</b>, Warwickshire - EMERGENCY FIRST AID AT WORK LEVEL 3<br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Wednesday, 27 May, 9:30 hours to Wednesday, 27 May, 16:30 hours
					</Header>
				</p>
			</Slide>
			<Slide index={5}>
				<p style={{ fontSize: '1.1em', color: 'white' }}>
				<p><b>June 2020</b></p>
					<b>Poole</b>, Dorset - MENTAL HEALTH FIRST AID LEVEL 2<br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Monday, 8 June, 9:30 hours to Monday, 8 June, 16:30 hours
					</Header>
					<b>Poole</b>, Dorset - SUPERVISOR OF MENTAL HEALTH FIRST AID LEVEL 3<br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Monday, 8 June, 9:30 hours to Tuesday, 9 June, 16:30 hours
					</Header>
					<b>Poole</b>, Dorset - SAFEGUARDING AND PROTECTING CHILDREN, YOUNG PEOPLE OR VULNERABLE ADULTS LEVEL 3<br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Wednesday, 10 June, 9:30 hours to Wednesday, 10 June, 16:30 hours
					</Header>
					<b>Aldershot</b>, Hampshire - MENTAL HEALTH FIRST AID LEVEL 2<br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Monday, 15 June, 9:30 hours to Monday, 15 June, 16:30 hours
					</Header>
					<b>Aldershot</b>, Hampshire - SUPERVISOR OF MENTAL HEALTH FIRST AID LEVEL 3<br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Monday, 15 June, 9:30 hours to Tuesday, 16 June, 16:30 hours
					</Header>
					<b>Aldershot</b>, Hampshire - SAFEGUARDING AND PROTECTING CHILDREN, YOUNG PEOPLE OR VULNERABLE ADULTS LEVEL 3<br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Wednesday, 17 June, 9:30 hours to Wednesday, 17 June, 16:30 hours
					</Header>
					<b>Coventry</b>, West Midlands - SERIOUS INCIDENT CONTROL MEASURES (LEVEL 3) CPD & CPR / AED LEVEL 2 <br/>
					<Header inverted as='h5' style={{ padding: '0', margin: '0 0 .5em 0' }}>
						Monday, 22 June, 9:30 hours to Wednesday, 24 June, 17:30 hours
					</Header>
				</p>
			</Slide>
		</Slider><br/>
		<ButtonBack style={{ all: 'unset' }}>
				<Button inverted labelPosition='left' icon='left chevron' content='Back' style={{ marginRight: '1em'}} />
		</ButtonBack>
		<ButtonNext style={{ all: 'unset' }}>
				<Button inverted labelPosition='right' icon='right chevron' content='Forward' />
		</ButtonNext>

	</CarouselProvider>
);

export default TextCarousel;