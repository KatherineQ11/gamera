import propTypes from 'prop-types';
import { useState } from 'react';
import Item from '../Item';

export default function LinkItem({
  icon,
  url,
  children,
}) {
  const [isHighlight, setIsHighlight] = useState(false);

  return (
    <a
      href={url}
      onMouseEnter={() => setIsHighlight(true)}
      onMouseLeave={() => setIsHighlight(false)}
    >
      <Item
        isHighlight={isHighlight}
        icon={icon}
      >
        {children}
      </Item>
    </a>
  );
}

LinkItem.propTypes = {
  icon: propTypes.node.isRequired,
  url: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};
