# Terminal

> Terminals, also known as command lines or consoles, allow us to accomplish and automate tasks on a computer without the use of a graphical user interface. Using a terminal allows us to send simple text commands to our computer to do things like navigate through a directory or copy a file, and form the basis for many more complex automations and programming skills


### Commands

Commands are actions you want to take, they may have `optional` FLAGS ( usually specified with a `-` or `--` ) and may also take affect on a FILE

Example: `command [option] [file]`

Lets see it in action. What OS do I have ( if your on a MAC OS )?

`sw_vers`

Show me just the `product name`

`sw_vers -productName`

Show me my OS X Darwin kernel version

`uname -av`

> FILE/FOLDER represent name, Ex: dummy.txt OR project/

What user am I

`whoami`

Where am I currently in the Computer System, what folder

`pwd`

List all files in the current directory

`ls`

List all files ( hidden and human readable )

`ls -lah`

Create File

`touch FILE`

Print text in the terminal

`echo 'testing'`

Write TEXT to a file 

`echo "testing" > FILE`

Add/Append TEXT to a file

`echo "testing" >> FILE`

Print the TEXT or CONTENT of a FILE

`cat FILE`

Make Directory

`mkdir FOLDER`

Remove a File

`rm FILE`

Remove a Folder along with all of its content `-r` recusive `-f` folder

`rm -rf FOLDER`

Change Directory

`cd FOLDER`

Go Back, jump back one folder

`cd ..`

Go Back, jump back two folders

`cd ../..`

Go to my HOME folder, my USER folder

`cd ~`

Go to the ROOT, highest part

`cd /`

History, what commands have you run

`history`

History and limit to a NUMBER, say last 10 commands

`history 10`

### Alias

We can think of them as shortcuts for common commands we use regularly. We need to create our configuration FILE for terminal.

`touch .bashrc`

Lets add our FIRST alias

```bash
alias l='ls -lah'
```

We know need to reload our changes

`source ~/.bashrc`

### Your Prompt

`code .bashrc`

```bash
# colors from http://wiki.archlinux.org/index.php/Color_Bash_Prompt
# reset colors
NO_COLOR='\e[0m'
# regular colors
MAGENTA='\e[0;35m'
ECYAN='\e[1;36m'
GREEN='\e[0;32m'

PS1="\[$MAGENTA\]\n\u\[$NO_COLOR\] -> \[$ECYAN\]\w\[$GREEN\]  🔥 \[$NO_COLOR\] \n ↳  "
```

# Final Results of your `.bashrc`

```bash
# VARIABLES
# Shut off Catalina zshell message -> https://support.apple.com/kb/HT208050
export BASH_SILENCE_DEPRECATION_WARNING=1
export CLICOLOR=1
export LSCOLORS=gxgxhxDxfxhxhxhxhxgxgx
export EDITOR="code -w"

# colors from http://wiki.archlinux.org/index.php/Color_Bash_Prompt
# reset colors
NO_COLOR='\e[0m'
# regular colors
MAGENTA='\e[0;35m'
ECYAN='\e[1;36m'
GREEN='\e[0;32m'

PS1="\[$MAGENTA\]\n\u\[$NO_COLOR\] -> \[$ECYAN\]\w\[$GREEN\]  🔥 \[$NO_COLOR\] \n ↳  "

# Shortcuts
alias edit='$EDITOR ~/.bash_aliases'
alias d='cd ~/Desktop'
alias sshconf='$EDITOR ~/.ssh/config'

# Shell
alias ..='cd ..'
alias l='ls -lah'
alias c='clear'
alias h='history'

# Utility
alias reload='source ~/.bashrc'
```

### We still may need to make sure our TERMINAL always uses our FILE `.bashrc`

Let create a PROFILE

`code ./bash_profile`

```bash
if [ -f ~/.bashrc ];
then
	source ~/.bashrc
fi
```

### Setup

`git --version`



### Running Multiple Command: create a folder & change directory
`mkdir project && cd project`

### Initialized Git Repo
`git init`

### Created first file
`touch dumb.js`

### Track File or Add to repo ( STAGE )
`git add .`

### Commit Changes
`git commit`

### Commit changes and add message 
`git commit -m My First commit`

### Push Changes to GITHUB
`git push `

### Check GIT Histroy
`git log`

### Otto Checks out Repo
`git clone git@github.com:mikepark8/project.git`

### [Tags](https://en.wikipedia.org/wiki/Software_versioning)

`10.5.7  => Major | Minor | Revision/Hotfix `

Ping that Machine exist

`ping 192.168.1.149`

