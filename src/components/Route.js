import { useEffect } from 'react';

const Route = ({ path, children}) => {

    useEffect(() => {
       const onLocationChange = () => {
          console.log('Location change');
       };
       
       //Escuchar un evento
       window.addEventListener('popstate', onLocationChange);

       return () => {
         window.removeEventListener('popstate', onLocationChange);
       };

    }, []);

    //Recibimos path, children
    console.log(Route);
    return window.location.pathname === path ? children : null;

};

export default Route;