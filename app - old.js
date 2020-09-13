
//requireds
const fs = require('fs');



let base = 5;

let data = '';




for (let i =1; i<=10; i++){
    data+= (`${base} * ${i} = ${base*i}\n`)
}


fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });


  crearArchivo()
    .then(archivo => console.log(`Archivo Creado: ${archivo}`));