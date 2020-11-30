# cloud-eth2
> scripts and instructions for running an eth2 node on aws ec2 (ubuntu)

Launch an EC2 instance with the Ubuntu Server 20 AMI

I went with a `c4.xlarge` with 400GB free

![image](https://user-images.githubusercontent.com/2653167/100649361-92732100-32ff-11eb-8451-bb936aba9e17.png)


I have ports 30303 and 13000 open in your security group and 22 for ssh from my home ip

![image](https://user-images.githubusercontent.com/2653167/100649278-71aacb80-32ff-11eb-8089-9a81e38fb35d.png)

SSH in and clone down this repo:

```bash
git clone https://github.com/austintgriffith/cloud-eth2.git
```

Navigate to the cloud-eth2/geth directory and install Geth (eth1 client):

```bash
cd ~/cloud-eth2
cd geth
chmod +x *.sh
./installAndUpdate.sh
```

Tell `pm2` (a process manager) to run our geth node on boot:

```bash
pm2 start geth.js
pm2 save
pm2 startup
```

It will give you a PATH command you need to run:
![image](https://user-images.githubusercontent.com/2653167/100650189-c733a800-3300-11eb-8c3e-8bb115eab252.png)

You should be able to follow your `geth.log` now (even after you reboot the machine, it should run at boot):

```bash
cd ~/cloud-eth2/geth
tail -f geth.log
```

![image](https://user-images.githubusercontent.com/2653167/100650726-99029800-3301-11eb-8290-9d865b0e50c7.png)

> It could take a while for your geth node to sync with the mainnet eth1 chain. (You know it is done when it is processing 1 block at a time.)

While it syncs, you can get started with Prysm...

Navigate to the prysm folder, make the script executable, and install:

```bash
cd ~/cloud-eth2
cd prysm
chmod +x *.sh
./installAndUpdate.sh
```

Now you can launch your Prysm beacon chain process and add it to PM2:

```bash
pm2 start prysm.js
pm2 save
```

You can follow the logs for your Prysm beacon chain:

```bash
tail -f prysm.log
```

You'll notice that it needs to wait for the geth node to be in sync first:

![image](https://user-images.githubusercontent.com/2653167/100652617-6b6b1e00-3304-11eb-96a1-4372cb7c3ed9.png)

You will want to move your ETH2 keys from the LaunchPad into `~/cloud-eth2/prysm/eth2_validator_keys`.

Then, run the import script to bring them into Prysm:

```bash
cd ~/cloud-eth2
cd prysm
./importKeys.sh
```

Finally, you are ready to fire up your validator:

```bash
pm2 start validator.js
pm2 save
```
