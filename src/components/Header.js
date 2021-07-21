import React from 'react';

const Header = () => {
    return (
        <div className="ui inverted menu">
          <a href="/"  className="item">
              Accordion
          </a>
          <a href="/list" className="item">
             Search
          </a>
          <a href="/dropdown" className="item">
            Dropdown
          </a>
          <a href="/translate" className="item">
            Translate
          </a>
        </div>
    )
};

export default Header;