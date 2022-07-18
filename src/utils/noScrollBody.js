function addNoScrollBody() {
  window.document.body.classList.add("no-scroll");
}

function removeNoScrollBody() {
  window.document.body.classList.remove("no-scroll");
}

export {removeNoScrollBody, addNoScrollBody};