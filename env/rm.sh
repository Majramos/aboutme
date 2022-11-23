#!/usr/bin/env bash
#
# remove a container

readonly SCRIPT_PATH="$(dirname "${BASH_SOURCE[0]}")"

readonly containerid_path="${SCRIPT_PATH}/containerid"

readonly containerid=$(cat $containerid_path)

echo "Removing container: $(podman inspect $containerid --format "{{.Name}}")"

podman rm $containerid

rm -f containerid_path

