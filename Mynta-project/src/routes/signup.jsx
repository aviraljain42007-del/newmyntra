import css from '../components/signup.module.css'
function Signup (){
return<>

<div className="container mt-5">
  <h2 className="text-center mb-4">Sign Up</h2>
  <form className={css.box}>
    <div className="mb-3">
      <label htmlFor="firstName" className="form-label">First Name</label>
      <input type="text" placeholder='Ram' className="form-control" id="firstName" />
    </div>
    <div className="mb-3">
      <label htmlFor="lastName"  className="form-label">Last Name</label>
      <input type="text" placeholder='Chandra' className="form-control" id="lastName" />
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" placeholder='JaiShreeRam@gmail.com'className="form-control" id="email" aria-describedby="emailHelp" />
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" placeholder='Maryada purushottam' className="form-control" id="password" />
    </div>
    <div className="mb-3">
      <label className="form-label">Are you a buyer or vendor?</label>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="userType" id="buyer" value="buyer" />
        <label className="form-check-label" htmlFor="buyer">
          Buyer
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="userType" id="vendor" value="vendor" />
        <label className="form-check-label" htmlFor="vendor">
          Vendor
        </label>
      </div>
    </div>
    <button type="submit" className="btn btn-danger">Sign Up</button>
  </form>
</div>

</>
}
export default Signup