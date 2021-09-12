import React from 'react';
import Link from './Link';

const Header = () => {
    return (
        <div className="ui inverted teal  menu">
          <Link href="/"  className="violet item">
              Accordion
          </Link>
          <Link href="/list" className="violet item">
             Search
          </Link>
          <Link href="/dropdown" className="violet item">
            Dropdown
          </Link>
          <Link href="/translate" className="violet item">
            Translate
          </Link>
        </div>
    )
};

export default Header;