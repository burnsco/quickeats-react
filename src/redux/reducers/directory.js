const INITIAL_STATE = {
  sections: [
    {
      title: 'BURGERS',
      imageUrl:
        'https://i.ibb.co/xsVSt0f/ham-burger-with-vegetables-1639557.jpg',
      id: 1,
      linkUrl: 'shop/mens'
    },
    {
      title: 'CHICKEN',
      imageUrl:
        'https://i.ibb.co/WsdGLZN/barbecue-blur-chicken-citrus-209406.jpg',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'SUSHI',
      imageUrl:
        'https://i.ibb.co/kQys5r3/closeup-photo-of-sushi-on-ceramic-plate-1028425.jpg',
      id: 3,
      linkUrl: 'shop/hats'
    },
    {
      title: 'PIZZA',
      imageUrl:
        'https://i.ibb.co/rG2M3XR/close-up-photo-of-person-holding-pizza-1653877.jpg',
      id: 4,
      linkUrl: 'shop/mens'
    },
    {
      title: 'SANDWICHES',
      imageUrl: 'https://i.ibb.co/0BSdyjw/sandwich-1603898.jpg',
      id: 5,
      linkUrl: 'shop/womens'
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
