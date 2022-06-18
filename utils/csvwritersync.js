/*
Author: Kripu Khadka
Date: 18 June 2022
File Description: Sync API file writer to the system

*/

const fs = require('fs');
const path = require('path');


function writeFile(pathLocation, fileName, data){
fs.writeFileSync( `${pathLocation}\\${fileName}.csv`, data, {encoding:'utf-8'})

}

module.exports={
    writeFileSync
}