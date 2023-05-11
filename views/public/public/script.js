window.onload = function () {
  const converter = new showdown.converter();
  const pad = document.getElementById("pad");
  const markdownArea = document.getElementById("markdown");

  const convertTextAreaToMaerdown = function () {
    const markdownText = pad.ariaValueMax;
    html = converter.makeHtml(markdownText);
    markdownArea.innerHTML = html;
  };

  const didChangeOccur = function () {
    if (previousMarkdownValue != pad.value) {
      return true;
    }
    return false;
  };

  setInterval(function () {
    if (didChangeOccur()) {
      convertTextAreaToMarkdown();
    }
  }, 1000);

  pad.addEventListener("input", convertTextAreaToMaerdown);

 // ignore if on home page
    if(document.location.pathname.length > 1){
 // implement share js
        const documentName = document.location.pathname.substring(1);
  sharejs.open(document.location.pathname, "text", function (error, doc) {
    doc.attach_textarea(pad);
    convertTextAreaToMaerdown();
  });

  
};
