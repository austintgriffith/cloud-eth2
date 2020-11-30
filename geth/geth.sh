#!/bin/bash
/usr/bin/geth --datadir="./mainnet_data" --nousb --http --http.port 8545  --http.addr "0.0.0.0" --http.api "eth,net,web3,debug,txpool" --http.vhosts "*" --http.corsdomain "*" --cache=4096 --maxpeers=50
