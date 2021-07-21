const Route = ({ path, children}) => {
    //Recibimos path, children
    console.log(Route);
    return window.location.pathname === path ? children : null;

};

export default Route;