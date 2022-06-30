export function locationReducer(path = {}, action) {
  switch (action.type) {
    case "SAVE_PATH":
      // console.log(action);
      return {
        prevPath: action.payload
      };
    default:
      return path;
  }
}

export default locationReducer;
