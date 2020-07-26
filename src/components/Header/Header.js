import React from 'react';
import styles from './Header.module.css';
import logo from '../../images/Logo.png';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.navContainer}>
        <div className={styles.hamburger}>
          <div className={styles.navBar1}></div>
          <div className={styles.navBar2}></div>
        </div>
        <div className={styles.nav1}>
          <a href="/store">STORE</a>
          <a href="/tutorials">TUTORIALS</a>
        </div>
        <div className={styles.nav2}>
          <a href="/blog">BLOG</a>
          <a href="/contact">CONTACT</a>
        </div>
        <img className={styles.logo} src={logo} alt='Byrd MR Logo' />
      </div>
    );
  }
}

export default Header;


