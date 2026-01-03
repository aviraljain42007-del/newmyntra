import { useRef, useState } from 'react';
import css from '../components/signup.module.css'
import { Link } from "react-router-dom";
import { newsignup } from '../../service/item';
function Signup (){

let firstname = useRef()
let lastname = useRef()
let email = useRef()
let password = useRef()
let [type ,settype] = useState()

async function handleclick(){
 let data = {
  FirstName:firstname.current.value,
  LastName:lastname.current.value,
  Email:email.current.value,
   Password: password.current.value,
   Type:type
 }

await newsignup(data);


}



return<>

<div className="container mt-5">
  <h2 className="text-center mb-4">Sign Up</h2>
  <form className={css.box}>
    <div className="mb-3">
      <label htmlFor="firstName" className="form-label">First Name</label>
      <input type="text" placeholder='Ram' ref ={firstname} className="form-control" id="firstName" />
    </div>
    <div className="mb-3">
      <label htmlFor="lastName"  className="form-label">Last Name</label>
      <input type="text" ref ={lastname} placeholder='Chandra' className="form-control" id="lastName" />
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" ref = {email} placeholder='JaiShreeRam@gmail.com'className="form-control" id="email" aria-describedby="emailHelp" />
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="password"className="form-label">Password</label>
      <input type="password" ref = {password}  placeholder='Maryada purushottam' className="form-control" id="password" />
    </div>
    <div className="mb-3">
      <label className="form-label">Are you a buyer or vendor?</label>
      <div className="form-check">
        <input className="form-check-input" onClick = {(e) => settype(e.target.value)}  type="radio" name="userType" id="buyer" value="buyer" />
        <label className="form-check-label" htmlFor="buyer">
          Buyer
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" onClick = {(e) => settype(e.target.value)}  type="radio" name="userType" id="vendor" value="vendor" />
        <label className="form-check-label" htmlFor="vendor">
          Vendor
        </label>
      </div>
    </div>
    <Link className="btn btn-danger" to = "/login" onClick={handleclick}>Sign Up</Link>
  </form>
  <a>Already have a account ?</a><a className = "text-danger" href ="/login">login</a>
</div>

</>
}
export default Signup