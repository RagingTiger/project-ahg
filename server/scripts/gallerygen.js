// generate image gallery
function galleryGen() {
  // setup HTMLstring
  var galleryView = [
      '<div id="gallery-view">',
      '  GALLERY PLACEHOLDER TEXT',
      '</div>'
  ].join('\n');

  // add gallery after navigation (see: navigen.js)
  var naviviewTag = document.getElementById('nav-view');
  naviviewTag.insertAdjacentHTML('afterend', galleryView);
}
