# <img src="images/ripple-effect-logo.svg" alt="Ripple Effect" width="350px" />

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/gabrielfins/ripple-effect/blob/master/LICENSE.md)
[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://gabrielfins.github.io/ripple-effect)

### Ripple Effect is a lightweight JavaScript library for adding Material Design-inspired ripple effects to DOM elements

Provides simple, customizable visual interactions, with no dependencies.

## Documentation

- https://gabrielfins.github.io/ripple-effect

## How to use

Add the `data-ripples` attribute to apply the effect:

| Attribute            | Effect                            |
| --------------------- | ---------------------------------- |
| data-ripples          | Applies the effect to the element |
| data-ripples="light"  | Sets the effect color to white    |
| data-ripples="dark"   | Sets the effect color to black    |

### Changing the defaults

Select the `.ripple` class inside an element with the `data-ripples` attribute. Every element with that attribute will follow this pattern.

```css
[data-ripples] .ripple {
  background-color: #a3eeff;
  opacity: 0.32;
}
```

### Custom classes

Give your custom class a name and select the `.ripple` class inside it.

```css
.ripples-blue .ripple {
  background-color: #e2a2ff;
  opacity: 0.32;
}
```

## Download

Install with npm:

```bash
npm install @gabrielfins/ripple-effect
```

And import it in your code:

```js
import '@gabrielfins/ripple-effect';
```

### Manual download

1. Go to the project's [github](https://github.com/gabrielfins/ripple-effect)
2. Download the latest release
3. Add the `ripples.js` file from the `/dist` folder to your project
4. Import the file in your HTML with:

```html
<script src="./your-path/ripples.js" defer></script>
```

---

#### Created and maintained by [Gabriel Figueredo](https://gabrielfins.com)
