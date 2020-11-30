const fs = require('fs')
const { exec } = require('child_process');

console.log("Starting up geth node...")
try{
  exec('./geth.sh >> ./geth.log 2>&1', (err, stdout, stderr) => {
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  })
}catch(e){
  console.log(e)
}
