import { useSelector , useDispatch} from "react-redux";
import { bagitemsactions } from "../store/bagslice";
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { deleteproduct, seedetails } from "../../service/item";
import { Link } from "react-router-dom";
import { authactions } from "../store/auth";


function Homeitem({item}){


let auth = useSelector(store => store.auth)

const bagitems = useSelector(store => store.bagitems)
const elementfound = bagitems.indexOf(item._id) < 0
const dispatch = useDispatch()
function handleaddclick (){
dispatch(bagitemsactions.addtobag(item.id))
}
function handledeleteclick (){
dispatch(bagitemsactions.deletefrombag(item.id))
}
async function handleremove(id){
    await deleteproduct(id);
}
async function handleclick(id){
let item = await seedetails(id);
let itemarray = Object.values(item)
dispatch(authactions.adddetail(itemarray))

}


    return(
        <>

         <div className="item-container">
     <img 
  className="item-image" 
  src={`http://localhost:3000/${item.image}`} 
  alt="item image" 
/>
      <div className="rating">
          {item.ratingStars} ⭐ | {item.ratingCount}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.itemName}</div>
      <div className="price">
          <span className="current-price">Rs {item.currentPrice}</span>
          <span className="original-price">Rs {item.originalPrice}</span>
          <span className="discount">({item.discountPercentage}% OFF)</span>
      </div>
<Link to={`/detail/${item._id}`}   onClick ={() => handleclick(item._id)} >details...</Link>

{elementfound == true ? <button type="button" className="btn btn-success btn-add-bag" onClick = {() =>handleaddclick(item._id)}> <IoIosAddCircle /> Add to bag</button> :<button type="button" className="btn btn-danger btn-add-bag"  onClick = {handledeleteclick}><MdDelete /> Remove from bag</button>}


{auth.type==="vendor" ? <button type="button" className="btn btn-warning btn-add-bag" onClick = {() => handleremove(item._id)}>  remove from list</button> : null}


    </div>`
        </>
    )
}
export default Homeitem;