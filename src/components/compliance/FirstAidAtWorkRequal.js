import React from 'react'
import { Container, Header } from 'semantic-ui-react'

export default props => 
  <Container text style={{ marginTop: '7em' }}>
  
    <Header as='h2'>First Aid at Work Requalification</Header>

    <p>This two day First Aid at Work course is designed for those who currently hold a First Aid at Work qualification and are due to 
    expire.</p>

    <p>Please consider the following rules for attendance:</p>
      
    <ul>
      <li>
        A First Aider can renew their First Aid at Work qualification by attending a 2-day requalification course without question, if it’s
        within 1 month past the expiry date
      </li>
      <li>
        If the First Aider has lapsed by more than 1 month, but no longer than 3 months, then the First 
        Aider can requalify by attending a 2-day course providing ‘Special considerations’ have been applied
      </li>
    </ul>

    <p>Special considerations are:</p>

    <ul>
      <li>
        A signed letter from the employer to the provider of the training stating the reasons why in their opinion, the First Aider is 
        suitably experienced to attend a 2-day course and does not require a full 3-day FAW course
       </li>
    Or
      <li>
        A decision is made by the provider of the training after discussions with the employer, or the First Aider, and deciding that 
        their previous experience is sufficient to attend a 2-day course.
      </li>
    </ul>

    <p>
      IMPORTANT:   If the First Aider has lapsed beyond 3 months, then they must attend a full 3-day First Aid at Work course.
    </p>
    <p>
      The important thing to remember is that as soon as the certificate expires, the First Aider is no longer considered competent to 
      act as a First Aider in the workplace which may well leave the employer with a shortfall of First Aiders. Therefore, it would be 
      prudent to arrange their First Aid at Work Requalification before they expire.
    </p>
    <p>
      Please note add-ons like +F and Catastrophic Bleed Control can be run in conjunction.
    </p>
  </Container>
