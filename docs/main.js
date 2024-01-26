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
