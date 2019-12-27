import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import NavBar from '../../components/layouts/Header'

export default props => 
  <>
    <NavBar/>
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h2'>Armed Forces Covenant</Header>
      <p>
        Whether you are leaving the Armed Forces or your direct family would like to increase their employability, 
        Golbourn Training Solutions are passionate in helping our Armed Forces and their families.

        We work with serving personnel (Regular and Reserves), Veterans and direct family members.

        All Armed Forces can access any one of our public courses at a discounted rate or can attend one of our specialised MOD Courses 
        where we cover multiple subjects over 3 days.  We teach nationwide and can teach on MOD bases, including ATCs if requested.

        Please contact us for further details.
      </p>
    </Container>
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h2'>Example of our most popular MOD Courses</Header>
      <p>
        Option 1 - 3 Days
        Emergency First Aid at Work Level 3
        Control of Catastrophic Bleeding CPD
        Fire Safety Level 2
        Health & Safety in the workplace Level 2

        Option 2 - 3 Days
        Manual Handling Level 2
        Food Safety Level 2
        Safeguarding Level 3

        Option 3 - 3 Days
        Supervisor for Mental Health First Aid Level 3

        <p><b>
          As a serving soldier with a family I understand that money does not grow on trees, that is why I am offering all my courses 
          at a discounted rate for Serving Armed Forces Personnel, their families, <bold>veterans</bold> and Civil Service workers and contractors.
        </b></p>
      </p>
     </Container>
   </>
