import React from 'react';
import styles from './css/Header.css';

const Header = (props) => {
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

          <div className={styles.asbuttons}>
            <div className={styles.asshare}>
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className={styles.asarrowIcon}><g fill="none"><path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path><path d="M16 3v23V3z"></path><path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path></g></svg>
              <text>Share</text>
            </div>
            <div className={styles.assave}>
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className={styles.asheartIcon}><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg>
              <text>Save</text>
            </div>
          </div>

        </div>
      </div>
    </div>
  );

};

export default Header;