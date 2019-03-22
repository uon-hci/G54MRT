#!/bin/bash

# FUNCTIONS

ip_root=10.148.187

function copy() {
    host=$1
    sshpass -p "g54mrt" scp -o StrictHostKeyChecking=no -r src/* g54mrt@$ip_root.$host:~/
}

function connect() {
    host=$1
    sshpass -p "g54mrt" ssh -o StrictHostKeyChecking=no g54mrt@$ip_root.$host
}

function download() {
    host=$1
    mkdir data
    timestamp=$(date +%s)
    mkdir data/$timestamp
    sshpass -p "g54mrt" scp -o StrictHostKeyChecking=no -r g54mrt@$ip_root.$host:~/psx* data/$timestamp
    rm data/$timestamp/psxap8_config.json
    rm data/$timestamp/psxap8_lib.py
    rm data/$timestamp/psxap8.py
}


# RUN

command=$1
host=$2

case "$command" in
    copy)
        copy $host
        ;;
    download)
        download $host
        ;;
    connect)
        connect $host
        ;;
    *)
        echo "Usage: copy | connect | download [HOST]"
        ;;
esac