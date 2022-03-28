const userActions = {
  login: function (session) {
    return {
      type: "LOGIN",
      payload: session,
    };
  },
  signUp: function (user) {
    return {
      type: "SIGN_UP",
      payload: user,
    };
  },
};

export default userActions;
