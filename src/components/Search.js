import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Search = () =>{

    //Neuvo state
    const [term, setTerm] = useState('programing'); 
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] =  useState([]);

     console.log(results);

     /* */
     useEffect(() => {

      const timeId = setTimeout(() => {
        setDebouncedTerm(term);
      },1000);

      //Devolvera una función de limpieza que cancelará ese taimer
      return () => {
        clearTimeout(timeId);
      };
       
     },[term]);

     useEffect(() => {
        const search = async () => {
        //Conectar con locaholts 3001 y ejecutar node indendes.js
        const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
         params:{
             action: 'query',
             list: "search",
             origin: '*',
             format: 'json',
             srsearch:debouncedTerm,
          },
      });
      
      setResults(data.query.search);
   };
      if(debouncedTerm){
  
         search();

      }
      //Queremos que se ejecute siempre que el compoenente se renderice por primera vez o cambie los terminos de rebote
     },[debouncedTerm]);

   

    const renderResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
              <div className="right floated content">
                <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
              </div>
              <div className="content">
                <div className="header">{result.title}</div>
                <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>  
              </div>
            </div>
        );
    });
       
  return (
        <div>
            <div className="ui form">
              <div className="field">
                <label>Enter Search Term</label>
                <input value={term} onChange={e => setTerm(e.target.value)} className="input"/>
              </div>
            </div>
            <div className="ui celled list">
              {renderResults}
            </div>
        </div>
  );
};

export default Search;
