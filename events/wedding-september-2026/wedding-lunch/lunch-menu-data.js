/* Wedding lunch menu — single source for menu-card-a4.html and menu-tent-a4.html.
   (The item tents read lunch-items.js, which adds a description per item.) */

const LUNCH_SECTIONS = [
  { h: "Starters", items: ["Dhokla", "Samosa", "Kachori", "Aloo Tikki", "Patra"] },
  { h: "Mains", items: ["Palak Paneer", "Amritsari Chole with Burrata", "Daal Tadka",
                        "Aloo Gobi Adaraki", "Makhani Vegetable Kofta"] },
  { h: "Accompaniments", items: [{ n: "Tandoori Indian Breads", sub: "Garlic Naan · Butter Naan · Roti" },
                                 "Jeera Pulao", "Kachumber Salad", "Mixed Pickles", "Papadum"] },
  { h: "Dessert", items: ["Gajar Halwa", "Gulab Jamun"] },
  { h: "Drinks", items: ["Fresh Fruit Juice", "Tea", "Coffee", "Lemonade", "Sodas", "Water"] },
];
