/* Welcome Party — single source for the reference card, the menu tent and the item tents.
   n = name, t = veg | nonveg | drink, sub = small line under the name on the menus,
   d = description on the item tents, live = cooked at a live station, tent: false = menus only. */

const WP_FOOD = [
  { h: "Live Cooking Stations", items: [
    { n: "Pani Puri", t: "veg", live: true,
      d: "Crisp hollow puris filled with spiced potato & chickpeas, with tangy tamarind & mint water" },
    { n: "Dosa, Uttapam & Idli", t: "veg", live: true, sub: "with Sambhar",
      d: "South Indian rice & lentil classics, served with sambhar" },
  ]},
  { h: "Chaat & Vegetarian Kebabs", items: [
    { n: "Bhalla Papri Chaat", t: "veg",
      d: "Soft lentil dumplings & crisp wafers with yoghurt, tamarind & mint chutneys" },
    { n: "Vada Pav", t: "veg",
      d: "Mumbai’s spiced potato fritter in a soft bun with chutneys" },
    { n: "Beetroot Kebab", t: "veg", d: "Spiced beetroot patties, crisp outside & tender within" },
    { n: "Dahi Kebab", t: "veg", d: "Delicate hung-yoghurt kebabs with a crisp golden crust" },
    { n: "Mattar Kachori Bites", t: "veg", d: "Flaky pastry bites filled with spiced green peas" },
    { n: "Mini Cocktail Samosas", t: "veg", d: "Bite-sized pastry parcels with spiced potato & peas" },
  ]},
  { h: "Tandoori", note: "Live station", items: [
    { n: "Chicken Tikka", t: "nonveg", live: true,
      d: "Chicken marinated in yoghurt & spices, char-grilled on skewers" },
    { n: "Agneau Seekh Kebab", t: "nonveg", live: true,
      d: "Spiced minced lamb, shaped on skewers & grilled over the flame" },
    { n: "Chicken Reshmi Gilafi Kebab", t: "nonveg", live: true,
      d: "Silky minced chicken kebab, coated in peppers & onion" },
  ]},
  { h: "Accompaniments", items: [
    // non-breaking spaces keep "& Baba Ghanoush" together when the name wraps
    { n: "Grilled Paprika Hummus & Baba Ghanoush", t: "veg", d: "Smoky paprika hummus & roasted aubergine dip" },
    { n: "Tandoori Naans", t: "veg", d: "Soft leavened bread baked in the tandoor" },
    { n: "Grilled Almonds", t: "veg", tent: false, d: "Warm, golden grilled almonds" },
  ]},
  { h: "Desserts", items: [
    { n: "Mango Shrikhand", t: "veg", d: "Creamy strained yoghurt with sweet mango" },
    { n: "Macarons", t: "veg", sub: "Pistachio · Chocolate · Raspberry · Vanilla · Lemon · Espresso · Caramel",
      d: "Pistachio · Chocolate · Raspberry · Vanilla · Lemon · Espresso · Caramel" },
  ]},
];

const WP_DRINKS = [
  { h: "Drinks", items: [
    { n: "Masala Coke", t: "drink", d: "Cola with a spiced masala twist" },
    { n: "Water", t: "drink", sub: "Still & Sparkling", d: "Still & sparkling" },
    { n: "Lemonade", t: "drink", d: "Chilled & refreshing" },
    { n: "Sodas", t: "drink", sub: "Diet Coke · Sprite · Seltzer", d: "Diet Coke · Sprite · Seltzer" },
    { n: "Tea", t: "drink", d: "Freshly brewed, served hot" },
    { n: "Coffee", t: "drink", d: "Freshly brewed, served hot" },
  ]},
  { h: "Bar", items: [
    { n: "Beer", t: "drink", sub: "Heineken · Peroni · Corona · Non-Alcoholic · High Noon",
      d: "Heineken · Peroni · Corona · Non-alcoholic beers · High Noon" },
    { n: "Wine", t: "drink", sub: "Red · White · Rosé", d: "Red · White · Rosé" },
    { n: "Champagne", t: "drink", d: "Served chilled" },
    { n: "Classic Cocktails", t: "drink", sub: "Negroni · Aperol Spritz · Hugo Spritz · Margarita · Old Fashioned",
      d: "Negroni · Aperol Spritz · Hugo Spritz · Margarita · Old Fashioned & more" },
    { n: "Long Drinks", t: "drink", sub: "Gin & Tonic · Whiskey Soda · Rum & Coke",
      d: "Gin & Tonic · Whiskey Soda · Rum & Coke" },
  ]},
];

const WP_SECTIONS = [...WP_FOOD, ...WP_DRINKS];

/* every food item and every drink gets its own tent, except those marked tent: false */
const WP_TENT_ITEMS = [...WP_FOOD, ...WP_DRINKS].flatMap(s => s.items).filter(it => it.tent !== false);
