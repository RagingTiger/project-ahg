// generate image gallery
function galleryGen() {
  // setup temp container for ALL catalog item divs
  var itemDivs = [];

  // iterate through catalog to get necessary gallery item info
  for (const [key, value] of Object.entries(catalog)) {
    // get item values
    const params = new URLSearchParams({
      title: `${key}`,
    });

    // create gallery item for item "key" (item's name used as key)
    let galleryItem = [
      '  <a href=item.html?' + params.toString() + '>',
      '    <img class="gallery-item"',
      `         src="${value['fpath']}/${value['fname']}"`,
      `         width="${value['gal_width']}" height="${value['gal_height']}"`,
      `         style="object-fit:cover;" alt="${key}">`,
      '  </a>'
    ].join('\n');

    // add item to total collection
    itemDivs.push(galleryItem);
  }

  // setup HTMLstring
  var galleryView = [
      '<div id="gallery-view">',
      itemDivs.join('\n'), // add previous item divs to gallery view
      '</div>'
  ].join('\n');

  // add gallery after navigation (see: navigen.js)
  var naviviewTag = document.getElementById('nav-view');
  naviviewTag.insertAdjacentHTML('afterend', galleryView);
}
