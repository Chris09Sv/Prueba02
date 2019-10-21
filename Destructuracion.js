let deadpoll={
    nombre:'Jnifer',
    apeliido:'castillo',
    poder:'perdonar',
getNombre: function(){
    return `${this.nombre} ${this.apeliido} ${this.poder}`
}
};

// let nombre = deadpoll.poder;
// console.log(nombre);

let {nombre: primerNombre,apeliido,poder}=deadpoll;
console.log(primerNombre,apeliido);