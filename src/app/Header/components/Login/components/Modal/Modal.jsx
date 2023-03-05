import PropTypes from 'prop-types';
import Close from '../../../../../../components/Close';
import styles from './Modal.module.css';

export default function Modal({
  onClose,
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        Login
        <Close
          outlined
          className={styles.close}
          onClick={onClose}
        />
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
