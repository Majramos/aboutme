# aboutme

Build my profile the site [marcoramos.me](https://marcoramos.me)


## Setup Development Environment

This project uses container to setup the developement environment

To setup the environment run one of the available setup scripts in the `/env` directory. Choose the `.ps1` if using powershell or the `.sh` if using bash.

There are available 4 commands:
- `build` build a image with node
- `create` create a container
- `run` run the container
- `rm` remove the stopped container

After starting the container and making sure one is in the terminal of the containter, run `npm install` to install all the required dependencies


## Build
Build the site using next.js
```bash
npm run build
```

Generate the cv pdf
```bash
node cv/create_pdf.mjs
```
