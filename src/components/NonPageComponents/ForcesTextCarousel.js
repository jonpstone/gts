import React from "react";
import { Button, List } from 'semantic-ui-react';
import { 
		CarouselProvider, 
		Slide, 
		Slider, 
		ButtonBack, 
		ButtonNext
} from "pure-react-carousel";

const TextCarousel = () => (
	<CarouselProvider
		naturalSlideWidth={1}
		naturalSlideHeight={.55}
		totalSlides={4}
		isPlaying={true}
		interval={5000}
		playDirection={'forward'}
		touchEnabled={true}
	>
		<Slider>
			<Slide index={0}>
				<p style={{ fontSize: '1.33em', color: 'white' }}>
                    <h2>BUNDLE COURSE 1</h2>
                    <List bulleted items={[
                        'Emergency First Aid at Work Level 3',
                        'Control of Catastrophic Bleeding CPD',
                        'Fire Safety Level 2',
                        'Health & Safety in the workplace Level 2'
                    ]}/>
                    <h3>2020 SCHEDULE</h3>
                    <List bulleted>
                        <List.Item><b>Aldershot</b> &nbsp; May 04 - 06 & Jul 13 - 15</List.Item>
                        <List.Item><b>Catterick</b> &nbsp; Mar 16 - 18 & Nov 16 - 18</List.Item>
                        <List.Item><b>Coventry</b> &nbsp; Feb 24 - 26 & Sept 07 - 09</List.Item>
                        <List.Item><b>Lossiemouth</b> &nbsp; Aug 24 - 26</List.Item>
                        <List.Item><b>Poole</b> &nbsp; Apr 13 - 15 & Oct 12 - 14</List.Item>
                    </List>
				</p>
			</Slide>
			<Slide index={1}>
                <p style={{ fontSize: '1.33em', color: 'white' }}>
                    <h2>BUNDLE COURSE 2</h2>
                    <List bulleted items={[
                        'Safeguarding Level 3',
                        'Supervisor for Mental Health First Aid Level 3'
                    ]}/>
                    <h3>2020 SCHEDULE</h3>
                    <List bulleted>
                        <List.Item><b>Aldershot</b> &nbsp; Jun 15 - 17</List.Item>
                        <List.Item><b>Catterick</b> &nbsp; May 11 - 13 & Nov 03 - 05</List.Item>
                        <List.Item><b>Coventry</b> &nbsp; Apr 27 - 29 & Oct 19 - 21</List.Item>
                        <List.Item><b>Lossiemouth</b> &nbsp; Oct 26 - 28</List.Item>
                        <List.Item><b>Poole</b> &nbsp; Jun 08 - 10 & Dec 01 - 03</List.Item>
                    </List>
				</p>
			</Slide>
			<Slide index={2}>
                    <p style={{ fontSize: '1.33em', color: 'white' }}>
                        <h2>BUNDLE COURSE 3</h2>
                        <List bulleted items={[
                            'Manual Handling Level 2',
                            'Food Safety Level 2',
                            'Good Nutrition Level 2'
                        ]}/>
                        <h3>2020 SCHEDULE</h3>
                        <List bulleted>
                            <List.Item><b>Aldershot</b> &nbsp; Nov 09 - 11</List.Item>
                            <List.Item><b>Catterick</b> &nbsp; Sept 02 - 04</List.Item>
                            <List.Item><b>Coventry</b> &nbsp; May 18 - 20</List.Item>
                            <List.Item><b>Lossiemouth</b> &nbsp; None (group booking options available)</List.Item>
                            <List.Item><b>Poole</b> &nbsp; Jul 06 - 08</List.Item>
                        </List>
                    </p>
				</Slide>
				<Slide index={3}>
                    <p style={{ fontSize: '1.33em', color: 'white' }}>
                        <h2>BUNDLE COURSE 4</h2>
                        <List bulleted items={[
                            'Emergency First Aid at Work Level 3',
                            'Control of Catastrophic Bleeding CPD',
                            'Fire Safety Level 2',
                            'Health & Safety in the workplace Level 2'
                        ]}/>
                        <h3>2020 SCHEDULE</h3>
                        <List bulleted>
                            <List.Item><b>Aldershot</b> &nbsp; May 04 - 06 & Jul 13 - 15</List.Item>
                            <List.Item><b>Catterick</b> &nbsp; Mar 16 - 18 & Nov 16 - 18</List.Item>
                            <List.Item><b>Coventry</b> &nbsp; Feb 24 - 26 & Sept 07 - 09</List.Item>
                            <List.Item><b>Lossiemouth</b> &nbsp; Aug 24 - 26</List.Item>
                            <List.Item><b>Poole</b> &nbsp; Apr 13 - 15 & Oct 12 - 14</List.Item>
                        </List>
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