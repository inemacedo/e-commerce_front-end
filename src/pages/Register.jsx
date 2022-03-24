import React from "react";

function Register() {
  return <div className="register container my-5" >
    <form className="d-flex flex-wrap" action="#" autoComplete="false" onSubmit={(ev)=> ev.preventDefault()} >
      <div className="row">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <span className="input-group-text">Firstname</span>
            <input type="text" className="form-control form-control-lg" name="firstname" placeholder="Username" aria-label="Firstname"/>
          </div>
        </div>

        <div className="col-md-6">
          <div className="input-group mb-3">
            <span className="input-group-text">Lastname</span>
            <input type="text" className="form-control form-control-lg" name="lastname" placeholder="Username" aria-label="Lastname"/>
          </div>
        </div>

      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">Email</span>
        <input type="email" className="form-control form-control-lg" name="email" placeholder="Email" aria-label="Email"/>
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">Password</span>
        <input type="password" className="form-control form-control-lg" name="password" placeholder="Password" aria-label="Password"/>
      </div>

      <input className="btn btn-lg btn-primary ms-auto" type="submit" value="Continue" />
    </form>
  </div>;
}

export default Register;
