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


let getEmpleado =(id)=>{

    return new Promise((resolve,reject)=>{
        let empleadoDb=empleado.find(empleado=>empleado.id===id)
        if(!empleadoDb){
            reject(`No existe un empleado con el Id ${id}`);

        }else{
            resolve(empleadoDb);
        }
    })
} 
let getSalario=(empleado)=>{
    
    return new Promise((resolve,reject)=>{
        let SalarioDb=salario.find(salario=>salario.id===empleado.id);
        if(!SalarioDb){
                reject(`no se encontro un salario par a el usuario ${empleado.nombre}`);
        }else{
            resolve({
                nombre:empleado.nombre,
                salario:SalarioDb.salario,
                id:empleado.i
            
            });
            }
    })
}

getEmpleado(5 ).then(empleado=>{

return getSalario(empleado);
})
.then(resp =>{
    console.log(`el salario de ${resp.nombre} es de ${resp.salario}`)
})
.catch(err=>{
    console.log(err);
})