

//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite= 10) => {


    console.log('==================='.green);
    console.log(`==== Tabla del ${base}=====`.green);
    console.log('==================='.green);


    if (!Number(base)){
        reject('El valor introducido de Base no es un numero'.red);
        return;
    }
    if (!Number(limite)){
        reject('El valor del limite no es un numero'.red);
        return;
    }

    let data = '';

    for (let i =1; i<=limite; i++){
        data+= `${base} * ${i} = ${base*i}\n`;
    }

    console.log(data);

}

let crearArchivo = ( base, limite=10 ) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)){
            reject('El valor introducido de Base no es un numero'.red);
            return;
        }

        let data = '';

        for (let i =1; i<=limite; i++){
            data+= `${base} * ${i} = ${base*i}\n`;
        }
        
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else{
            resolve(`tablas/tabla-${base}.txt`);
            console.log('The file has been saved!'.green);}
          });

    });
}


//Funciones para exportar
module.exports = {
    crearArchivo,
    listarTabla
}



