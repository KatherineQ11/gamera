import propTypes from 'prop-types';
import { useState } from 'react';
import Item from '../Item';
import styles from './DropdownItem.module.css';

export default function DropdownItem({
  icon,
  children,
  items,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Item
        icon={icon}
        isHighlight={isOpen}
      >
        {children}
      </Item>
      {isOpen && (
        <ul className={styles.items}>
          {items.map(({ label, url }) => (
            <li key={url} className={styles.item}>
              <a href={url} className={styles.link}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

DropdownItem.propTypes = {
  icon: propTypes.node.isRequired,
  children: propTypes.node.isRequired,
  items: propTypes.arrayOf(propTypes.shape({
    label: propTypes.string.isRequired,
    url: propTypes.string.isRequired,
  })).isRequired,
};
