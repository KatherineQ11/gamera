import Logo from './components/Logo';
import Navigation from './components/Navigation';
import styles from './SiteNavigation.module.css';

export default function SiteNavigation() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Logo />
        <Navigation />
      </div>
    </div>
  );
}
