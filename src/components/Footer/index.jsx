import React from 'react';
import Sponsor from './Sponsor';
// import FooterBottom from './FooterBottom';
// import BeSponsor from './BeSponsor';
import classnames from 'classnames';
import data from '../../assets/sponsors.json';
import styles from '../../styles/components/footer/footer.module.scss';

class Footer extends React.Component {
  createSponsor = sponsor => {
    return (
      <Sponsor
        imageURL={sponsor.image}
        key={sponsor.name}
        imageName={sponsor.name}
        imageSite={sponsor.site}
      />
    );
  };

  createSponsors = sponsors => {
    return sponsors.map(this.createSponsor);
  };

  render() {
    return (
      <div className={classnames(styles.footer__spacing)}>
        <h1 className={classnames('content-Block--margin-top container flex gridish-container gridish-container--complete gridish-grid__height--medium--13 gridish-grid__height--small--14 gridish-grid__height--xsmall--12')}>our sponsors</h1>
        <div className={classnames(
          'flex-align-center',
          'gridish-container',
          'gridish-grid',
          'gridish-container--complete',
          'gridish-grid',
          'flex-align-center',
          'container',
          styles.sponsorContainer
        )}>
          {this.createSponsors(data.sponsor)}
          {/* <BeSponsor /> */}
        </div>
        {/* <FooterBottom /> */}
      </div>
    );
  }
}

export default Footer;
