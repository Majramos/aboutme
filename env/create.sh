#!/usr/bin/env bash
#
# create a container

readonly SCRIPT_PATH="$(dirname "${BASH_SOURCE[0]}")"
readonly PROJECT_NAME="${PWD##*/}"
readonly WORKSPACE="${PWD}"
readonly PORT=1111
readonly IMAGE="localhost/node_venv:node19"

podman create \
    -it \
    --cidfile=$SCRIPT_PATH/containerid \
    --name=$PROJECT_NAME \
    --restart=no \
    -v "${WORKSPACE}":/workspace:Z \
    -p $PORT:8888 \
    $IMAGE

echo "Created container: $PROJECT_NAME @ $PORT"
echo "From image:        $IMAGE"
echo "Linked to:         $WORKSPACE"

