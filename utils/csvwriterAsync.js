/*
Author: Kripu Khadka
Date: 18 June 2022
File Description: Sync API file writer to the system

*/


const fs = require("fs");

function writeFileAsync(pathLocation, fileName, data){

    fs.writeFile(`${pathLocation}\\${fileName}.csv`, data, {encoding:'utf-8'}, (err, res)=>{
if(err) throw err;
    });
}




module.exports={
    writeFileAsync
}