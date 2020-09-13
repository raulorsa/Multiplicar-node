const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }

}

const argv = require('yargs')
        .command('listar','Imprimen en consola la tabla de multiplicar',opts)
        .command('crear','crea en un fichero tabla de multiplicar', opts)
        .help()
        .argv;


module.exports={
    argv
}