import React from 'react';


const Link = ({className, href, children}) => {
  
    const onClick = (event) => {
        //Cuando el usuario hace clic en un elemento de anclaje es asegurarnos de que no realicemos una recarga completa de la
        //Página
        event.preventDefault();
        //Actualizar la URL
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

  return <a onClick={onClick} className={className} href={href}>{children}</a>;

};

export default Link;