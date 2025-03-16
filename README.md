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
ripple | Adds ripple effect to non-button elements (buttons have it by default)
no-ripple | Disables ripple effect on buttons
auto-ripple | Makes all buttons inside this element automatically get ripple effects

### Customizing ripple color

Use the CSS variable `--ripple-color` on your element:

```html
<button style="--ripple-color: #21D4FD">Blue ripple</button>
<a ripple style="--ripple-color: #B721FF" href="#">Purple ripple link</a>
```

### Auto-applying ripples to buttons

Add the `auto-ripple` attribute to a container element to automatically apply ripple effects to all buttons inside it:

```html
<div auto-ripple>
    <button>All these buttons</button>
    <button>Will automatically</button>
    <button>Get ripple effects</button>
</div>
```

### Using with other elements

Add the `ripple` attribute to enable ripples on non-button elements:

```html
<div ripple>Div with ripples</div>
<a ripple href="#">Link with ripples</a>
```

### Disabling ripples on buttons

Add the `no-ripple` attribute to disable ripples on buttons:

```html
<button no-ripple>No ripple button</button>
```

## Installing
[![forthebadge](https://forthebadge.com/images/badges/powered-by-electricity.svg)](https://forthebadge.com)

You can install it in the following ways:

1. Using npm

```
npm install @gabrielfins/ripple-effect
```

2. Using yarn

```
yarn add @gabrielfins/ripple-effect
```

3. Downloading the files

Visit the [demo site](https://gabrielfins.github.io/ripple-effect), go to the **"Add to your project"** section and click the **"Download"** button to download just the necessary files. Or download directly from the repository.

## Adding to your project

1. Installing with npm or yarn

After installation, just import the package into your file.

```js
import "@gabrielfins/ripple-effect";
```

2. When downloading the files

With this method, just add the following tag anywhere in the `<head>` or `<body>` tag of your HTML document.

```html
<script src="ripples.js"></script>
```

Install using jsdelivr CDN:
```html
<script src="https://cdn.jsdelivr.net/gh/gabrielfins/ripple-effect/dist/ripples.js"></script>
```

---
#### Created and maintained by [Gabriel Figueredo](https://github.com/gabrielfins)
