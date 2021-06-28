# Circle CI

CircleCI is a modern continuous integration and continuous delivery (CI/CD) platform. The CircleCI Enterprise solution is installable inside your private cloud or data center and is free to try for a limited time. CircleCI automates build, test, and deployment of software.

> The key difference between CircleCI vs Jenkins is that Jenkins is more secure and elaborates; CircleCI is lightweight and open. Therefore for faster deployment jobs, one can execute their codes on CircleCI as it deploys on scalable and robust cloud servers.

### Configure your VPS

`ssh-keygen -m PEM -t rsa -f ~/.ssh/id_rsa_circleci`

Enter passphrase (empty for no passphrase): `Let$DeployC1`

### Add user account to Server

> For me i need to use power user `su`

Add the USER

`sudo useradd -m -d /home/circleci -s /bin/bash circleci`

Create the folder and create the file for KEYS

`mkdir /home/circleci/.ssh`

`touch /home/circleci/.ssh/authorized_keys`

Copy your LOCAL public key

`pbcopy < ~/.ssh/id_rsa_circleci.pub`

Paste on your SERVER into KEYS

`pbpaste > /home/circleci/.ssh/authorized_keys`

> I didn't have the command so rather then installing with `wget pbpaste` I went ahead and just used VIM

`vim /home/circleci/.ssh/authorized_keys`

Paste the code then enter `:wq` ( exit, write, & quit)

Now try to login to make sure everything worked

`ssh circleci@IP -i ~/.ssh/id_rsa_circleci`
