# aboutme

<div align="center">

![Website](https://img.shields.io/website?url=https%3A%2F%2Fmarcoramos.me%2F)
![Gitlab Pipeline Status](https://img.shields.io/gitlab/pipeline-status/majramos%2Fmajramos.gitlab.io)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/Majramos/aboutme/dev)
![GitHub Tag](https://img.shields.io/github/v/tag/Majramos/aboutme?sort=date)
![GitHub License](https://img.shields.io/github/license/Majramos/aboutme)

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![tailwind](https://img.shields.io/badge/tailwindcss-0F172A?&logo=tailwindcss)

</div>

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

Disable next.js telemetry with `npx next telemetry disable` or by setting `NEXT_TELEMETRY_DISABLED=1`

## Build
Build the site using next.js
```bash
npm run build
```

Generate the cv pdf
```bash
node cv/create_pdf.mjs
```
