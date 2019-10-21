const argv= require('./config/yargs').argv;
const color = require('colors');


const { crearArchivo} =require('./Multiplicar');
const { listarTabla} =require('./Multiplicar');




let comando=argv._[0];

switch(comando){

    case 'listar':
        console.log('listar');
v
        listarTabla(argv.base,argv.limite)
      //  .then( archivo=>console.log(`archivo creado: ${ archivo}`))
        .catch(e=> console.log(e));
        break;

    case 'crear':
        console.log('crear');
                
        crearArchivo(argv.base,argv.limite)
        .then( archivo=>console.log(`archivo creado: ${ archivo}`))
        .catch(e=> console.log(e));
        break;
    default:
        console.log('No se reconoce el comando ingresado');    



}
//let base='22';
//console.log(process.argv);

//let argv2=process.argv; 

console.log('Limite ',argv.limite);
console.log(argv);

// let parametro=argv[2];
// let base= parametro.split('=')[1];
// //console.log(base);
