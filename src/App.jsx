import SiteNavigation from './app/SiteNavigation';
import Header from './app/Header';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <SiteNavigation />
      <div>
        <Header />
      </div>
    </div>
  );
}

export default App;
