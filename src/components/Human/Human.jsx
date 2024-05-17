import React, { useEffect, useState } from 'react';
import * as styles from './human.module.css';
import bottomLoading from '../../assets/bottomLoading.png';
import human from '../../assets/human.png';
import heart from '../../assets/heartFilled.png';

const Human = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  return (
    <div className={`${styles.humanContainer} ${startAnimation ? styles.start : ''}`}>
      <div className={styles.skeleton}>
        <img src={human} alt="" width="100%" height="100%" />
      </div>
      <div className={styles.heart}>
        <img src={heart} alt="" width="100%" height="100%" />
      </div>
      <div className={styles.loading}>
        <img src={bottomLoading} alt="" width="100%" height="100%" />
      </div>
      <div className={styles.line}></div>
    </div>
  );
};

export default Human;
