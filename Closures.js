import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';


const saiHi= function(nombre){
    return `hi, ${nombre}!`;
}



function getGreeter(name) {
    return function() {
        return `Hi, ${name}!`;
    };
}
let name='juca'
 let julio='julio';
 const ge=getGreeter();
 console.log(saiHi(julio));
 console.log(ge(name));

 function App() {
    const username = 'Chris09Sv';
  
    React.useEffect(function() {
      fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(user => console.log(user));
    });
    
    // blah blah blah
  }
console.log(App());9