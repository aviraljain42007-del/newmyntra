import { useSelector , useDispatch} from "react-redux";
import { bagitemsactions } from "../store/bagslice";
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";


function Homeitem({item}){


const bagitems = useSelector(store => store.bagitems)
const elementfound = bagitems.indexOf(item.id) < 0
const dispatch = useDispatch()
function handleaddclick (){
dispatch(bagitemsactions.addtobag(item.id))
}
function handledeleteclick (){
dispatch(bagitemsactions.deletefrombag(item.id))
}


    return(
        <>
         <div className="item-container">
      <img className="item-image" src= {item.image} alt="item image" />
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

{elementfound == true ? <button type="button" className="btn btn-success btn-add-bag" onClick = {handleaddclick}> <IoIosAddCircle /> Add to bag</button> :<button type="button" className="btn btn-danger btn-add-bag"  onClick = {handledeleteclick}><MdDelete /> Remove from bag</button>}

    </div>`
        </>
    )
}
export default Homeitem;