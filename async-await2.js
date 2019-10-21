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


// let getEmpleado = async (id)=>{

//     return new Promise((resolve,reject)=>{
//         let empleadoDb=empleado.find(empleado=>empleado.id===id)
//         if(!empleadoDb){
//             reject(`No existe un empleado con el Id ${id}`);

//         }else{
//             resolve(empleadoDb);
//         }
//     })
// } 

let getEmpleado = async (id)=>{

        let empleadoDb=empleado.find(empleado=>empleado.id===id)
        if(!empleadoDb){
            throw new Error(`No existe un empleado con el Id ${id}`);

        }else{
            return(empleadoDb);
        }
    
} 
// let getSalario=(empleado)=>{
    
//     return new Promise((resolve,reject)=>{
//         let SalarioDb=salario.find(salario=>salario.id===empleado.id);
//         if(!SalarioDb){
//                 reject(`no se encontro un salario par a el usuario ${empleado.nombre}`);
//         }else{
//             resolve({
//                 nombre:empleado.nombre,
//                 salario:SalarioDb.salario,
//                 id:empleado.id
            
//             });
//             }
//     })
// }

let getSalario=async (empleado)=>{
    
        let SalarioDb=salario.find(salario=>salario.id===empleado.id);
        if(!SalarioDb){
                throw new Error (`no se encontro un salario par a el usuario ${empleado.nombre}`);
        }else{
            return({
                nombre:empleado.nombre,
                salario:SalarioDb.salario,
                id:empleado.id
            
            });
            }
}


let getInformacion= async(id)=>{

    let empleado=await getEmpleado(id);
    let resp= await getSalario(empleado);
  //  console.log(resp);
    return  `${resp.nombre} tiene un salario  de ${resp.salario}`
}

getInformacion(1).
then(mensaje=>console.log(mensaje))
.catch(err=>console.log(err))

