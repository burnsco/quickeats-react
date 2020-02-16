const INITIAL_STATE = {
  sections: [
    {
      title: 'BURGERS',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/quikeats-d24d2.appspot.com/o/burgers.webp?alt=media&token=06105dd0-eddd-4e18-bf4e-94c0c5dee1ca',
      id: 1,
      linkUrl: 'shop/burgers'
    },
    {
      title: 'CHICKEN',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/quikeats-d24d2.appspot.com/o/images%2Fhome%2Fchicken.jpg?alt=media&token=8cdd0b93-7991-424d-b072-78ab0589cc95',
      id: 2,
      linkUrl: 'shop/chicken'
    },

    {
      title: 'SUSHI',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/quikeats-d24d2.appspot.com/o/images%2Fhome%2Fsushi.jpg?alt=media&token=d3c83409-f0ed-494d-9c1f-33fa2340be75',
      id: 3,
      linkUrl: 'shop/sushi'
    },
    {
      title: 'PIZZA',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/quikeats-d24d2.appspot.com/o/images%2Fhome%2Fpizza.jpg?alt=media&token=c45b646c-cfc8-427f-8951-c6d723daa3bd',
      id: 4,
      linkUrl: 'shop/pizza'
    },

    {
      title: 'SANDWICHES',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/quikeats-d24d2.appspot.com/o/images%2Fhome%2Fsandwiches.jpg?alt=media&token=b57e5a48-8b59-4d55-a5a2-dbb164fceb2f',
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
