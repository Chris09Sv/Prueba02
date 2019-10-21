const opciones={
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv= require('yargs')
.command('listar','Imprime en consola la tabla de multiplicar',opciones)
.command('Crear','Genera un arcivo con la la tabla de multiplicar',opciones)
.help()
.argv;


module.exports={
    argv
};