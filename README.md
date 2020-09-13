## tl;dr
A simple `static` website for an `art gallery` using completely `client-side`
`dynamically generated HTML`.

## Introduction
The repository depicts an example of how a simple static website (in this case
an `Art Gallery`), could be made to `dynamically generate HTML` on the
`client's browser` using `Javascript` and `JSON`.

## JSON Item Attributes
This section covers the attributes necessary to the working of the website
located in the `server/data/catalog.js` file:
```
$ cat server/data/catalog.js
catalog = {
  "A View of Mount Fuji Across Lake Suwa (Lake Suwa in Shinano Province)": {
    "fname": "Lake_Suwa_in_the_Shinano_province.jpg",
    "fpath": "/images",
    "gal_width": "320",
    "gal_height": "213",
    "itm_width": "1024",
    "itm_height": "681",
    "price": "$1000",
    "cart": false,
    "medium": "canvas",
    "size": "40x26",
    "units": "in",
    "id": "#012"
  },
  .
  .
  .
}
```

Above we can see all the `attributes` necessary for each item to work with the
`Javascript` source code (located in `server/scripts`). The structure of the
`catalog.js` file is simply a dictionary of dictionaires.

You will notice the name of the item (e.g. `A View of Mount Fuji Across Lake
Suwa (Lake Suwa in Shinano Province)`) is the dictionary `key`, and the `value`
is itself a dictionary of `attributes`.

These `attributes` are all used in generating the `HTML dynamically` in the
`client's browser`. Below we will discuss each attribute:
+ `fname`: The actual filename on the `hardrive` for the image
+ `fpath`: The `directory path` where the file is located
+ `gal_width`: The width of the image displayed in the `gallery.html` page
+ `gal_height`: The height of the image displayed in the `gallery.html` page
+ `itm_width`: The width of the image displayed in the `item.html` page
+ `itm_height`: The height of the image displayed in the `item.html` page
+ `price`: The price of the item
+ `cart`: A `true/false` value to allow `cart checkout` for item
+ `medium`: e.g. `canvas`, `giclee print`, etc ...
+ `size`: Size of the piece
+ `units`: Units used by `size` attribute
+ `id`: Unique numerical `item` identification number
