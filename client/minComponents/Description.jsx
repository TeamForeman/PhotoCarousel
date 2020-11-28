import React from 'react';
import styles from './css/Description.css';

const Description = (props) => {
  return (
    <div className={styles.asbar}>
      <div className={styles.asheader}>
        <div className={styles.astopbar}>
          <h1 className={styles.aslistingName} >{props.listing.name}</h1>
        </div>
        <div className={styles.asbybar}>

          <div className={styles.asstar}>S</div>

          <div className={styles.asreviews}>
            <div className={styles.asrating}>{props.listing.rating}</div>
            <div className={styles.asrevtotal}>{'(' + props.listing.reviews + ')'}</div>
          </div>

          <div className={styles.asspacer}>·</div>

          <div className={styles.aslocation}>{props.listing.location}</div>

        </div>
      </div>
    </div>
  );
};

export default Description;