const characterReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_POKEMON_INFO":
      console.log("reducer", action);
      return action;

    default:
      return state;
  }
};

export default characterReducer;
