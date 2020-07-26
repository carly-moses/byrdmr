import React from 'react';
import Header from '../Header/Header';
import drone from '../../images/Drone.png';
import shadow from '../../images/Shadow.png';
import styles from './Intro.module.css';

class Intro extends React.Component {
  render() {
    return (
      <div className={styles.intro}>
        <Header />
        <div className={styles.imgContainer}>
          <img className={styles.drone} src={drone} alt='Drone' />
          <img className={styles.shadow} src={shadow} alt='Shadow underneath the drone' />
        </div>
        <div>
          <h1 className={styles.title}> F-210 </h1>
          <h3 className={styles.description}>"THE FASTEST DRONE ON THE PLANET"</h3>
          <p className={styles.quotedBy}>"The- Wirecutter</p>
        </div>
      </div>
    );
  }
}

export default Intro;