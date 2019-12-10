import React from "react";
import { Button, Grid } from 'semantic-ui-react';
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
    naturalSlideHeight={.3}
    totalSlides={9}
    isPlaying={true}
    interval={4000}
    playDirection={'forward'}
    touchEnabled={true}
  >
    <Slider>
      <Slide index={0}>
        <p style={{ fontSize: '1.33em', color: 'white' }}>
            <b>SUPERVISOR FOR MENTAL HEALTH FIRST AID LEVEL 3</b><br/>
            Stockton, Warwickshire - 7-8 September 2019<br/>
            Aldershot, Hampshire - 18-19 September 2019<br/>
            Stockton, Warwickshire - 8-9 October 2019<br/>
            Aldershot, Hampshire - 21-22 October 2019
        </p>
      </Slide>
      <Slide index={1}>
        <p style={{ fontSize: '1.33em', color: 'white'}}>
            <b>SAFEGUARDING OF CHILDREN, ADULTS AND VULNERABLE PEOPLE LEVEL 3</b><br/>
            Stockton, Warwickshire - 28th August 2019<br/>
            Stockton, Warwickshire - 6th September 2019<br/>
            Aldershot, Hampshire - 18th September 2019<br/>
            Stockton, Warwickshire - 7th October 2019<br/>
            Aldershot, Hampshire - 23rd October 2019
        </p>
      </Slide>
      <Slide index={2}>
        <p style={{ fontSize: '1.33em', color: 'white' }}>
            <b>EMERGENCY FIRST AID AT WORK LEVEL 3</b><br/>
            Stratford upon Avon, Warwickshire - 4th September 2019<br/>
            Stockton, Warwickshire - 16th September 2019<br/>
            Aldershot, Hampshire - 23rd September 2019<br/>
            Stratford upon Avon, Warwickshire - 30th September 2019<br/>
            Stratford upon Avon, Warwickshire - 26th November 2019
        </p>
        </Slide>
        <Slide index={3}>
        <p style={{ fontSize: '1.33em', color: 'white' }}>
            <b>FIRST AID AT WORK LEVEL 3</b><br/>
            Stockton, Warwickshire - 14th-16th October 2019
        </p>
      </Slide>
      <Slide index={4}>
        <p style={{ fontSize: '1.33em', color: 'white' }}>
            <b>CATASTROPHIC BLEED CONTROL TRAUMA CPD</b><br/>
            Stockton, Warwickshire - 17th September 2019
            Aldershot, Hampshire - 24th September 2019
            Stockton, Warwickshire - 6th November 2019
        </p>
      </Slide>
      <Slide index={5}>
        <p style={{ fontSize: '1.33em', color: 'white' }}>
            <b>HEALTH & SAFETY IN THE WORKPLACE LEVEL 3</b><br/>
            Stockton, Warwickshire - 18th September 2019<br/>
            Aldershot, Hampshire - 25th September 2019
        </p>
      </Slide>
      <Slide index={6}>
        <p style={{ fontSize: '1.33em', color: 'white' }}>
            <b>MANUAL HANDLING LEVEL 2</b><br/>
            Stockton, Warwickshire - 11th November 2019
        </p>
      </Slide>
      <Slide index={7}>
        <p style={{ fontSize: '1.33em', color: 'white' }}>
            <b>FIRE SAFETY LEVEL 2</b><br/>
            Stockton, Warwickshire - 17th September 2019<br/>
            Aldershot, Hampshire - 24th September 2019
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
