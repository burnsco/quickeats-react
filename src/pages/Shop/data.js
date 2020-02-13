const SHOP_DATA = {
  burgers: {
    id: 1,
    title: 'Burgers',
    routeName: 'burgers',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl:
          'https://i.ibb.co/XS6jtb6/tomato-burger-and-fried-fries-1600727.jpg',
        price: 25
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl:
          'https://i.ibb.co/CVJR1Hv/meat-burger-with-coleslaw-on-side-and-brown-handled-fork-156114.jpg',
        price: 18
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl:
          'https://i.ibb.co/553X9wM/meat-tomato-and-cheese-burger-161519.jpg',
        price: 35
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl:
          'https://i.ibb.co/TgGC8SY/hamburger-with-egg-and-vegetable-1251198.jpg',
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl:
          'https://i.ibb.co/0Kgs5dH/hamburger-and-potato-fries-1600743.jpg',
        price: 18
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: 'https://i.ibb.co/ys9PZY4/hamburger-161674.jpg',
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: 'https://i.ibb.co/r2Zd0MV/cooked-foods-750073.jpg',
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl:
          'https://i.ibb.co/HKWhkNk/bread-burger-cheese-delicious-580612.jpg',
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: 'https://i.ibb.co/0Xc9g01/cheese-burger-161675.jpg',
        price: 16
      }
    ]
  },
  chicken: {
    id: 4,
    title: 'Chicken',
    routeName: 'chicken',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl:
          'https://i.ibb.co/hHvxVSs/plate-of-rice-and-cooked-meat-1624487.jpg',
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl:
          'https://i.ibb.co/G5nTVCr/fried-meat-on-top-of-white-plate-1059943.jpg',
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: 'https://i.ibb.co/v3FpKXF/food-in-a-plate-1860204.jpg',
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl:
          'https://i.ibb.co/R9vhtTF/barbecue-on-grill-with-sauce-platter-929192.jpg',
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl:
          'https://i.ibb.co/nLgpsWP/cooked-leg-chicken-with-green-vegetable-leaf-60616.jpg',
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl:
          'https://i.ibb.co/1R4Pt9t/american-beef-big-black-background-236486.jpg',
        price: 20
      }
    ]
  },
  sushi: {
    id: 3,
    title: 'Sushi',
    routeName: 'sushi',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: 'https://i.ibb.co/ThkNw4b/sushi-2098143.jpg',
        price: 125
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl:
          'https://i.ibb.co/vJK434s/delicious-dish-epicure-fish-359992.jpg',
        price: 90
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: 'https://i.ibb.co/cCm9RnH/cooked-ramen-1907244.jpg',
        price: 90
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl:
          'https://i.ibb.co/gWGwcg5/avocado-ceramic-plate-chopsticks-culture-343870.jpg',
        price: 16
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl:
          'https://i.ibb.co/rGJSVDF/closed-up-photography-of-sushi-roll-1199985.jpg',
        price: 18
      }
    ]
  },
  pizza: {
    id: 2,
    title: 'Pizza',
    routeName: 'pizza',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl:
          'https://i.ibb.co/pnDzsh0/vegetables-italian-pizza-restaurant-2232.jpg',
        price: 220
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl:
          'https://i.ibb.co/rxMW6WV/top-view-photo-of-baked-pizza-2147491.jpg',
        price: 280
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: 'https://i.ibb.co/RcXsYcr/tomato-pizza-208537.jpg',
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl:
          'https://i.ibb.co/bPJpbb2/sliced-pepperoni-pizza-on-white-ceramic-plate-708587.jpg',
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/9ZWFZqB/pizza-slice-842519.jpg',
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/rcz8vhc/pepperoni-pizza-803290.jpg',
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/89010rr/baked-pepperoni-pizza-774487.jpg',
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl:
          'https://i.ibb.co/6Np31JL/cheese-close-up-cooking-crispy-263041.jpg',
        price: 200
      }
    ]
  },
  sandwiches: {
    id: 5,
    title: 'Sandwiches',
    routeName: 'sandwiches',
    items: [
      {
        id: 30,
        name: 'White Cream on White',
        imageUrl:
          'https://i.ibb.co/pvvCT40/white-cream-on-white-bowl-1633525.jpg',
        price: 12
      },
      {
        id: 31,
        name: 'Whole Wheat and Turkey',
        imageUrl: 'https://i.ibb.co/QnygRz2/wheat-bread-sandwich-1209029.jpg',
        price: 9
      },
      {
        id: 32,
        name: 'Vegetale-Meat',
        imageUrl:
          'https://i.ibb.co/tY4qvsT/vegetale-and-meat-sandwhich-133578.jpg',
        price: 10
      },
      {
        id: 33,
        name: 'Vegetable',
        imageUrl: 'https://i.ibb.co/Jr3Q5SV/vegetable-sandwich-1988624.jpg',
        price: 8
      },
      {
        id: 34,
        name: 'Tomato and Special Sauce Bagel',
        imageUrl: 'https://i.ibb.co/M579tn0/sliced-sandwich-1630309.jpg',
        price: 12
      },
      {
        id: 35,
        name: 'Avacado and Egg Salad',
        imageUrl:
          'https://i.ibb.co/72xpFhK/bread-breakfast-cheese-food-236813.jpg',
        price: 16
      }
    ]
  }
}

export default SHOP_DATA
