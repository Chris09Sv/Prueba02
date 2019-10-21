/**
 * async awayt
 */

 let getNombre=async()=>{
   throw new Error('no existe un nombre para este usuario');
   
    return 'Christopher';
    //     undefined.nombre;

 };

let getNombre1=()=>{
    return new Promise((resolve, reject)=>{
       
       setTimeout(() => {
        resolve('Solano')
  
       }, 3000);
    });
}

let saludo= async() =>{

    let  nombre= await getNombre1();

    return  `hola ${nombre}`;
}
 //console.log(getNombre1());

saludo().then(mensaje=>{
    console.log(mensaje)
}).catch(e=>{
    console.log('error',e)
})