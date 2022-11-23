#!/usr/bin/env bash
#
# build a container image

echo -e "building image\n"

readonly SCRIPT_PATH="$(dirname "${BASH_SOURCE[0]}")"
readonly NODE_VERSION=19


podman build \
    --rm \
    --build-arg node_version="${NODE_VERSION}" \
    -f $SCRIPT_PATH/Dockerfile\
    -t "node_venv:node${NODE_VERSION}" \
    .

