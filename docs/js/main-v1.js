function copyToClipboard(button, id) {
  const textNode = document.querySelector(id);
  const iconSpan = button.querySelector('span');

  if (!textNode) {
    return;
  }

  navigator.clipboard.writeText(textNode.innerText);

  iconSpan.innerText = 'done';

  const originalTooltip = button.getAttribute('data-tooltip');
  button.setAttribute('data-tooltip', window.getCopiedLabel ? window.getCopiedLabel() : 'Copied!');

  setTimeout(() => {
    iconSpan.innerText = 'content_copy';
    button.setAttribute('data-tooltip', originalTooltip);
  }, 2000);
}
