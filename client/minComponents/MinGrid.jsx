import React from 'react';
import styles from './css/MinGrid.css';

const MinGrid = (props) => {
  console.log(props);
  const photos = props.data.data[0].photos;

  const createGroups = (total) => {
    var groups = [];

    var z = 0;
    while (z < total.length) {
      var x = 0;

      var divGroup = [];
      while (x < 3 && total[z]) {
        divGroup.push(total[z]);
        x++;
        z++;
      }
      groups.push(divGroup);
    }
    return groups;
  };

  const divGroups = createGroups(photos);

  return (
    <div className={styles.aswindowdiv}>
      <div className={styles.asmingridheader} onClick={ (e)=> { props.toggleMinGrid(e, false); }}>
        <svg className={styles.asclosemingrid} viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false"><path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fill-rule="evenodd"></path></svg>
      </div>

      <div className={styles.asmincontainer} >
        {
          divGroups.map(div => {
            if (div.length === 3) {
              return (
                <div className={styles.as3grid}>
                  <div className={styles['as3-1']}>
                    <img className={styles.asimage} src={div[0].url}></img>
                  </div>
                  <div className={styles['as3-2']}>
                    <img className={styles.asimage} src={div[1].url}></img>
                  </div>
                  <div className={styles['as3-3']}>
                    <img className={styles.asimage} src={div[2].url}></img>
                  </div>
                </div>
              );
            } else if (div.length === 2) {
              return (
                <div className={styles.as2grid}>
                  <div className={styles['as2-1']}>
                    <img className={styles.asimage} src={div[0].url}></img>
                  </div>
                  <div className={styles['as2-2']}>
                    <img className={styles.asimage} src={div[1].url}></img>
                  </div>
                </div>
              );
            } else if (div.length === 1) {
              return (
                <div className={styles.as1grid}>
                  <div className={styles['as1-1']}>
                    <img className={styles.asimage} src={div[0].url}></img>
                  </div>
                </div>
              );
            }

            /* return (
              <div className={styles.asimgdiv}>
                <img src={photo.url}></img>
              </div>
            ); */
          })
        }
      </div>

    </div>
  );
};

export default MinGrid;