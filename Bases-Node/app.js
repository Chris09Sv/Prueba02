const argv= require('yargs').argv;



const { crearArchivo} =require('./multiplicar/Multiplicar');

//let base='22';
//console.log(process.argv);

let argv2=process.argv; 

console.log(argv);
console.log(argv2);

// let parametro=argv[2];
// let base= parametro.split('=')[1];
// //console.log(base);

// crearArchivo(base)
// .then( archivo=>console.log(`archivo creado: ${ archivo}`))
// .catch(e=> console.log(e));