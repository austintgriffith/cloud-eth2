const fs = require('fs')
const { exec } = require('child_process');

console.log("Starting up prysm node...")
try{
  exec('./prysm.sh validator --accept-terms-of-use --wallet-dir=prysm_wallet --wallet-password-file=walletPassword.txt >> ./validator.log 2>&1', (err, stdout, stderr) => {
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  })
}catch(e){
  console.log(e)
}
