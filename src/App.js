import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
import './stylo.css';


const items = [
    {
       title: 'What is React?',
       content: 'React is a front end Javascript framework'
    },

    {
        title: 'Why use React?',
        content : 'React is a favorite JS library among engineers'
    },

    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
];



const options = [
    {
        label: 'The Color Red',
        value: 'Red'
    },

    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    }
];


//export default () => {

    /*selected----> podemos decirle a nuestro componenete de la aplicación que actualice su state seleccionado */
   //const [selected, setSelected] = useState(options[0]);
   /*Para mostrar el menpu despegable*/
   //const [showDropdown, setShowDropdown] = useState(true);
/*
    return(
        <div>
            
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {showDropdown ?
                <Dropdown label="This text is"" selected={selected} onSelectedChange={setSelected} options={options}/>
               : null
            }
        </div>
  
    );
}; */

 export default () => {

     const [selected, setSelected] = useState(options[0]);
     return (
        <div>
            <Header />
        <div className="acordion">
            <Route path="/">
              <Accordion items={items}/>
            </Route>
        </div>  
 
            <Route path="/list">
                <Search />
            </Route>
      
         <div className="acordion"> 
            <Route path="/dropdown">
               <Dropdown label="Select a color" options={options} selected={selected}  onSelectedChange={setSelected} />
            </Route>
         </div>
         <div className="acordion">
            <Route path="/translate">
                <Translate />
                <Accordion items={items}/>
            </Route>
          </div>
        </div>
     );
 }