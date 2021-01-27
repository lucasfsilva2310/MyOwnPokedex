const characterReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_POKEMON_INFO":
      return action.pokemon;

    default:
      return state;
  }
};

export default characterReducer;
