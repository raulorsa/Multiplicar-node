const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla} = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite)
        //console.log('Listar');
    break;

    case 'crear':
           crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado: ${archivo}`))
            .catch(e => console.log(e));
        break;

        default:
            console.log('Comando no Reconocido');
}

//let base = '5';


// console.log(module);
// console.log(process);
// console.log(process.argv);

//let argv2 = process.argv;

//let argv = process.argv;
// let parametro= argv[2];
// let base = parametro.split('=')[1];


