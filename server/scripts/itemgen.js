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
    var item_w = item['itm_width'];
    var item_h = item['itm_height'];

    // test for mobile device
    if (/Mobi/.test(navigator.userAgent)) {
      // user is on mobile change to original gallery size
      item_w = item['gal_width'];
      item_h = item['gal_height'];
    }

    // setup item image
    var itemImg = [
      '  <img class="item"',
      `       src="${item['fpath']}/${item['fname']}"`,
      `       width="${item_w}" height="${item_h}"`,
      `       alt="${key}">`
    ].join('\n');

    // setup vars for adding data to buttons
    var addBtn;
    var contact_href = document.getElementById('contact').href;
    const btnData = `data-name="${key}" data-price="${item['price']}"` + " " +
                    `data-id="${item['id']}"`;

    // check if add2cart is necessary
    if (item['price'] === ''){
      let btnAttrs = `title="Request price for ${key} ${item['medium']}` +
                      " " + `${item['size']}" ${btnData}`;
      var addBtn = [
        `    <a href="${contact_href}">`,
        `      <button class="contact2order" ${btnAttrs}>`,
        '        request price',
        '      </button>',
        '    </a>'
      ].join('\n');
    } else if (item['cart']) {
      let btnAttrs = `title="Add${key} ${item['medium']} ${item['size']}"` +
                     " " + `${btnData}`;
      var addBtn = [
        `    <button class="add2Cart" ${btnAttrs}>`,
        '      add to cart',
        '    </button>'
      ].join('\n');
    } else {
      // otherwise set button to contact info to order
      let btnAttrs = `title="Contact us to order ${key} ${item['medium']}` +
                     " " + `${item['size']}" ${btnData}`;
      var addBtn = [
        `    <a href="${contact_href}">`,
        `      <button class="contact2order" ${btnAttrs}>`,
        '        contact to order',
        '      </button>',
        '    </a>'
      ].join('\n');
    }

    // setup item description
    var itemDesc = [
      '  <div id="item-desc">',
      '    <span>',
      `      item ${item['id']} | ${item['medium']} | ${item['size']}` + " " +
             `${item['units']} | ${item['price']}`,
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
