import { useEffect, useState } from 'react';

const Route = ({ path, children}) => {
   
   //Es solo para que nuestra raiz se actualice
   const [currentPath, setCurrentPath] = useState(window.location.pathname);
   

    useEffect(() => {
       const onLocationChange = () => {
          //Llamar la ruta y actualizarla
          setCurrentPath(window.location.pathname);
       };
       
       //Escuchar un evento
       window.addEventListener('popstate', onLocationChange);

       return () => {
         window.removeEventListener('popstate', onLocationChange);
       };

    }, []);

    //Recibimos path, children
    console.log(Route);
    return currentPath === path ? children : null;

};

export default Route;