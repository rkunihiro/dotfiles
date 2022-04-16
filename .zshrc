export GOROOT=
export GOPATH=$HOME
export GO111MODULE=on
export CGO_ENABLED=0

PATH=$PATH:$HOME/bin
PATH=$PATH:$HOME/.cargo/bin
export PATH

alias ll='ls -lhaG'

alias run='npm run'

alias dcdown='docker compose down'
alias dcexec='docker compose exec'
alias dclogs='docker compose logs'
alias dcstop='docker compose stop'
alias dcup='docker compose up -d'

PROMPT="%n@%m %c %# "
RPROMPT=""

setopt AUTO_CD
cdpath=(
    $cdpath
    $HOME
    $HOME/src
    $HOME/src/github.com
)
