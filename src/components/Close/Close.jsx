import PropTypes from 'prop-types';
import { RiCloseCircleFill, RiCloseCircleLine } from 'react-icons/ri';
import classNames from 'classnames/bind';
import NakedButton from '../NakedButton';
import styles from './Close.module.css';

const cx = classNames.bind(styles);

export default function Close({
  className,
  onClick,
  outlined,
}) {
  return (
    <NakedButton onClick={onClick} className={cx('button', className)}>
      {outlined ? (
        <RiCloseCircleLine />
      ) : (
        <RiCloseCircleFill />
      )}
    </NakedButton>
  );
}

Close.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  outlined: PropTypes.bool,
};

Close.defaultProps = {
  className: '',
  outlined: false,
};
