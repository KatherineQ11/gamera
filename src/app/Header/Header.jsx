import Search from './components/Search';
import Login from './components/Login';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.container}>
      <Search />
      <Login />
    </div>
  );
}
