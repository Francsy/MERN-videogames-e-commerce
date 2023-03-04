const mongoose = require('mongoose');

const Manufacturer = require('../models/manufacturers')
const Product = require('../models/products');

const seedManufacturers = [
    { "manufacturer_name": "Bergstrom-Feest Inc", "CIF": "X799281116", "address": "462 Blaine Trail" },
    { "manufacturer_name": "Klein Inc", "CIF": "R888901972", "address": "28 Elmside Circle" },
    { "manufacturer_name": "Lynch, Predovic and Carter", "CIF": "P391325062", "address": "64613 Loeprich Junction" },
    { "manufacturer_name": "Rohan Inc", "CIF": "Q777895009", "address": "055 Atwood Road" },
    { "manufacturer_name": "Orunga Park", "CIF": "J474661816", "address": "030 West Road" },
    { "manufacturer_name": "Henry and Sons", "CIF": "D768492794", "address": "82 Montana Alley" },
    { "manufacturer_name": "Koch Store", "CIF": "D214333931", "address": "23 Scott Court" },
    { "manufacturer_name": "Pick inc", "CIF": "T879078274", "address": "2928 Loomis Street" },
    { "manufacturer_name": "Altenwerth-Bauch", "CIF": "S558272514", "address": "71 Dryden Trail" },
    { "manufacturer_name": "Hills-Vasilka", "CIF": "P183308657", "address": "0 Scofield Point" }
]


