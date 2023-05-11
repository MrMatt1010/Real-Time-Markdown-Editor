window.onload = function () {
  const converter = new showdown.converter();
  const pad = document.getElementById("pad");
  const markdownArea = document.getElementById("markdown");

  const convertTextAreaToMaerdown = function () {
    const markdownText = pad.ariaValueMax;
    html = converter.makeHtml(markdownText);
    markdownArea.innerHTML = html;
  };

  pad.addEventListener("input", convertTextAreaToMaerdown);

  convertTextAreaToMaerdown();
};