import { useEffect, useRef, useState } from "react";
import { checklogin, getCartService, getMe } from "../../service/item";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authactions } from "../store/auth";
import { bagitemsactions } from "../store/bagslice";



function Login() {
  let navigate = useNavigate();

  let [message, setmessage] = useState();

  const dispatch = useDispatch() 
  const email = useRef();
  const password = useRef();

  async function handleclick() {
    let data = {
      Email: email.current.value,
      Password: password.current.value,
    };

    let item = await checklogin(data);
    setmessage(item);

  const details = await getMe();
 dispatch(authactions.addtype(details.type))
  dispatch(authactions.addname(details.name))
  dispatch(authactions.login())
  const iteme = await getCartService();
    dispatch(bagitemsactions.addtobag(iteme.items));
  
    if(item === "login successful") {
      navigate("/home")
    }

  }

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Login</h2>
        <center>
{(message === "buyer" || message === "vendor")
  ? null
  : <p className="text-danger">{message}</p>
}
        </center>
        <div style={{ maxWidth: "400px", margin: "0 auto" }}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              ref={email}
              placeholder="JaiShreeRam@gmail.com"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Enter your registered email.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              ref={password}
              placeholder="Maryada purushottam"
              className="form-control"
              id="password"
            />
          </div>
          <button className="btn btn-danger w-100" onClick={handleclick}>
            Login
          </button>
          <center>
            <a>Don,t have the account ? </a>
          <a className="text-danger" href = "/signup">signup</a>
        </center>
        </div>
      </div>
    </>
  );
}

export default Login;