const initialProducts = [
    {
        "name": "Melon - Watermelon Yellow",
        "relevance": 1.31,
        "price": 6.4
    }, {
        "name": "Crab - Imitation Flakes",
        "relevance": 6.71,
        "price": 11.33
    }, {
        "name": "Flour - So Mix Cake White",
        "relevance": 9.37,
        "price": 16.8
    }, {
        "name": "Pepper - Red Thai",
        "relevance": 4.88,
        "price": 7.48
    }, {
        "name": "Pork - Butt, Boneless",
        "relevance": 5.74,
        "price": 1.84
    }, {
        "name": "Wine - White, Gewurtzraminer",
        "relevance": 2.76,
        "price": 18.72
    }, {
        "name": "Wine - Two Oceans Cabernet",
        "relevance": 9.43,
        "price": 8.26
    }, {
        "name": "Cod - Salted, Boneless",
        "relevance": 3.63,
        "price": 19.86
    }, {
        "name": "Soup - Campbells, Beef Barley",
        "relevance": 5.82,
        "price": 1.97
    }, {
        "name": "Rabbit - Whole",
        "relevance": 8.18,
        "price": 12.86
    }, {
        "name": "Ranchero - Primerba, Paste",
        "relevance": 9.65,
        "price": 3.35
    }, {
        "name": "Cheese - Parmesan Grated",
        "relevance": 5.65,
        "price": 11.78
    }, {
        "name": "Mousse - Passion Fruit",
        "relevance": 3.73,
        "price": 18.77
    }, {
        "name": "Schnappes - Peach, Walkers",
        "relevance": 8.14,
        "price": 2.91
    }, {
        "name": "Cheese - Gorgonzola",
        "relevance": 0.76,
        "price": 13.07
    }, {
        "name": "Soap - Hand Soap",
        "relevance": 6.8,
        "price": 13.14
    }, {
        "name": "Absolut Citron",
        "relevance": 5.97,
        "price": 7.21
    }, {
        "name": "Beer - Original Organic Lager",
        "relevance": 3.02,
        "price": 11.97
    }, {
        "name": "Cloves - Whole",
        "relevance": 2.89,
        "price": 13.28
    }, {
        "name": "The Pop Shoppe - Lime Rickey",
        "relevance": 7.68,
        "price": 7.34
    }, {
        "name": "Liqueur Banana, Ramazzotti",
        "relevance": 3.68,
        "price": 3.17
    }, {
        "name": "Longos - Grilled Chicken With",
        "relevance": 9.25,
        "price": 18.73
    }, {
        "name": "Napkin White",
        "relevance": 2.08,
        "price": 2.2
    }, {
        "name": "Eggwhite Frozen",
        "relevance": 3.61,
        "price": 12.72
    }, {
        "name": "Parsnip",
        "relevance": 2.06,
        "price": 13.64
    }, {
        "name": "Beef - Top Butt Aaa",
        "relevance": 7.92,
        "price": 11.79
    }, {
        "name": "Bagel - 12 Grain Preslice",
        "relevance": 2.25,
        "price": 17.77
    }, {
        "name": "Lamb - Whole Head Off",
        "relevance": 7.36,
        "price": 13.61
    }, {
        "name": "Garlic Powder",
        "relevance": 2.47,
        "price": 14.97
    }, {
        "name": "Chocolate - Milk, Callets",
        "relevance": 2.54,
        "price": 5.61
    }, {
        "name": "Sprite, Diet - 355ml",
        "relevance": 8.72,
        "price": 3.36
    }, {
        "name": "Wine - Vouvray Cuvee Domaine",
        "relevance": 0.08,
        "price": 2.97
    }, {
        "name": "Shrimp, Dried, Small / Lb",
        "relevance": 5.04,
        "price": 8.63
    }, {
        "name": "Parasol Pick Stir Stick",
        "relevance": 5.57,
        "price": 14.37
    }, {
        "name": "Cabbage - Savoy",
        "relevance": 9.77,
        "price": 8.74
    }, {
        "name": "Bagel - Everything Presliced",
        "relevance": 5.35,
        "price": 17.87
    }, {
        "name": "Creme De Banane - Marie",
        "relevance": 4.93,
        "price": 11.61
    }, {
        "name": "Chicken - Thigh, Bone In",
        "relevance": 9.63,
        "price": 6.82
    }, {
        "name": "Jameson - Irish Whiskey",
        "relevance": 6.71,
        "price": 16.43
    }, {
        "name": "Table Cloth 72x144 White",
        "relevance": 5.92,
        "price": 10.8
    }, {
        "name": "Lid Coffee Cup 8oz Blk",
        "relevance": 9.35,
        "price": 17.87
    }, {
        "name": "Oneshot Automatic Soap System",
        "relevance": 2.6,
        "price": 14.81
    }, {
        "name": "Sage Ground Wiberg",
        "relevance": 1.46,
        "price": 3.72
    }, {
        "name": "Flour - Chickpea",
        "relevance": 2.14,
        "price": 18.7
    }, {
        "name": "Split Peas - Green, Dry",
        "relevance": 8.42,
        "price": 0.69
    }, {
        "name": "Heura - Spanish Vegan Chorizo",
        "relevance": 2.63,
        "price": 4.78
    }, {
        "name": "Sugar - Individual Portions",
        "relevance": 4.07,
        "price": 7.0
    }, {
        "name": "Rice Wine - Aji Mirin",
        "relevance": 6.14,
        "price": 6.64
    }, {
        "name": "Honey - Comb",
        "relevance": 9.75,
        "price": 0.83
    }, {
        "name": "Wiberg Cure",
        "relevance": 4.88,
        "price": 16.66
    }, {
        "name": "Pepper - Chillies, Crushed",
        "relevance": 8.86,
        "price": 14.99
    }, {
        "name": "Chick Peas - Dried",
        "relevance": 2.21,
        "price": 6.77
    }, {
        "name": "Egg Patty Fried",
        "relevance": 3.5,
        "price": 17.36
    }, {
        "name": "Wine - White, Pelee Island",
        "relevance": 7.25,
        "price": 14.05
    }, {
        "name": "Syrup - Kahlua Chocolate",
        "relevance": 9.39,
        "price": 5.99
    }, {
        "name": "Foam Tray S2",
        "relevance": 7.01,
        "price": 3.4
    }, {
        "name": "Soup - Campbells",
        "relevance": 6.71,
        "price": 4.56
    }, {
        "name": "Chips Potato Swt Chilli Sour",
        "relevance": 6.19,
        "price": 16.45
    }, {
        "name": "Artichokes - Knobless, White",
        "relevance": 1.89,
        "price": 3.16
    }, {
        "name": "Flour - Cake",
        "relevance": 1.05,
        "price": 17.61
    }, {
        "name": "Coffee - Decafenated",
        "relevance": 2.18,
        "price": 11.61
    }, {
        "name": "Canadian Emmenthal",
        "relevance": 5.45,
        "price": 5.11
    }, {
        "name": "Flower - Leather Leaf Fern",
        "relevance": 5.56,
        "price": 6.03
    }, {
        "name": "Marzipan 50/50",
        "relevance": 5.53,
        "price": 15.93
    }, {
        "name": "Syrup - Monin, Swiss Choclate",
        "relevance": 6.03,
        "price": 6.52
    }, {
        "name": "Chocolate - Milk",
        "relevance": 3.48,
        "price": 10.2
    }, {
        "name": "Truffle Shells - White Chocolate",
        "relevance": 0.89,
        "price": 10.17
    }, {
        "name": "Longos - Penne With Pesto",
        "relevance": 7.78,
        "price": 13.88
    }, {
        "name": "Ginger - Pickled",
        "relevance": 8.73,
        "price": 4.44
    }, {
        "name": "Rosemary - Fresh",
        "relevance": 9.48,
        "price": 9.95
    }, {
        "name": "Wine - Cabernet Sauvignon",
        "relevance": 0.77,
        "price": 3.83
    }, {
        "name": "Energy - Boo - Koo",
        "relevance": 5.14,
        "price": 3.2
    }, {
        "name": "Mushroom - Oyster, Fresh",
        "relevance": 6.55,
        "price": 15.47
    }, {
        "name": "Radish",
        "relevance": 1.83,
        "price": 10.83
    }, {
        "name": "Pasta - Cheese / Spinach Bauletti",
        "relevance": 2.1,
        "price": 11.03
    }, {
        "name": "Carrots - Mini Red Organic",
        "relevance": 0.11,
        "price": 10.63
    }, {
        "name": "Sugar - Monocystal / Rock",
        "relevance": 7.02,
        "price": 14.0
    }, {
        "name": "Cake - Pancake",
        "relevance": 9.43,
        "price": 13.89
    }, {
        "name": "Lentils - Green Le Puy",
        "relevance": 2.08,
        "price": 17.8
    }, {
        "name": "Rice - Aborio",
        "relevance": 9.48,
        "price": 6.07
    }, {
        "name": "Cabbage Roll",
        "relevance": 2.55,
        "price": 2.76
    }, {
        "name": "Special cake",
        "relevance": 6.95,
        "price": 11.46
    }, {
        "name": "Soup - Campbells Mac N Cheese",
        "relevance": 5.3,
        "price": 15.52
    }, {
        "name": "Bread - Kimel Stick Poly",
        "relevance": 8.51,
        "price": 18.9
    }, {
        "name": "Wine - Chardonnay South",
        "relevance": 8.93,
        "price": 0.73
    }, {
        "name": "Shiro Miso",
        "relevance": 7.17,
        "price": 4.67
    }, {
        "name": "Pickles - Gherkins",
        "relevance": 8.15,
        "price": 17.13
    }, {
        "name": "Paper Cocktail Umberlla 80 - 180",
        "relevance": 3.04,
        "price": 3.31
    }, {
        "name": "Salt And Pepper Mix - Black",
        "relevance": 9.16,
        "price": 15.72
    }, {
        "name": "Salt - Sea",
        "relevance": 8.28,
        "price": 1.43
    }, {
        "name": "Beef - Ground Medium",
        "relevance": 4.77,
        "price": 18.05
    }, {
        "name": "Coffee Guatemala Dark",
        "relevance": 1.3,
        "price": 12.62
    }, {
        "name": "Pineapple - Canned, Rings",
        "relevance": 5.51,
        "price": 2.24
    }, {
        "name": "Cookies - Englishbay Oatmeal",
        "relevance": 1.9,
        "price": 18.75
    }, {
        "name": "Crackers - Trio",
        "relevance": 4.19,
        "price": 18.39
    }, {
        "name": "Soup - French Can Pea",
        "relevance": 1.83,
        "price": 9.85
    }, {
        "name": "Kiwano",
        "relevance": 3.12,
        "price": 1.94
    }, {
        "name": "Tamarind Paste",
        "relevance": 1.78,
        "price": 10.31
    }, {
        "name": "Pasta - Bauletti, Chicken White",
        "relevance": 5.26,
        "price": 8.49
    }, {
        "name": "Squash - Sunburst",
        "relevance": 4.67,
        "price": 0.53
    } 
]

const loadData = async () => {
    await Manufacturer.deleteMany({});
    const loadedManufacturers = await Manufacturer.insertMany(seedManufacturers);
    console.log('Manufacturers loaded')
    const manufacturerIds = loadedManufacturers.map(manufacturer => manufacturer._id);

    const seedProducts = initialProducts.map(product => ({ ...product, manufacturer: manufacturerIds[Math.floor(Math.random()*manufacturerIds.length)] }));

    await Product.deleteMany({});
    await Product.insertMany(seedProducts);

    console.log('Products loaded')
};

loadData().then(() => {
    console.log('seeds closed connection');
    mongoose.connection.close();
});