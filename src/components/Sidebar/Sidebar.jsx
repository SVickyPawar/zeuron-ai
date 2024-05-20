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
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
		<div className={styles.menuContainer}>
			<div className={styles.menuList}>
			<Link to='/'>
				<div className={styles.subMenu}>
					<img src={group} alt="" />
					<p>General</p>
				</div>
				</Link>

				<Link to='/optimetry'>
				<div className={styles.subMenu}>
					<img src={optometry} alt="" />
					<p>Optimetry</p>
				</div>
				</Link>


				<Link to='/neurology'>
				<div className={styles.subMenu}>
					<img src={neurology} alt="" />
					<p>Neurology</p>
				</div>
				</Link>


				<Link to='/phulmonology'>
				<div className={styles.subMenu}>
					<img src={phulmonology} alt="" />
					<p>Phulmonology</p>
				</div>
				</Link>

				<Link to='/cardiology'>
				<div className={styles.subMenu}>
					<img src={cardiology} alt="" />
					<p>Cardiology</p>
				</div>
				</Link>
				
				<Link to='/radiography'>
				<div className={styles.subMenu}>
					<img src={radiography} alt="" />
					<p>Radiography</p>
				</div>
				</Link>
				
				<Link to='/darmatology'>
				<div className={styles.subMenu}>
					<img src={darmatology} alt="" />
					<p>Darmatology</p>
				</div>
				</Link>

				<Link to='/analysis'>
				<div className={styles.subMenu}>
					<img src={analysis} alt="" />
					<p>Analysis</p>
				</div>
				</Link>

				<Link to='/help'>
				<div className={styles.subMenu}>
					<img src={help} alt="" />
					<p>Help</p>
				</div>
				</Link>


				<Link to='/settings'>
				<div className={styles.subMenu}>
					<img src={settings} alt="" />
					<p>Settings</p>
				</div>
				</Link>
							
			</div>
		</div>
	);
}

export default Sidebar