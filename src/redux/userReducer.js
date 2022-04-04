export function userReducer(user = [], action) {
  switch (action.type) {
    case "SIGN_UP":
      return action.payload;
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return [];
    default:
      return user;
  }
}

export default userReducer;
