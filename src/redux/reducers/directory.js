const INITIAL_STATE = {
  sections: [
    {
      title: 'BURGERS',
      imageUrl: 'https://i.ibb.co/Pjw1C4Y/burgers.jpg',
      id: 1,
      linkUrl: 'shop/burgers'
    },
    {
      title: 'CHICKEN',
      imageUrl: 'https://i.ibb.co/6NgsQym/chicken.jpg',
      id: 2,
      linkUrl: 'shop/chicken'
    },

    {
      title: 'SUSHI',
      imageUrl: 'https://i.ibb.co/x7tRTkx/sushi.jpg',
      id: 3,
      linkUrl: 'shop/sushi'
    },
    {
      title: 'PIZZA',
      imageUrl: 'https://i.ibb.co/wsLzLfd/pizza.jpg',
      id: 4,
      linkUrl: 'shop/pizza'
    },

    {
      title: 'SANDWICHES',
      imageUrl: 'https://i.ibb.co/VJ5nhHx/sandwiches.jpg',
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
