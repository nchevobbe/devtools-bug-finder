const initialState = {};

module.exports = (state = initialState, action) => {
  switch (action.type) {
    case "CONTRIBUTIONS_LOADED":
      return Object.assign({}, state, {
        contributors: action.data
      });
    default:
      return state;
  }
}