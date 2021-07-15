import React,{ useState} from 'react';

const Dropdown = ({options, selected, onSelectedChange}) => {
    const [open, setOpen] = useState(false);
    
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



const opening = `${open ? 'visible active' : '' }`;


    return (
        <div className="ui form">
            <div className="field">
              <label className="label">Select a Color</label>
              <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${opening}`}>
                 <i className="dropdown icon"></i>
                 <div className="text">{selected.label}</div>
                 <div className={`menu ${open ? 'visible transition' : '' }`}>{renderedOptions}</div>
              </div>
            </div>
        </div>
    );
 
 

};

export default Dropdown;