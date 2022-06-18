/*
Author: Kripu Khadka
Date: 18 June 2022
File Description: Stream API file writer to the system

*/



const fs = require('fs');


function streamWriter(pathLocation, fileName, data){
  const streamWriter = fs.WriteStream(`${pathLocation}\\${fileName}.csv`);
data.forEach((datax)=>{
 streamWriter.write(`${datax},`);
}) 

  streamWriter.on("err", (err) => {
    console.log(err);
  });
}



streamWriter("./","Text.csv", ["aray", "kalay"])

module.exports={streamWriter}