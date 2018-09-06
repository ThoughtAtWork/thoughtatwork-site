import React from 'react';
import classnames from 'classnames';
import styles from '../../styles/components/footer/footer.module.scss';

let Sponsor = function statelessFunctionComponentClass(props) {
  let imageURL = './assets/sponsor-logos/sponsor_' + props.imageURL;
  let imageName = props.imageName + ' Logo';
  let imageSite = props.imageSite;

  return (
    <div className={
      classnames(
        'gridish-grid__col--xsmall--2',
        'gridish-grid__col--small--2',
        'gridish-grid__col--medium--2',
        'gridish-grid__height--xsmall--7',
      )}>
      <a href={imageSite} target='_blank'>
        <img className={classnames('sponsor-image', styles.sponsorLogo,)} src={__PATH_PREFIX__ + imageURL} alt={imageName} />
      </a>
    </div>
  );
};

export default Sponsor;
