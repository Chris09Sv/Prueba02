// function sumar(a,b){
//     return a+b;
// }

//funciones de flecha
// let sumar=(a,b)=>{
//     return a+b;
// }
//se puede simplificar a esto
let sumar=(a,b)=> a+b;
console.log(sumar(5,5))

//sin funcion de flecha

// function saludar1(){
//     return 'Hla mundo';
// };

//con funcion de flecha

let saludar=() =>'Jola mundo';




console.log(saludar());




function saludar1(nombre){
    return `hola ${nombre} f` ;
};

let saludar11= nombre=> `holaf ${nombre}`;
console.log(saludar11('juan'));


let deadpool_simple ={
    nombre:'wade',
    apellido:'winston',
    poder:'curacion',

    getNombre:function(){
        return  `${this.nombre}  ${this.apellido} - poder: ${this.poder}`
    }
}


let deadpool={
    nombre:'wade',
    apellido:'winston',
    poder:'curacion',

    getNombre() {
        return  `${this.nombre}  ${this.apellido} - poder: ${this.poder}`
    }
}
console.log(deadpool.getNombre());