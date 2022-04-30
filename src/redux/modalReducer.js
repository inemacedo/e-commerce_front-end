export function locationReducer(modal = { show: true }, action) {
  switch (action.type) {
    case "HIDE_MODAL":
      console.log(action);
      return {
        show: false
      };
    default:
      return modal;
  }
}

export default locationReducer;
