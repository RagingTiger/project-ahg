function gen_enter_link () {
 // setup tag for enter link
 var entertag = document.createElement("a");

 // create text node with ENTER text
 var content = document.createTextNode("ENTER");

 // add text content and set attributes
 entertag.appendChild(content);
 entertag.setAttribute("class", "blink_me");
 entertag.setAttribute("href", "gallery.html");

 // control flow on screen width
 if (window.screen.width < 450 && window.screen.height > 550) {
   var idnum = "1352";
 } else {
   var idnum = "3811";
 }

 // get div containing text at position "idnum"
 var olddiv = document.getElementById(idnum);

 // replace old div with enter div
 olddiv.parentNode.replaceChild(entertag, olddiv);

 // get rid of old div
 olddiv.remove()
}

function display_tiger() {
  // get tiger div
  var tiger_div = document.getElementById('ascii-tiger');

  // set display to show
  tiger_div.style.display = 'block';
}
