import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => { 
    //Cada vez que tengamos un nuevo idioma o texto se ejecuta la función (solicitud a la API de Google)
    useEffect(() => {
        axios.post('https://translation.googleapis.com/language/translate/v2', {}, {

           params: {
               q: text,
               target: language.value,
               key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
           }
        });
    }, [language, text]);
    return <div />
};

export default  Convert;