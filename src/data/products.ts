const productData = {
  Burgers: {
    id: 1,
    routeName: "burgers",
    items: [
      { price: 14, id: 2, name: "Burger and Coleslaw" },
      { name: "Tomato and Cheese", price: 16, id: 3 },
      { id: 4, name: "Deluxe, Bacon and Cheese", price: 18 },
      { price: 25, name: "Super Double Burger Surprise", id: 5 },
      { name: "Yum Yum Burger", price: 14, id: 6 },
      { id: 7, name: "Burger King Clone", price: 14 },
      { name: "Basic Burger", price: 9, id: 8 },
      { name: "Cheezy", price: 17, id: 9 }
    ],
    title: "Burgers"
  },
  Chicken: {
    id: 4,
    routeName: "chicken",
    title: "Chicken",
    items: [
      { name: "Chicken and Rice", price: 25, id: 23 },
      { price: 20, id: 24, name: "Fried Chicken" },
      { id: 25, name: "Chicken on a Plate", price: 18 },
      { price: 20, name: "BBQ and Sauce", id: 26 },
      { id: 27, name: "Chicken `N Shrimp", price: 45 },
      { price: 15, name: "Chicken Leg and Veggies", id: 28 },
      { id: 29, name: "Fried Chicken Sandwich", price: 16 }
    ]
  },
  Pizza: {
    routeName: "pizza",
    items: [
      { id: 10, name: "Veggie", price: 17 },
      { name: "Baked Italian", id: 11, price: 17 },
      { name: "Tomato Classic", id: 12, price: 15 },
      { price: 12, id: 13, name: "Pepperoni" },
      { id: 14, price: 3, name: "Single Slice" },
      { price: 16, name: "XX Special Pepperoni", id: 15 },
      { id: 16, price: 17, name: "Italian Super Pepperoni" },
      { name: "Cheese", id: 17, price: 14 }
    ],
    title: "Pizza",
    id: 2
  },
  Sandwiches: {
    items: [
      { name: "White Cream on White", price: 12, id: 30 },
      { price: 9, id: 31, name: "Whole Wheat and Turkey" },
      { id: 32, price: 10, name: "Vegetale-Meat" },
      { price: 8, id: 33, name: "Vegetable" },
      { name: "Tomato and Special Sauce Bagel", id: 34, price: 12 },
      { name: "Avacado and Egg Salad", id: 35, price: 16 }
    ],
    routeName: "sandwiches",
    id: 5,
    title: "Sandwiches"
  },
  Sushi: {
    id: 3,
    title: "Sushi",
    items: [
      { id: 18, price: 8, name: "Salmon Sashimi" },
      { id: 19, price: 5, name: "California Roll" },
      { price: 7, id: 20, name: "Cooked Ramen" },
      { price: 7, name: "Avocado Roll", id: 21 },
      { name: "Red Dragon Roll", id: 22, price: 18 }
    ],
    routeName: "sushi"
  }
}

export default productData
