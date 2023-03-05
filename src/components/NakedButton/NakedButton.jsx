import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './NakedButton.module.css';

const cx = classNames.bind(styles);

export default function NakedButton({
  className,
  onClick,
  children,
}) {
  return (
    <button type="button" onClick={onClick} className={cx('button', className)}>
      {children}
    </button>
  );
}

NakedButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

NakedButton.defaultProps = {
  className: '',
};
