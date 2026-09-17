if (window.Prism) {
  Prism.hooks.add('before-highlight', function (env) {
    const lines = env.code.split('\n');
    const indents = lines
      .filter((line) => line.trim().length > 0)
      .map((line) => line.match(/^\s*/)[0].length);

    if (indents.length === 0) {
      return;
    }

    const minIndent = Math.min(...indents);
    env.code = lines
      .map((line) => line.slice(minIndent))
      .join('\n')
      .trim();
  });

  Prism.hooks.add('complete', function (env) {
    if (env.language !== 'css') {
      return;
    }

    const walker = document.createTreeWalker(env.element, NodeFilter.SHOW_TEXT);
    const hexNodes = [];
    let node;

    while ((node = walker.nextNode())) {
      if (/#[0-9a-fA-F]{6}\b/.test(node.nodeValue)) {
        hexNodes.push(node);
      }
    }

    hexNodes.forEach((textNode) => {
      const swatch = document.createElement('span');
      swatch.className = 'css-color';
      swatch.style.backgroundColor = textNode.nodeValue.match(/#[0-9a-fA-F]{6}\b/)[0];
      textNode.parentNode.insertBefore(swatch, textNode);
    });
  });
}

function copyToClipboard(button, id) {
  const textNode = document.querySelector(id);
  const iconSpan = button.querySelector('span');

  if (!textNode) {
    return;
  }

  navigator.clipboard.writeText(textNode.innerText);

  iconSpan.innerText = 'done';

  setTimeout(() => {
    iconSpan.innerText = 'content_copy';
  }, 2000);
}
