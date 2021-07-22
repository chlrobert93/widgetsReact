import React from 'react';


const Link = ({className, href, children}) => {
  
    const onClick = (event) => {
     
       //Abrir el boton en una nueva ventana ctrl + lick
        if (event.metaKey || event.ctrlKey || event.shiftKey) {
            return;
        }

         

            //No realicemos una recarga completa de la página
            event.preventDefault();
            //Actualizar la URL
            window.history.pushState({}, '', href);

            const navEvent = new PopStateEvent('popstate');
            window.dispatchEvent(navEvent);
    };

  return <a onClick={onClick} className={className} href={href}>{children}</a>;

};

export default Link;