const fs = require('fs')
const { exec } = require('child_process');

console.log("Starting up prysm node...")
try{
  exec('./prysm.sh beacon-chain --http-web3provider=../geth/mainnet_data/geth.ipc >> ./prysm.log 2>&1', (err, stdout, stderr) => {
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  })
}catch(e){
  console.log(e)
}
