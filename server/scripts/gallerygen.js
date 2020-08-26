// generate image gallery
function galleryGen() {
  // get catalog.json
  var requestURL = document.location.origin + '/data/catalog.json'

  // create new request object and GET catalog.json at requestURL
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);

  // set response type to JSON so we get an object returned
  request.responseType = 'json';

  // send request to get catalog.json
  request.send();

  // wait for response from server and act once received
  request.onload = function() {
    // store JSON into const object
    const catalog = request.response;

    // setup temp container for ALL catalog item divs
    var itemDivs = [];

    // iterate through catalog to get necessary gallery item info
    for (const [key, value] of Object.entries(catalog)) {
      // create gallery item for item "key" (item's name used as key)
      let galleryItem = [
        '  <img class="gallery-item"',
        `       src="${value['fdir']}/${value['fname']}"`,
        `       width="${value['iwidth']}" height="${value['iheight']}"`,
        `       alt="${key}">`,
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
}
