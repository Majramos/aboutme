#!/usr/bin/env bash
#
# run the container

echo "run container"

# bash into a running container
podman start aboutme

podman attach aboutme

