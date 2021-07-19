import React,{ useState, useEffect, useRef} from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();   
    console.log(ref);

    useEffect(() => {
  
        const onBodyClick = (event) => {
            //Cerrar menú despegable si se cumple retornamos
            console.log('aa')
            if(ref.current.contains(event.target)){
                return;
                }
                console.log(event.target);
            
                console.log('CLICK BODY!!');
                    setOpen(false);
                    };       
            
                 document.body.addEventListener("click", onBodyClick, { capture: true });
                  
                return () => {
                 document.body.removeEventListener("click", onBodyClick,{ capture: true });  
                          
             
            };
},[]);       

//[]  Queremos asegurarnos de que esta función de área aqui 
//solo se ejecute una vez cuando renderizamos por primera vez nuestro
//nuestro componenete en panatalla


    console.log(options);
    const renderedOptions = options.map((option) => {   
    console.log(selected);
    //Para que desapareca el color seleccionado
        if(option.value === selected.value){
            return null
        }
    //Devolver bloque JSX
    return (
        <div key={option.value}  className="item" onClick={() => {console.log('ITEM CLICKED'); onSelectedChange(option)}}>
         {option.label}
        </div>
    );
});

//onsole.log(ref.current);

const opening = `${open ? 'visible active' : '' }`;
//<p style={{ color: selected.value }}>{textColor}{selected.value}</p>
console.log(!open);
    return (
        <div ref={ref} className="ui form">
            <div className="field">
              <label className="label">{label}</label>
              <div onClick={() => { console.log('DROPDOWN CLICKED'); setOpen(!open)}} className={`ui selection dropdown ${opening}`}>
                 <i className="dropdown icon"></i>
                 <div className="text">{selected.label}</div>
                 <div className={`menu ${open ? 'visible transition' : '' }`}>{renderedOptions}</div>
              </div>
            </div>
            <div>
          
            </div>
        </div>
    );
 
 

};

export default Dropdown;