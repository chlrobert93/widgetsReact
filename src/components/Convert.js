import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => { 
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
       const timerId = setTimeout(() => {
           setDebouncedText(text);
       },500);
       
       return () => {
          clearTimeout(timerId);
       };

    }, [text]);


    //Cada vez que tengamos un nuevo idioma o texto se ejecuta la función (solicitud a la API de Google)
    useEffect(() => {
         
         const doTranslation = async () => {
          //La propiedad de datos es lo que contiene la información
       
          const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
               
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
                },
             });
            //Scaremos nuestro información o el texto traducido de ese objecto de datos
            //data el primero es la información dentro de la respuesta de Axios el segundo es la información de respuesta real
             setTranslated(data.data.translations[0].translatedText);
         };  
         
         //Esta función se invocará cada vez que montemos nuestro componente, cada vez que cambiemos el idioma y cada vez que cambiemos el texto
         doTranslation();

    }, [language, debouncedText]);
    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    );
};

export default  Convert;