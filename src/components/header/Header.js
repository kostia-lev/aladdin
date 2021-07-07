import styles from './Header.module.css';
import logo from '../../assets/logo.svg';
import arrow from '../../assets/arrow.svg';

function Header() {
  return (
      <header className={styles.header}>
        <div className={styles.user_logo_container}>
          <img className={styles.logo} src={logo} alt="aladdin logo"/>
          Onboarding</div>
        <div className={styles.user_menu}>Hi, John Doe
          <img className={styles.menu_opener} src={arrow} alt="menu opener"/></div>
      </header>
  );
}

export default Header;
