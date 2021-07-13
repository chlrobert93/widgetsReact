import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Search = () =>{

    //Neuvo state
    const [term, setTerm] = useState(''); 
    const [results, setResults] =  useState([]);

     console.log(results);

     useEffect( () =>  {
         const search = async () => {
          //Conectar con locaholts 3001 y ejecutar node indendes.js
          const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
           params:{
               action: 'query',
               list: "search",
               origin: '*',
               format: 'json',
               srsearch:term,
            },
        });

        setResults(data.query.search);
     };

     if(term) {
        search(); 
     }
      
    },[term]);


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
