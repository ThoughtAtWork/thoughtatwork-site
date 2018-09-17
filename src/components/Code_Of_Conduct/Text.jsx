import React, { Component } from 'react';
import classnames from 'classnames';
import styles from '../../styles/components/coc.module.scss';


export class Text extends Component {
  render() {
    return (
      <div className={classnames('gridish-grid container gridish-container--complete gridish-grid__col--xsmall--4')}>
        <h1 className={styles.coc__maxWidth}>the thought at work code of conduct</h1>
        <p className={styles.paragraph__marginTop}>All delegates, speakers, sponsors and volunteers at any Thought At Work event are required to agree with the following code of conduct. Organizers will enforce this code throughout the event.</p>
        <h2 className='content-Block--margin-top'>short version</h2>
        <p className={styles.paragraph__marginTop}>Thought At Work is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack thereof), or technology choices. We do not tolerate harassment of conference participants in any form. Inappropriate sexual language and imagery is not condoned for any conference venue, including talks, workshops, parties, Twitter and other online media. Conference participants violating these rules may be sanctioned or expelled from the conference without a refund at the discretion of Thought At Works's organizers.</p>
        <h2 className='content-Block--margin-top'>long version</h2>
        <p className={styles.paragraph__marginTop}>Thought Harassment includes offensive verbal comments related to gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion, technology choices, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention. <br /><br />

          Participants asked to stop any harassing behavior are expected to comply immediately.
          <br /><br />
          Sponsors are also subject to the anti-harassment policy. In particular, sponsors should not use sexualized images, activities, or other material. Booth staff (including volunteers) should not use sexualized clothing/uniforms/costumes, or otherwise create a sexualized environment.
          <br /><br />
          If a participant engages in harassing behavior, the conference organizers may take any action they deem appropriate, including warning the offender, expulsion from the conference with no refund, or notifying the appropriate authorities.
          <br /><br />
          If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of conference staff immediately.
          <br /><br />
          Conference staff will be happy to help participants contact campus safety/security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the conference. We value your attendance.
          <br /><br />
          We expect participants to follow these rules at all conference venues and conference-related social events.</p>
      </div>
    );
  }
}

export default Text;