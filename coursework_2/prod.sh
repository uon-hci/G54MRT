#!/bin/bash

# FUNCTIONS

ip_root=10.148.187

function copy() {
    host=$1
    scp -r src/* g54mrt@$ip_root.$host:~/
}

function connect() {
    host=$1
    ssh g54mrt@$ip_root.$host
}

# RUN

command=$1
host=$2

case "$command" in
    copy)
        copy $host
        ;;
    connect)
        connect $host
        ;;
    *)
        echo "Usage: copy | connect [HOST]"
        ;;
esac