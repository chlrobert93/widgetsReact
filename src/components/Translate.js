import React, {useState} from 'react';
import Dropdown from './Dropdown'; 
import Convert from './Convert';

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },

    {
        label: 'Arabic',
        value: 'ar'
    },

    {
        label: 'Hindi',
        value: 'hi'
    },

    {
        label: 'French',
        value: 'fr'
    },

    {
        label: 'Italian',
        value: 'it'
    },

    {
        label: 'Japanese',
        value: 'ja'
    },

    {
        label: 'Dutch',
        value: 'nl'
    },

    {
       label: 'Korean',
       value: 'ko'
         
    }

]

const Translate = () => {
      
      const [language, setLanguage] = useState(options[0]);
      const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                 <label>Enter Text</label>   
                 <input value={text} onChange={(e) => setText(e.target.value)}></input>
                </div>
            </div>
            <Dropdown label="Selected Language" selected={language} onSelectedChange={setLanguage} options={options} />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />           
        </div>
    )
};

export default Translate;   