import React from "react";

function Login() {
  return <div className="login container my-5" >
    <form className="d-flex flex-column align-items-center" action="#" onSubmit={(ev)=> ev.preventDefault()} >
      <input className="form-control form-control-lg" type="text" />
      <input className="form-control form-control-lg my-4" type="password" />
      <input className="btn btn-success" type="submit" value="Login" />
    </form>
  </div>;
}

export default Login;
