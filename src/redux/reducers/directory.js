const INITIAL_STATE = {
  sections: [
    {
      title: 'BURGERS',
      imageUrl: 'https://res.cloudinary.com/dmztdsduf/burgers/1.jpg',
      id: 1,
      linkUrl: 'shop/burgers'
    },
    {
      title: 'CHICKEN',
      imageUrl: 'https://res.cloudinary.com/dmztdsduf/chicken/25.jpg',
      id: 2,
      linkUrl: 'shop/chicken'
    },

    {
      title: 'SUSHI',
      imageUrl: 'https://res.cloudinary.com/dmztdsduf/sushi/21.jpg',
      id: 3,
      linkUrl: 'shop/sushi'
    },
    {
      title: 'PIZZA',
      imageUrl: 'https://res.cloudinary.com/dmztdsduf/pizza/15.jpg',
      id: 4,
      linkUrl: 'shop/pizza'
    },

    {
      title: 'SANDWICHES',
      imageUrl: 'https://res.cloudinary.com/dmztdsduf/sandwiches/35.jpg',
      id: 5,
      linkUrl: 'shop/sandwiches'
    }
  ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default directoryReducer
