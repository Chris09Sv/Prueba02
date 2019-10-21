let empleado=[{
    id:1,
    nombre:'GErman'
},
{
    id:2,
    nombre:'imnacio'
},
{
    id:3,
    nombre:'juan'
}
];

let salario=[{
id:1,
salario:1000
},{
    id:2,
    salario:500
    }
];

let getEmpleado=(id,callback)=>{

    let empleadoDb=empleado.find(empleado=> empleado.id===id)
    if(!empleadoDb){
        callback(`no existe un empleado con el id ${id}`)  ;

    }
    else{
        callback(null,empleadoDb);

    }
    
  //    1  console.log(empleadoDb);
}


let getalario=(id,callback)=>{

    let empleadoSalario=empleado.find && salario.find(empleado=>empleado.id===id, salario=>salario.id===id)
         if(!empleadoSalario){
             callback(`No existe el empleado ${id}`);
         }else{
             callback(null,empleadoSalario);
         }

    console.log(empleadoSalario);
}

// getalario(1,(err)=>{
//     if(err){
//         return console.log(err);
//     }
// });

let getSalario= (empleado,callback)=>{

    let salarioDB=salario.find(salario=> salario.id===empleado.id);
  
  if(!salarioDB){
      callback(`No se encontro un salario para el usuario ${empleado.nombre}`);

  }else{
      callback(null,{
          nombre:empleado.nombre,
          salario:salarioDB.salario,
          id:empleado.id
      })
  }

}


getEmpleado(2,(err,empleado)=>{
    if(err){
        return console.log(err);
        }

  getSalario(empleado,(err, resp)=>{
        if(err){
            return console.log(err)
        }   ;
        console.log(`el salario de ${ resp.nombre } es de ${ resp.salario }$`);

    })
});