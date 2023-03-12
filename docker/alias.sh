#!bin/sh

set -e $1

alias dk="docker"
alias dkp="docker $1 prune"
alias dkc="docker-compose"
alias dkcu="dkc up -d"
alias dkcd="dkc down"

echo "Alias has been loaded successfully!"