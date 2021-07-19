import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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

/*
const funcApp =  () => {

    selected----> podemos decirle a nuestro componenete de la aplicación que actualice su state seleccionado 
   const [selected, setSelected] = useState(options[0]);
    return(
        <div>
            <Dropdown selected={selected} onSelectedChange={setSelected} options={options}/>
        </div>
    );
};


export default funcApp;*/

export default () => {

    /*selected----> podemos decirle a nuestro componenete de la aplicación que actualice su state seleccionado */
   const [selected, setSelected] = useState(options[0]);
   /*Para mostrar el menpu despegable*/
   const [showDropdown, setShowDropdown] = useState(true);

    return(
        <div>
            
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {showDropdown ?
                <Dropdown selected={selected} onSelectedChange={setSelected} options={options}/>
               : null
            }
        </div>
    );
};


 