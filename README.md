# cloud-eth2
> scripts and instructions for running an eth2 node on aws ec2 (ubuntu)

Launch an EC2 instance with the Ubuntu Server 20 AMI

I went with a `c4.xlarge` with 400GB free

![image](https://user-images.githubusercontent.com/2653167/100649361-92732100-32ff-11eb-8451-bb936aba9e17.png)


I have ports 30303 and 13000 open in your secuirty group and 22 for ssh from my home ip

![image](https://user-images.githubusercontent.com/2653167/100649278-71aacb80-32ff-11eb-8089-9a81e38fb35d.png)

SSH in and clone down this repo

```bash
git clone https://github.com/austintgriffith/cloud-eth2.git
```

Navigate to the cloud-eth2/geth directory and install Geth (eth1 client):

```bash
cd cloud-eth2
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
