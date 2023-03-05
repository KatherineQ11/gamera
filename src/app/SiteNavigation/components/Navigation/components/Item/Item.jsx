import classNames from 'classnames/bind';
import propTypes from 'prop-types';
import styles from './Item.module.css';

const cx = classNames.bind(styles);

export default function Item({
  icon,
  children,
  isHighlight,
}) {
  return (
    <div className={styles.container}>
      <div
        className={cx('item', {
          isHighlight,
        })}
      >
        <div className={styles.icon}>{icon}</div>
        <div
          className={cx('label', {
            isHighlight,
          })}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
  icon: propTypes.node.isRequired,
  children: propTypes.node.isRequired,
  isHighlight: propTypes.bool.isRequired,
};
