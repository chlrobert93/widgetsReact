import React from 'react';

const Dropdown = ({options, selected, onSelectedChange}) => {
    
    console.log(options);
    const renderedOptions = options.map((option) => {   
    console.log(selected);
    //Para que desapareca el color seleccionado
        if(option.value === selected.value){
            return null
        }
    //Devolver bloque JSX
    return (
        <div key={option.value}  className="item" onClick={() => onSelectedChange(option)}>
         {option.label}
        </div>
    );
});





    return (
        <div className="ui form">
            <div className="field">
              <label className="label">Select a Color</label>
              <div className="ui selection dropdown visible active">
                 <i className="dropdown icon"></i>
                 <div className="text">{selected.label}</div>
                 <div className="menu visible transition">{renderedOptions}</div>


              </div>
            </div>
        </div>
    );
 
 

};

export default Dropdown;