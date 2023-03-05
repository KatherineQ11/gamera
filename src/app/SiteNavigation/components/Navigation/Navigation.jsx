import { AiOutlineFileSearch } from 'react-icons/ai';
import { BiCommentDots, BiNews } from 'react-icons/bi';
import { FaGamepad } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';
import DropdownItem from './components/DropdownItem';
import LinkItem from './components/LinkItem';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.container}>
      <LinkItem icon={<FaGamepad />} url="/games">Games</LinkItem>
      <LinkItem icon={<AiOutlineFileSearch />} url="/search">Search</LinkItem>
      <LinkItem icon={<BiNews />} url="/news">News</LinkItem>
      <LinkItem icon={<BiCommentDots />} url="/reviews">Reviews</LinkItem>
      <DropdownItem
        icon={<FiMoreHorizontal />}
        items={[
          { label: 'About Us', url: '/about-us' },
          { label: 'Support', url: '/support' },
          { label: 'Terms', url: '/terms' },
          { label: 'Privacy', url: '/privacy' },
        ]}
      >
        More
      </DropdownItem>
    </nav>
  );
}
