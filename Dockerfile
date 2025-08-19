ARG node_version

FROM node:${node_version}

RUN apt-get update && apt-get upgrade -y && apt-get clean

# update npm package manager
# npm update -g

ENV NEXT_TELEMETRY_DISABLED=1
ENV CHOKIDAR_USEPOLLING=true
ENV WATCHPACK_POLLING=true

RUN echo $' \n\
alias ls="ls -ahoF --group-directories-first --color=always" ' >> /root/.bashrc

# set working directory
WORKDIR /workspace

EXPOSE 8888

ENTRYPOINT ["/bin/bash"]
