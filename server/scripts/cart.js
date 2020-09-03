// item constructor
function Item(name, price) {
  // item name
  this.name = name;
  // convert string to float
  this.price = parseFloat(price);
}

// event response for add2Cart button
function putInCart(event) {
  // get button element from event
  let btn = event.target;

  // now get dataset attribute from button element
  let data = btn.dataset;

  // now generate new item using item name and price
  const item = new Item(data.name, data.price);

  // check if item is already in hash map data structure (global cart object)
  if (!(item.name in cart)) {
    // add item temp cart
    cart[item.name] = item.price;

    // and update storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // update cart label
    let cartLabel = document.getElementById('lblCartCount');

    // set cart count
    let cartCount = parseInt(cartLabel.textContent, 10);
    cartLabel.textContent = ++cartCount;
  }
}

// display `Empty` in cart when no more items exist
function cartIsEmpty() {
  // create div for empty cart
  let empty = document.createElement('div');

  // set div class, and inner HTML on empty div
  empty.className = 'emptyCart';
  empty.innerHTML = 'Empty';

  // finally get cart-view div and append item div
  let cart_view = document.getElementById('cart-view');
  cart_view.appendChild(empty);
}

// remove item from cart
function rmFromCart(event) {
  // get button element from event
  let btn = event.target;

  // now get dataset attribute from button element
  let data = btn.dataset;

  // check if item is already in hash map data structure (global cart object)
  delete cart[data.name]

  // update storage
  localStorage.setItem('cart', JSON.stringify(cart));

  // get parent of parent of button element (i.e. div with 'item' class)
  let grandparent = btn.parentElement.parentElement;

  // get parent of parent of parent of button element (i.e div id=cart-view)
  let greatgrandparent = btn.parentElement.parentElement.parentElement;

  // delete grandparent
  grandparent.remove();

  // check if all class='item' divs are deleted in div id='cart-view'
  if (greatgrandparent.childElementCount == 0) {
    // show cart is empty
    cartIsEmpty();
  }
}

// the name says it all babay
function clearCart() {
  // clear local storage
  localStorage.clear();
}

// set event listener and putInCart func to all class=add2Cart button
function setupAddBtn() {
  // get all add to cart buttons
  var buttons = document.querySelectorAll('.add2Cart');

  // add event listeners for clicks using => arrow functions
  buttons.forEach((button)=>{
    button.addEventListener('click', putInCart, false);
  });
}

// set event listener and rmFromCart func to all class=rmItem buttons
function setupDelBtn() {
  // get all add to cart buttons
  var buttons = document.querySelectorAll('.rmItem');

  // add event listeners for clicks using => arrow functions
  buttons.forEach((button)=>{
    button.addEventListener('click', rmFromCart, false);
  });
}

// set cart count label to current number of items in cart
function setupCartCount() {
  // get current length of cart object
  let cartCount = Object.keys(cart).length;

  // get cart count label
  let cartLabel = document.getElementById('lblCartCount');

  // set label
  cartLabel.textContent = cartCount;
}

// add event listener to submit button for clearing cart on purchase
function setupClearCartBtn() {
  // get all add to cart buttons
  var buttons = document.querySelectorAll('.submit');

  // add event listeners for clicks using => arrow functions
  buttons.forEach((button)=>{
    button.addEventListener('click', clearCart, false);
  });
}

/*
Directly copied from MDN docs to detect if storage API is available
ref: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/
     Using_the_Web_Storage_API#Feature-detecting_localStorage
*/
function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if something already stored
            (storage && storage.length !== 0);
    }
}

/*
 * ------ EXECUTE ON LOAD -------
 */

// check to see if cart exists and parse to global cart object
let cart = JSON.parse(localStorage.getItem('cart'));

// if cart is null
if (!cart) {
  // create new global cart object, basically a JSON dictionary
  cart = {};

  // store cart
  localStorage.setItem('cart', JSON.stringify(cart));
}
