// generate body element if not exist
function bodyGen() {
  // create body element
  document.body = document.createElement('body');
}

// generate navigation header
function naviGen() {
  // store HTML in list/array and convert to string
  var naviView = [
      '<h1>',
      '  ' + document.title,
      '</h1>',
      '<div id="nav-view">',
      '  <a id=about class="navilink" href="about.html" title="About">',
      '    About',
      '  </a>',
      '  <a id=gallery class="navilink" href="gallery.html" title="Gallery">',
      '    Gallery',
      '  </a>',
      '  <a id=contact class="navilink" href="mailto:anhugallery@gmail.com"',
      '    title="Contact">',
      '    Contact',
      '  </a>',
      '  <a id=cart class="navilink" href="cart.html" title="Cart">',
      '    Cart',
      '  </a>',
      '  <span id="lblCartCount"></span>',
      '</div>'
  ].join('\n');

  // add navigation html into body
  document.body.insertAdjacentHTML('afterbegin', naviView);
}

// don't display cart if empty for aesthetic reasons
function toggle_cart_navi() {
  // check if empty '{}'
  if (JSON.stringify(cart) === '{}') {
    // first get elements for cart and label
    var cart_navilink = document.getElementById('cart');
    var cart_lbl = document.getElementById('lblCartCount');

    // now turn off
    cart_navilink.style.display = 'none';
    cart_lbl.style.display = 'none';
  }
}
