# Secure Shell (SSH)

> SSH, also known as Secure Shell or Secure Socket Shell, is a network protocol that gives users, particularly system administrators, a secure way to access a computer over an unsecured network. In addition to providing secure network services, SSH refers to the suite of utilities that implement the SSH protocol. Secure Shell provides strong password authentication and public key authentication, as well as encrypted data communications between two computers connecting over an open network, such as the internet. In addition to providing strong encryption, SSH is widely used by network administrators for managing systems and applications remotely, enabling them to log in to another computer over a network, execute commands and move files from one computer to another.

### How to Login

Generally you want to first get the IP Address or Domain Name first. You need to tell the command what you want to access. Most SERVERS are protected by a USERNAME & PASSWORD. You may also need to specify what PORT you want to access.

> We are ssh into a machine specifing our USERNAME @ IP using PORT 22 ( this is the default )

`ssh USER@IPADDRESS -p 22`

You should now be prompted to enter your PASSWORD

### How to generate a key

> [How to Generate Keys](https://docs.joyent.com/public-cloud/getting-started/ssh-keys/generating-an-ssh-key-manually/manually-generating-your-ssh-key-in-mac-os-x)

`ssh-keygen -t rsa`

Follow the prompts, where to save just hit ENTER, when you see `enter a passphrase` this is the PASSWORD you want to use.

```bash
# Example
Your identification has been saved in /Users/USERNAME/.ssh/id_rsa.
Your public key has been saved in /Users/USERNAME/.ssh/id_rsa.pub.
The key fingerprint is:
ae:89:72:0b:85:da:5a:f4:7c:1f:c2:43:fd:c6:44:38 myname@mymac.local
The key's randomart image is:
+--[ RSA 2048]----+
|                 |
|         .       |
|        E .      |
|   .   . o       |
|  o . . S .      |
| + + o . +       |
|. + o = o +      |
| o...o * o       |
|.  oo.o .        |
+-----------------+
```

You should now have 2 keys generated on your machine `id_rsa` & `id_rsa.pub`

> Your private key is saved to the id_rsa file in the .ssh directory and is used to verify the public key you use belongs to the same PERSON

You can now copy the public key and add it to a machine or service

`pbcopy < ~/.ssh/id_rsa.pub`

### Setting up a config

> If you are regularly connecting to multiple remote systems over SSH, you’ll find that remembering all of the remote IP addresses, different usernames, non-standard ports, and various command-line options is difficult, if not impossible.

You will need to check if you already have a config file 

`cat ~/.ssh/config`

or you need to create one

`touch ~/.ssh/config`

```
# LOCAL
Host webserver
	HostName localhost
	User	 user
	Port	 2222

# MY SERVICE
Host SERVICENAME
	HostName IP
	User USERNAME
	Port 22
	IdentityFile ~/.ssh/id_rsa
	RemoteForward 52698 localhost:52698
```