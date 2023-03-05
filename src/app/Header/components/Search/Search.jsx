import { useState } from 'react';
import { RiSearch2Line } from 'react-icons/ri';
import Close from '../../../../components/Close';
import ResultDropdown from './components/ResultDropdown';
import styles from './Search.module.css';

export default function Search() {
  const [isShowResult, setIsShowResult] = useState(false);
  const [value, setValue] = useState('');
  const isShowClose = value.length > 0;

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <div className={styles.prefix}>
          <RiSearch2Line className={styles.icon} />
        </div>
        <input
          placeholder="Search by keywords"
          className={styles.input}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onFocus={() => setIsShowResult(true)}
          onBlur={() => setIsShowResult(false)}
        />
        {isShowClose && (
          <div className={styles.suffix}>
            <Close
              onClick={() => setValue('')}
              className={styles.clear}
            />
          </div>
        )}
      </div>
      {isShowResult && (
        <div className={styles.result}>
          <ResultDropdown />
        </div>
      )}
    </div>
  );
}
