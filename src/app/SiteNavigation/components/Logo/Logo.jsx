import logo from './assets/logo.svg';
import styles from './Logo.module.css';

export default function Logo() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Gamera" />
    </div>
  );
}
