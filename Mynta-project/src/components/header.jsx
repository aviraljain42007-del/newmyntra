import { IoPersonCircleSharp } from "react-icons/io5";
import { FaRegFaceGrinHearts } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
function Header () {


const bagitems = useSelector(store => store.bagitems)

    return(
<header>
        <div className="logo_container">
            <Link to ="/"><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home" /></Link>
        </div>
        <nav className="nav_bar">
             <Link to="/additem">Add Item</Link>
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
            <div className="action_container">
              <IoPersonCircleSharp />
                <span className="action_name">Profile</span>
            </div>

            <div className="action_container">
               <FaRegFaceGrinHearts />
                <span className="action_name">Wishlist</span>
            </div>

            <Link className="action_container" to="/bag">
               <FaShoppingBag />
                <span className="action_name">Bag</span>
                <span className="bag-item-count">{bagitems.length}</span>
            </Link>
        </div>
    </header>
    )
}
export default Header;