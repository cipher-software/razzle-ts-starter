// @ts-ignore
const user = (initialState = 0, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    default:
      return initialState;
  }
};

export default user;
