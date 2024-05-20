import React, { useEffect, useState } from 'react';
import * as styles from './phulmonology.module.css';
import bottomLoading from '../../assets/bottomLoading.png';
import human from '../../assets/human.png';
import heart from '../../assets/heartFilled.png';
import export_button from '../../assets/export-button.png';
import meter from '../../assets/heart_meter.png';
import meter_two from '../../assets/second_speedometer.png';
import meter_third from '../../assets/third_speedometer.png';
import graphValues from '../../assets/graph_values.png';
import first_card from '../../assets/first_card.png';
import second_card from '../../assets/second_card.png';

const Phulmonology = () => {

    const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.humanContainer} ${startAnimation ? styles.start : ''}`}>
        <div className={styles.skeleton}>
          {/* <img src={human} alt="" width="100%" height="100%" /> */}
        </div>
        <div className={styles.heart}>
          <img src={heart} alt="" width="100%" height="100%" />
        </div>
        <div className={styles.loading}>
          <img src={bottomLoading} alt="" width="100%" height="100%" />
        </div>
        <div className={styles.line}></div>
      </div>

      <div className={styles.analysis}>
        <div className={`${styles.info_box} ${startAnimation ? styles.start : ''}`}>
          <p className={styles.heading}>Hemodynamic</p>
          <div className={styles.date_img}>
            <p className={styles.start_date}>28.06.24</p>
            <p>28.06.24</p>
            <p>28.06.24</p>
            <img src={export_button} alt="" width="140px" height="30px" />
          </div>
        </div>
        <div className={styles.meter_box}>
          <div className={`${styles.single_meter} ${startAnimation ? styles.start : ''}`}>
            <img src={meter} alt="" width='100%' height='100%' />
            <div className={styles.speedometer}></div>
          </div>
          <div className={`${styles.single_meter} ${startAnimation ? styles.start : ''}`}>
            <img src={meter_two} alt="" width='100%' height='100%' />
            <div className={styles.speedometer}></div>
          </div>
          <div className={`${styles.single_meter} ${startAnimation ? styles.start : ''}`}>
            <img src={meter_third} alt="" width='100%' height='100%' />
            <div className={styles.speedometer}></div>
          </div>
        </div>

        <div className={`${styles.info_box} ${startAnimation ? styles.start : ''}`}>
          <p className={styles.heading}>Vitamin analysis</p>
          <div className={styles.vitamin}>
            <p className={styles.start_date}>28.06.24</p>
            <p>28.06.24</p>
            <img src={export_button} alt="" width="140px" height="30px" />
          </div>
        </div>
        <div className={styles.graphContainer}>
          {/* <img className={styles.marks} src={graphValues} alt="" width='100%' height='100%' />
          <div className={`${styles.graph} ${startAnimation ? styles.start : ''}`}></div> */}
        </div>
        <div className={styles.card_info}>

          <div className={styles.first_card}>
              {/* <img src={first_card} alt=""  width='100%' height='100%'/> */}
          </div>
          <div className={styles.second_card}>
          {/* <img src={second_card} alt=""width='100%' height='100%'/> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Phulmonology