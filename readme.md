### Follow the oficial instalation guide:
`https://k6.io/docs/get-started/installation/`

### Run with:
`k6 run {nome-do-teste}.js`

### Comando para rodar os testes e gerar relatório csv
`k6 run -o csv=resultado.csv {nome-do-teste}.js`

### Executando e output dos testes via cloud
`k6 cloud {nome-do-teste}.js`

### Executando local e output dos testes via cloud
`k6 run --out cloud {nome-do-teste}.js`

### Executando no browser em modo ui e não headless
`set "K6_BROWSER_HEADLESS=false" && set "K6_BROWSER_ARGS='show-property-changed-rects' " && k6 run {nome-do-teste}.js`