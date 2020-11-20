import React from 'react';
import styles from './Header.css';

const Header = (props) => {
  return (
    <div>
      <div className={styles.topbar}>
        <h1 className={styles.header} >{props.listing.name}</h1>
      </div>
      <div className={styles.bybar}>
        <div>
          <div className={styles.star}>STAR</div>
          <div className={styles.rating}>{props.listing.rating}</div>
          <div className={'(' + styles.reviews + ')'}>{props.listing.reviews}</div>
          <div className={styles.location}>{props.listing.location}</div>
        </div>
        <div>
          <div className={styles.share}>share</div>
          <div className={styles.save}>save</div>
        </div>
      </div>
    </div>
  );

};

export default Header;