const markdownInput = document.getElementById('markdown-input');
const convertButton = document.getElementById('convert-button');
const htmlOutput = document.getElementById('html-output');

convertButton.addEventListener('click', () => {
  const markdownText = markdownInput.value;
  const html = markdownToHtml(markdownText);
  htmlOutput.textContent = html;
});

function markdownToHtml(text) {
  // Simple implementation for basic Markdown features
  let html = text;
  html = html.replace(/^# (.*)/gm, '<h1>$1</h1>'); // Headings
  html = html.replace(/^## (.*)/gm, '<h2>$1</h2>');
  html = html.replace(/^### (.*)/gm, '<h3>$1</h3>');
  html = html.replace(/^#### (.*)/gm, '<h4>$1</h4>');
  html = html.replace(/^##### (.*)/gm, '<h5>$1</h5>');
  html = html.replace(/^###### (.*)/gm, '<h6>$1</h6>');
  html = html.replace(/\!\[(.*?)\]\((.*?)\)/gm, '<img src="$2" alt="$1">'); // Images

  html = html.replace(/\*\s(.*?)\s\*?/gm, '<b><i>$1</i></b>'); // Bold and italics combined
  html = html.replace(/\*\s(.*?)\s?/gm, '<b>$1</b>'); // Bold
  html = html.replace(/\_\s(.*?)\s?_/gm, '<i>$1</i>'); // Italics
  html = html.replace(/\[(.*?)\]\((.*?)\)/gm, '<a href="$2">$1</a>'); // Links
  html = html.replace(/\!\[video\]\((.*?)\)/gm, '<video controls><source src="$1" type="video/mp4"></video>');
  html = html.replace(/^\s*-\s+(.*)/gm, '<ul>\n<li>$1</li>\n</ul>');

  return html;
}
