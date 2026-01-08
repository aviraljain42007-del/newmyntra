import { IoPersonCircleSharp } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../service/item";
import { FaSearch } from "react-icons/fa";
import css from './headers.module.css'
import { authactions } from "../store/auth";
function Headers () {
const dispatch =useDispatch();
  async function handle(){
    await logout();
    dispatch(authactions.logout())
  }

const bagitems = useSelector(store => store.bagitems)
const auth = useSelector(store => store.auth)

    return(
<header>
        <div className="logo_container">
            <Link to ="/home"><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home" /></Link>
        </div>
        <nav className="nav_bar">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Studio <sup>New</sup></a>
        </nav>
        <div className="search_bar">
            <span className="material-symbols-outlined search_icon"><FaSearch /></span>
            <input className="search_input" placeholder="Search for products, brands and more" />
        </div>
        <div className="action_bar">
             <Link onClick ={handle}className={`action_container ${css.dark} `} to="/login">
                     <IoPersonCircleSharp />
                     <span className="action_name">Logout</span>
                   </Link>
              <div className = {`${css.divi}`}> <p className="action_name">welcome</p>
                <p> {auth.name}</p></div>
              

            <Link className={`action_container ${css.dark} `} to="/bag">
               <FaShoppingBag />
                <span className="action_name">Bag</span>
                <span className="bag-item-count">{bagitems.length}</span>
            </Link>
        </div>
    </header>
    )
}
export default Headers;