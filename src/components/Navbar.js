import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import { navLinks } from '../data';

const Navbar = () => {
  const nav = useRef(null);

  const showNav = () => {
    nav.current.classList.add('show-nav');
  };

  const hideNav = () => {
    nav.current.classList.remove('show-nav');
  };

  return (
    <nav className='navbar'>
      <button onClick={() => showNav()} className='btn open-btn'>
        <FaBars />
      </button>
      <div className='nav-links' ref={nav}>
        <button onClick={() => hideNav()} className='btn close-btn'>
          <FaTimes />
        </button>
        {navLinks.map((link) => {
          const { id, anchor, name } = link;
          return (
            <a
              onClick={() => hideNav()}
              key={id}
              href={anchor}
              className='nav-button'
            >
              {name}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
