<#
.DESCRIPTION
	This script is used to setup development environment using containers
	Currently only works with docker

.PARAMETER What
	what step to run in the script, can be one of "build", "create", "run", "rm"

.NOTES
	Version:        1.0
	Author:         Marco Ramos
	Creation Date:  2024-05-09

.EXAMPLE
	how to run this script

	.\env\setup.ps1 build
#>

param(
    [Parameter(Mandatory=$True, Position=0, ValueFromPipeline=$false)]
    [System.String]
    $What
)


New-Variable -Name SCRIPT_PATH  -Value (Split-Path -Path $MyInvocation.MyCommand.Path -Parent) -Option ReadOnly
New-Variable -Name WORKSPACE    -Value (Split-Path -Path $SCRIPT_PATH -Parent) -Option ReadOnly
New-Variable -Name PROJECT_NAME -Value (Split-Path -Path $WORKSPACE -Leaf) -Option ReadOnly
New-Variable -Name PORT         -Value 1111 -Option ReadOnly
New-Variable -Name NODE_VERSION -Value 19 -Option ReadOnly
New-Variable -Name IMAGE        -Value "node_venv:node19" -Option ReadOnly
New-Variable -Name CONTAINERID_PATH -Value $SCRIPT_PATH\containerid -Option ReadOnly


if($What -eq "build") {
	# build container image

	Write-Output "building image"

	docker build `
		--rm `
		--build-arg node_version="${NODE_VERSION}" `
		-f $SCRIPT_PATH/Dockerfile `
		-t "node_venv:node${NODE_VERSION}" `
		.
}
elseif ($What -eq "create") {
	# create container

	Write-Output "creating container"

	docker create `
		-it `
		--cidfile=$CONTAINERID_PATH `
		--name=$PROJECT_NAME `
		--restart=no `
		-v ${WORKSPACE}:/workspace:Z `
		-p ${PORT}:8888 `
		$IMAGE

	Write-Output "Created container: $PROJECT_NAME @ $PORT"
	Write-Output "From image:        $IMAGE"
	Write-Output "Linked to:         $WORKSPACE"
}
elseif ($What -eq "run") {
	# run container

	Write-Output "run container"

	# bash into a running container
	docker start $PROJECT_NAME

	docker attach $PROJECT_NAME
}
elseif ($What -eq "rm") {
	# remove container

	New-Variable -Name containerid -Value (Get-Content $CONTAINERID_PATH -Raw)
	Write-Output "Removing container: $(docker inspect $containerid --format "{{.Name}}")"

	docker rm $containerid

	Remove-Item $CONTAINERID_PATH
}
else {
	Write-Output "Parmeters should be one of [build, create, run, rm]"
}
