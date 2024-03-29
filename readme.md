## Description
A little examples from the different kind of load tests using k6.

## Table of Contents
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Follow the official instalation guide:](#follow-the-official-instalation-guide)
  - [Run commands:](#run-commands)

## Follow the official instalation guide:

`https://k6.io/docs/get-started/installation/`

## Run commands:

Run tests
<br>
`k6 run {nome-do-teste}.js`

Run and generate csv report:
<br>
`k6 run -o csv=resultado.csv {nome-do-teste}.js`

Run and tests output through cloud
<br>
`k6 cloud {nome-do-teste}.js`

Run local and tests output through cloud
<br>
`k6 run --out cloud {nome-do-teste}.js`

Run on browser in ui mode and not headless
<br>
`set "K6_BROWSER_HEADLESS=false" && set "K6_BROWSER_ARGS='show-property-changed-rects' " && k6 run {nome-do-teste}.js`
