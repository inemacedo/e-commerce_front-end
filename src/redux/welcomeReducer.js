export function welcomeReducer(welcome = { show: true }, action) {
  switch (action.type) {
    case "HIDE_MODAL":
      return {
        show: false
      };
    default:
      return welcome;
  }
}

export default welcomeReducer;
