import React from 'react';
import * as styles from './sidebar.module.css';
import group from '../../assets/Group.png';
import optometry from '../../assets/optometry.png';
import neurology from '../../assets/neurology.png';
import phulmonology from '../../assets/phulmonology.png';
import cardiology from '../../assets/cardiology.png';
import darmatology from '../../assets/darmatology.png';
import radiography from '../../assets/radiography.png';
import analysis from '../../assets/analysis.png';
import help from '../../assets/help.png';
import settings from '../../assets/settings.png';


const Sidebar = () => {
  return (
		<div className={styles.menuContainer}>
			<div className={styles.menuList}>
				<div className={styles.subMenu}>
					<img src={group} alt="" />
					<p>General</p>
				</div>
				<div className={styles.subMenu}>
					<img src={optometry} alt="" />
					<p>Optimetry</p>
				</div>
				<div className={styles.subMenu}>
					<img src={neurology} alt="" />
					<p>Neurology</p>
				</div>
				<div className={styles.subMenu}>
					<img src={phulmonology} alt="" />
					<p>Phulmonology</p>
				</div>
				<div className={styles.subMenu}>
					<img src={cardiology} alt="" />
					<p>Cardiology</p>
				</div>
				<div className={styles.subMenu}>
					<img src={radiography} alt="" />
					<p>Radiography</p>
				</div>
				<div className={styles.subMenu}>
					<img src={darmatology} alt="" />
					<p>Darmatology</p>
				</div>
				<div className={styles.subMenu}>
					<img src={analysis} alt="" />
					<p>Analysis</p>
				</div>
				<div className={styles.subMenu}>
					<img src={help} alt="" />
					<p>Help</p>
				</div>
				<div className={styles.subMenu}>
					<img src={settings} alt="" />
					<p>Settings</p>
				</div>
			</div>
		</div>
	);
}

export default Sidebar