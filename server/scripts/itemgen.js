// check price string to see if numeric
function isPriceNumeric(num) {
  // set is num to true
  var is_num = true;

  // make sure input is number
  if (typeof num !== "number") {
    // pull out non-numeric characters
    var parsed_num = num.replace(/\$/g,'');

    // check if not a number
    if (parsed_num === '') {
      var is_num = false;
    }
    else {
      var is_num = !isNaN(parsed_num);
    }
  }

  // true or false
  return is_num;
}

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

    // setup item image
    var itemImg = [
      '  <img class="item"',
      `       src="${item['fdir']}/${item['fname']}"`,
      `       width="${item_w}" height="${item_h}"`,
      `       alt="${key}">`
    ].join('\n');

    // check if add2cart is necessary
    var addBtn = '';
    if (isPriceNumeric(item['price'])) {
      let btnTitle = `Add ${key} ${item['medium']} ${item['size']} to Cart`;
      let btnData = `data-name="${key}" data-price="${item['price']}"`;
      var addBtn = [
        `    <button class="add2Cart" ${btnData} title="${btnTitle}">`,
        '      purchase',
        '    </button>'
      ].join('\n');
    }

    // setup item description
    var itemDesc = [
      '  <div id="item-desc">',
      '    <span>',
      `      ${item['medium']} | ${item['size']} | ${item['price']} |`,
      addBtn,
      '    </span>',
      '  </div>'
    ].join('\n');

    // setup final item-view div
    var itemView = [
        '<div id="item-view">',
        itemImg,
        itemDesc,
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
