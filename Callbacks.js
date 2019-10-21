// setTimeout( () =>{
//     console.log('hola mundo');
// },3000);

let getUsuarioById =(id,callback)=>{
    let usuaruio={
        nombre:'Chris',
        id
    }
    if(id==20){
        callback(`el usuario con id ${id}, no existe en la base de datos`);
    }else{

    
    callback(null,usuaruio);

}
}


getUsuarioById(2,(err,usuaruio)=>{

    if(err){
     return   console.log(err);
    }
    console.log('usuario de base de datos',usuaruio);
});



