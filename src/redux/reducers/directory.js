const INITIAL_STATE = {
  sections: [
    {
      title: 'BURGERS',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/quikeats-d24d2.appspot.com/o/burgers%2Ftomato-burger-and-fried-fries-1600727.jpg?alt=media&token=1fe295d0-7c06-473e-9dc3-9fdc78efa4be',
      id: 1,
      linkUrl: 'shop/burgers'
    },
    {
      title: 'CHICKEN',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/quikeats-d24d2.appspot.com/o/chicken%2Fcooked-leg-chicken-with-green-vegetable-leaf-60616.jpg?alt=media&token=edf49e8c-6a68-4354-892c-02d0e6fa6dd5',
      id: 2,
      linkUrl: 'shop/chicken'
    },

    {
      title: 'SUSHI',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/quikeats-d24d2.appspot.com/o/sushi%2Fclose-up-photo-of-sliced-salmon-1683545.jpg?alt=media&token=e4499ee1-042d-421e-9d2f-0e59b13381b7',
      id: 3,
      linkUrl: 'shop/sushi'
    },
    {
      title: 'PIZZA',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/quikeats-d24d2.appspot.com/o/pizza%2Fcheese-close-up-cooking-crispy-263041.jpg?alt=media&token=2bf48d74-35df-43d7-9ed1-124b09f80168',
      id: 4,
      linkUrl: 'shop/pizza'
    },

    {
      title: 'SANDWICHES',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/quikeats-d24d2.appspot.com/o/sandwiches%2Fclub-sandwich-served-on-chopping-board-1600711.jpg?alt=media&token=1ed7fc07-30e8-48b3-b9e4-fe23384c5311',
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
