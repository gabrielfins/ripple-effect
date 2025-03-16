# <img src="images/ripple-effect-logo.svg" alt="Ripple Effect" width="350px" />
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/gabrielfins/ripple-effect/blob/master/LICENSE.md)
[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://gabrielfins.github.io/ripple-effect)

### Material Design ripple effect implementation with **CSS and JavaScript**

A lightweight ripple effect that automatically works on buttons and can be added to any other element.

## Demo
[![forthebadge](https://forthebadge.com/images/badges/built-with-resentment.svg)](https://forthebadge.com)

* https://gabrielfins.github.io/ripple-effect

## How to use
[![forthebadge](https://forthebadge.com/images/badges/ctrl-c-ctrl-v.svg)](https://forthebadge.com)

Attribute | Effect
----------|--------
r | Adds ripple effect to non-button elements (buttons have it by default)
nr | Disables ripple effect on buttons

### Customizing ripple color

Use the CSS variable `--r` on your element:

```html
<button style="--r: #21D4FD">Blue ripple</button>
<a r style="--r: #B721FF" href="#">Purple ripple link</a>
```

### Using with other elements

Add the `r` attribute to enable ripples on non-button elements:

```html
<div r>Div with ripples</div>
<a r href="#">Link with ripples</a>
```

### Disabling ripples on buttons

Add the `nr` attribute to disable ripples on buttons:

```html
<button nr>No ripple button</button>
```

## Installing
[![forthebadge](https://forthebadge.com/images/badges/powered-by-electricity.svg)](https://forthebadge.com)

Você pode realizar a instalação das seguintes maneiras:

1. Utilizando o npm

```
npm install @gabrielfins/ripple-effect
```

2. Utilizando o yarn

```
yarn add @gabrielfins/ripple-effect
```

3. Baixando os arquivos

Acesse o [site de demonstração](https://gabrielfins.github.io/ripple-effect), vá até a seção **"Adicione ao seu projeto"** e clique no botão **"Baixar"** para fazer o download apenas dos arquivos necessários. Ou baixe diretamente do repositório.

## Adicionando ao seu projeto

1. Instalando com npm ou yarn

Após realizar a instalação, basta importar o pacote para o arquivo.

```js
import "@gabrielfins/ripple-effect";
```

2. Ao baixar os arquivos

Por esse método, basta adicionar a tag a seguir em qualquer lugar na tag `<head>` ou `<body>` do seu documento html.

```html
<script src="ripples.js"></script>
```

Instale usando jsdelivr CDN (Install Using jsdelivr CDN):
```html
<script src="https://cdn.jsdelivr.net/gh/gabrielfins/ripple-effect/dist/ripples.js"></script>
```

---
#### Criado e mantido por [Gabriel Figueredo](https://github.com/gabrielfins)
