
export function themeReducer(theme = "light", action) {
  switch (action.type) {
    case "DARK_MODE":
      return "dark";
    default:
      return "light";
  }
}

export default themeReducer;
