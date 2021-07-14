import React from 'react';
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



const option = [
    {
        label: 'The Color Red',
        value: 'Red'
    },

    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
];

const funcApp =  () => {
    return(
        <div>
            <Dropdown option={option}/>
        </div>
    );
};


export default funcApp;