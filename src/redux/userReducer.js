
export function userReducer(user = [], action) {
  switch (action.type) {
    case "LOGIN":
      console.log(action);
      return action.payload;
    case "LOGOUT":
      return [];
    default:
      return user;
  }
}


export default userReducer;