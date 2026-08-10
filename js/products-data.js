/* Single source of truth for every product on the site.
   Read by script.js on products.html, index.html, product-detail.html and cart.html. */
const PRODUCTS = [
  {
    id: 1,
    name: "Signature Dark Chocolate Bar",
    price: 6.50,
    category: "Dark Chocolate",
    image: "../images/product1.jpg",
    description: "Our house bar: 70% single-origin cocoa, slow-conched for a smooth, deep finish with notes of dried cherry and roasted almond.",
    featured: true
  },
  {
    id: 2,
    name: "Classic Milk Chocolate Bar",
    price: 5.50,
    category: "Milk Chocolate",
    image: "../images/product2.jpg",
    description: "Creamy Alpine-style milk chocolate made with real vanilla and a touch of sea salt to round out the sweetness.",
    featured: true
  },
  {
    id: 3,
    name: "Hazelnut Praline Box",
    price: 18.00,
    category: "Truffles & Pralines",
    image: "../images/product3.jpg",
    description: "A dozen hand-piped hazelnut pralines finished with a thin dark chocolate shell and toasted hazelnut crumb.",
    featured: true
  },
  {
    id: 4,
    name: "Velvet Truffle Collection",
    price: 22.00,
    category: "Truffles & Pralines",
    image: "../images/product4.jpg",
    description: "Sixteen soft-centred truffles across four flavours: classic cocoa, raspberry, salted caramel and espresso.",
    featured: true
  },
  {
    id: 5,
    name: "Almond & Sea Salt Dark Bar",
    price: 7.00,
    category: "Dark Chocolate",
    image: "../images/product-slide1.jpg",
    description: "72% dark chocolate studded with roasted almonds and finished with flaked sea salt.",
    featured: false
  },
  {
    id: 6,
    name: "Caramel Milk Chocolate Bar",
    price: 6.00,
    category: "Milk Chocolate",
    image: "../images/product-slide2.jpg",
    description: "Milk chocolate wrapped around a soft, buttery caramel centre that stays gooey right to the last square.",
    featured: false
  },
  {
    id: 7,
    name: "Deluxe Gift Hamper",
    price: 45.00,
    category: "Gift Boxes",
    image: "../images/product-slide3.jpg",
    description: "Our best-selling hamper: two bars, a praline box, a truffle sleeve and a bag of chocolate-covered almonds, ribboned and boxed.",
    featured: false
  },
  {
    id: 8,
    name: "Assorted Truffle Gift Box",
    price: 28.00,
    category: "Gift Boxes",
    image: "../images/product-slide4.jpg",
    description: "A gift-ready box of twenty assorted truffles, individually wrapped and arranged by flavour.",
    featured: false
  },
  {
    id: 9,
    name: "Mixed Nut Chocolate Cluster",
    price: 9.50,
    category: "Nut & Fruit Chocolate",
    image: "../images/small_product_list_08.jpg",
    description: "Roasted cashews, almonds and pecans bound in a thick layer of milk chocolate and broken into rustic clusters.",
    featured: false
  },
  {
    id: 10,
    name: "Dried Fruit & Nut Bark",
    price: 10.50,
    category: "Nut & Fruit Chocolate",
    image: "../images/small_product_list_09.jpg",
    description: "Dark chocolate bark loaded with dried cranberries, pistachios and orange zest, hand-broken into shards.",
    featured: false
  },
  {
    id: 11,
    name: "Chocolate Fudge Cake Slice",
    price: 8.00,
    category: "Cakes & Pastries",
    image: "../images/product1.jpg",
    description: "A dense, fudgy chocolate cake slice layered with dark chocolate ganache. Sold individually, kept chilled.",
    featured: false
  },
  {
    id: 12,
    name: "Molten Chocolate Lava Cake",
    price: 8.50,
    category: "Cakes & Pastries",
    image: "../images/product2.jpg",
    description: "Individual baked-to-order sponge with a warm, liquid dark chocolate centre. Reheat for 20 seconds before serving.",
    featured: false
  }
];
