import { useState } from 'react';
import { AiFillPlusSquare } from 'react-icons/ai';
import NakedButton from '../../../../components/NakedButton';
import Modal from './components/Modal';
import styles from './Login.module.css';

export default function Login() {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <div>
      <NakedButton
        className={styles.button}
        onClick={() => setIsShowModal(true)}
      >
        <AiFillPlusSquare className={styles.icon} />
        LOGIN
      </NakedButton>
      {isShowModal && (<Modal onClose={() => setIsShowModal(false)} />)}
    </div>
  );
}
