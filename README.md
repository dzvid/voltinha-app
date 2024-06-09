# arcgis-app

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

---

# Requisitos

## CORRIDAS

- O usuario pode cadastrar corridas.
- O usuario pode iniciar e finalizar uma corrida.
- Durante a execuçao de uma corrida o sistema captura a localizaçao do usuario a cada 5 segundos (a velocidade de caminhada de uma pessoa é em torno de 1,0 m/s, ou 3,6 km/h, num intervalo de 5s a pessoa percorreria 5 metros. Existem outras formas de registrar a localizaçao, por ex sempre que a pessoa se deslocar 10m em relaçao a ultima posicao registrada, vou manter a inicialmente escolhida).
- O usuario pode visualizar informaçoes do histórico de corridas realizadas. Nesta visualizaçao cada corrida apresentara:
  - A velocidade média no percurso
  - O tempo entre o inicio e o fim da corrida no formato HH:MM:ss
  - A distancia percorrida:
    - corridas abaixo de <1Km, exibir unidades em metros;
    - corridas acima de 1Km, exibir unidades em Kilometros.
