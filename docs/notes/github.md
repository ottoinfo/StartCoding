# Github

> What is Git?

The most widely used modern version control system in the world. 

> What is Version Control?

Version control, also known as source control, is the practice of tracking and managing changes to software code. Version control systems are software tools that help software teams manage changes to source code over time.

> Why do I need it?

Version control software keeps track of every modification to the code in a special kind of database. If a mistake is made, developers can turn back the clock and compare earlier versions of the code to help fix the mistake while minimizing disruption to all team members.

> Why Github?

Github is the most common service and FREE ( they do have plans ).

You can also look at alternative services:
  - Gitlab
  - Bitbucket


### Set up your SSH Key

[Setup SSH Keys for GITHUB](https://docs.github.com/en/enterprise-server@3.0/github/authenticating-to-github/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

You can also go to [Terminal > SSH Keys](/notes/ssh)

Generally you should just be able to create a key

`ssh-keygen -t github`

`bcopy < ~/.ssh/id_github.pub`

Now open [Github SSH Keys](https://github.com/settings/keys) -> Click `New SSH Key` -> Add a `Title` say `Github` and paste the code public key in `Key`.

> Why is it that every time I `git push` my code i see the PROMPT `Enter passphrase for key '/Users/USERNAME/.ssh/id_rsa':`

You need to setup your [SSH Config](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent) to pas your credentials `code ~/.ssh/config`

```bash
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_rsa
```

### Commands

> You can take advantage of Visual Studios GUI instead of learning the commands, but you should know the basics of what the GUI is doing.

`git status`

`git add .`

`git add FILE`

`git commit`

`git commit -m 'My Commit Messag'`

`git commit --amend`

`git checkout -b feature/NAME`

`git stash`

`git log`

# Advanced or `Alias` you may want to create

```bash
# Git
alias g='git status'
alias ga='git add'
alias gb='git branch'
alias bga='git branch -a'
alias gc='git commit -v'
alias gca='git commit -v -a'
alias gco='git checkout'
alias gd='git diff'
alias gdm='git diff master'
alias gh='github'
alias gl='git pull'
alias gla='git log --author'
alias glg='git log --graph --pretty=format:"%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr by %an)%Creset" --abbrev-commit --date=relative'
alias glog='git log --all --graph --decorate'
alias gll='git log --oneline origin..HEAD'
alias glf='git log --oneline HEAD..origin/master'
alias glme='git log -g'
alias gp='git push'
alias rb='rebase'
alias rbc='rebase --continue'
alias rbs='rebase --skip'
alias rl='reflog'
alias rs='remote show'
alias rt='remote'
alias ru='remote update'
alias rp='remote prune'
alias sm='submodule'
alias gclean="git branch --merged | grep  -v '\\*\\|master\\|develop' | xargs -n 1 git branch -d"

alias fixup='commit --amend -C HEAD'
alias timeline='log --graph --branches --pretty=oneline --decorate'
alias untracked-files='ls-files -o --exclude-standard'
alias ignored-files='ls-files --others -i --exclude-standard'
alias modified-files='ls-files -m'

# Commit pending changes and quote all args as message
function gtag() {
  git tag -a "$*" -m "$*"
}

# Commit pending changes and quote all args as message
function gg() {
	git commit -v -a -m "$*"
}

# Search log for
function gls() {
	git log --grep="$*"
}

# Setup a tracking branch from [remote] [branch_name]
function gbt() {
	git branch --track $2 $1/$2
	git checkout $2
}

# Git Remove File
function grf() {
	rm $1
	git checkout $1
}
```