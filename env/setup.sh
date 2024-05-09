#!/usr/bin/env bash

readonly SCRIPT_PATH="$(dirname "${BASH_SOURCE[0]}")"
readonly WORKSPACE="${PWD}"
readonly PROJECT_NAME="${PWD##*/}"
readonly PORT=1111
readonly NODE_VERSION=19
readonly IMAGE="node_venv:node19"
readonly CONTAINERID_PATH="${SCRIPT_PATH}/containerid"


if [[ "$1" == "build" ]]; then
	# build a container image

	echo -e "building image\n"

	docker build \
		--rm \
		--build-arg node_version="${NODE_VERSION}" \
		-f $SCRIPT_PATH/Dockerfile\
		-t "node_venv:node${NODE_VERSION}" \
		.
	
elif [[ "$1" == "create" ]]; then
	# create a container

	docker create \
		-it \
		--cidfile=$SCRIPT_PATH/containerid \
		--name=$PROJECT_NAME \
		--restart=no \
		-v "${WORKSPACE}":/workspace \
		-p $PORT:8888 \
		$IMAGE

	echo "Created container: $PROJECT_NAME @ $PORT"
	echo "From image:        $IMAGE"
	echo "Linked to:         $WORKSPACE"


elif [[ "$1" == "run" ]]; then
	# run the container

	echo "starting container"

	# bash into a running container
	docker start $PROJECT_NAME

	docker attach $PROJECT_NAME


elif [[ "$1" == "rm" ]]; then
	# remove a container

	readonly containerid=$(cat $CONTAINERID_PATH)

	echo "Removing container: $(docker inspect $containerid --format "{{.Name}}")"

	docker rm $containerid

	rm -f $CONTAINERID_PATH

else
	echo "Parmeters should be one of [build, create, run, rm]"
fi




	
	






