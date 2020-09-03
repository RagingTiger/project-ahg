// generate item profile
function itemGen() {
    // get query string
    const urlParams = new URLSearchParams(window.location.search);

    // store title query string key as key
    const key = urlParams.get('title')

    // get item from catalog using title as key from query string
    const item = catalog[key];

    // set up vars for control flow on img w/h for mobile vs. desktop
    var item_w = item['dwidth'];
    var item_h = item['dheight'];

    // test for mobile device
    if (/Mobi/.test(navigator.userAgent)) {
      // user is on mobile change to original gallery size
      item_w = item['iwidth'];
      item_h = item['iheight'];
    }

    // setup HTMLstring
    var itemView = [
        '<div id="item-view">',
        '  <img class="item"',
        `       src="${item['fdir']}/${item['fname']}"`,
        `       width="${item_w}" height="${item_h}"`,
        `       alt="${key}">`,
        '  <p>',
        `    ${item['medium']} | ${item['size']} | ${item['price']}`,
        '  </p>',
        '</div>'
    ].join('\n');

    // add gallery after navigation (see: navigen.js)
    var naviviewTag = document.getElementById('nav-view');
    naviviewTag.insertAdjacentHTML('afterend', itemView);
}

// dynamically set title using title query string param
function set_title() {
  // get title from query string
  const urlParams = new URLSearchParams(window.location.search);

  // go ahead and set doc title
  document.title = urlParams.get('title');
}
