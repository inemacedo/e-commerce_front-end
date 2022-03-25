
export function userReducer(user = [], action) {
  switch (action.type) {
    case "LOGIN":
      return user;
    case "LOGOUT":
      return user;
    default:
      return user;
  }
}


export default userReducer;