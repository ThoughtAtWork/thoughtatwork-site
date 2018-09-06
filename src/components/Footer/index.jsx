import React from 'react';
import Sponsor from './Sponsor';
// import FooterBottom from './FooterBottom';
// import BeSponsor from './BeSponsor';
import classnames from 'classnames';
import data from '../../assets/sponsors.json';

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
      <div className={classnames('footer')}>
        <div className={classnames(
          // 'flex-align-center',
          // 'gridish-container',
          // 'gridish-grid',
          'footer-sponsors',
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
