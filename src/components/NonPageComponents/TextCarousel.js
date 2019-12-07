import React from "react";
import { 
    CarouselProvider, 
    Slide, 
    Slider, 
    ButtonBack, 
    ButtonNext 
} from "pure-react-carousel";
import { Button } from 'semantic-ui-react';


const TextCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={.3}
    totalSlides={3}
    isPlaying={true}
    interval={4000}
    playDirection={'forward'}
    touchEnabled={true}
  >
    <Slider>
      <Slide index={0}>
        <p style={{ fontSize: '1.33em', color: 'white' }}>
            <b>CATASTROPHIC BLEED CONTROL TRAUMA CPD</b><br/>
            Stockton, Warwickshire - 17th September 2019<br/>
            Aldershot, Hampshire - 24th September 2019<br/>
            Aldershot, Hampshire - 25th September 2019<br/>
            Aldershot, Hampshire - 26th September 2019<br/>
            Stockton, Warwickshire - 6th November 2019
        </p>
      </Slide>
      <Slide index={1}>
        <p style={{ fontSize: '1.33em', color: 'white'}}>
            <b>HEALTH & SAFETY IN THE WORKPLACE LEVEL 3</b><br/>
            Stockton, Warwickshire - 18th September 2019<br/>
            Aldershot, Hampshire - 25th September 2019
        </p>
      </Slide>
      <Slide index={2}>
        <p style={{ fontSize: '1.33em', color: 'white' }}>
            <b>FIRE SAFETY LEVEL 2</b><br/>
            Stockton, Warwickshire - 17th September 2019<br/>
            Aldershot, Hampshire - 24th September 2019
        </p>
      </Slide>
    </Slider>
    <ButtonBack style={{ all: 'unset' }}>
        <Button inverted labelPosition='left' icon='left chevron' content='Back' />
    </ButtonBack>
    <ButtonNext style={{ all: 'unset' }}>
        <Button inverted labelPosition='right' icon='right chevron' content='Forward' />
    </ButtonNext>

  </CarouselProvider>
);

export default TextCarousel;
