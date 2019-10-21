const fs=require('fs');
const colors=require('colors');



let listarTabla=(base,limite)=>{
    return new Promise((resolve,reject)=>{
      
        if(!Number(base)||!Number(limite) )
          {
            reject('No es un numero');
            return

          } 
            let dato= ' ';
            for(let i = 1 ;i <= limite ;i++) {
                dato+=`${base} * ${i} =${base*i}\n`   ;
            }

        resolve (`tabla ${base} limite ${limite}`)  
        console.log(dato);

    })
}

crearArchivo=(base,limite)=>{
    return new Promise((resolve,reject) =>{
      
        if(!Number(base)){
            reject('No es un numero');
            return
        }
        let data='';


      for(let i=1;i<=limite;i++){
    data+=`${base} * ${i} =${base*i}\n`   ;
}
        fs.writeFile(`tabla-${base}-limite-${limite}.txt`,data,(err)=>{
            if(err)
             reject(err);
            else
             resolve(`tabla-${base}.txt`)
            console.log('El archivo se guardo con exito');
        });
    });
};

module.exports={
    crearArchivo,
    listarTabla

}