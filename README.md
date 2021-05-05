# <img src="images/ripple-effect-logo.svg" alt="Ripple Effect" width="350px" />
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/gabrielfins/ripple-effect/blob/master/LICENSE.md)
[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://gabrielfins.github.io/ripple-effect)

### Efeito de ripples baseado no Material Design feito com **CSS, JavaScript e jQuery**

Esse efeito utiliza seletores do jQuery e manipulação do DOM para obter um efeito extremamente preciso em relação ao original.

## Demo
[![forthebadge](https://forthebadge.com/images/badges/built-with-resentment.svg)](https://forthebadge.com)

* https://gabrielfins.github.io/ripple-effect

## Como usar
[![forthebadge](https://forthebadge.com/images/badges/ctrl-c-ctrl-v.svg)](https://forthebadge.com)

Classe | Efeito
-------|-------
md-ripples | Adiciona o efeito ao componente
ripples-light | Muda a cor do efeito para sua versão clara
ripples-dark (padrão) | Muda a cor do efeito para sua versão escura

##### Nota: as classes ripples-light e ripples-dark só funcionam em conjunto com a classe md-ripples.

### Mudando os padrões do efeito

* Exemplo:

```css
.md-ripples . ripple {
    background-color: #21D4FD;
    opacity: .32;
}
```

Nesse exemplo, todo elemento que tiver o efeito adicionado com `.md-ripples` terá o efeito da cor `#21D4FD`.

### Criando classes personalizadas

* Exemplo:

```css
.ripples-blue .ripple {
    background-color: #B721FF;
    opacity: .32;
}
```

Nesse exemplo, o elemento que tiver a classe `.ripples-blue` terá o efeito da cor `#B721FF`.

##### Nota: a opacidade padrão é .16 e sua alteração é opcional.

## Instalando no seu projeto
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

---
#### Criado e mantido por [Gabriel Figueredo](https://github.com/gabrielfins)
