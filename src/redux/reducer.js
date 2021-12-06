const intialState = {
  currencies: [],
  currency: '',
  users: [],
  loggedin: false,
  role: '',
  user: null,
  msg: '',
};

function reducer(state = intialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;
