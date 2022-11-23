ARG node_version

FROM node:${node_version}

RUN apt-get update && apt-get upgrade -y

# update npm package manager
# npm update -g

# set working directory
WORKDIR /workspace

EXPOSE 8888

CMD /bin/bash

