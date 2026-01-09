import { useDispatch } from "react-redux";
import { bagitemsactions } from "../store/bagslice";

import { MdDelete } from "react-icons/md";
import { getCartService, removeFromCartService } from "../../service/item";
function Bagitem({ item }) {
  const dispatch = useDispatch();;

 const handleclick = async() => {
await removeFromCartService(item.product._id)
const iteme = await getCartService()
dispatch(bagitemsactions.addtobag(iteme.items));
  };

  return (
    <div className="bag-item-container">
      <div className="item-left-part">
        <img
          className="bag-item-img"
          src={`http://localhost:3000/${item.product.image}`}
        />
      </div>
      <div className="item-right-part">
        <div className="company">{item.product.company}</div>
        <div className="item-name">{item.product.itemName}</div>
        <div className="price-container">
          <span className="current-price">Rs {item.product.currentPrice}</span>
          <span className="original-price">Rs {item.product.originalPrice}</span>
          <span className="discount-percentage">
            ({item.product.discountPercentage}% OFF)
          </span>
        </div>
        <div className="return-period">
          <span className="return-period-days">{item.product.returnPeriod} days</span>{" "}
          return available
        </div>
        <div className="delivery-details">
          Delivery by
          <span className="delivery-details-days">{item.product.deliveryDate}</span>
        </div>
         <div className="delivery-details">
          Quantity : 
          <span className="delivery-details-days"> {item.quantity}</span>
        </div>
      </div>

      <div className="remove-from-cart" onClick={handleclick}>
        <MdDelete />
      </div>
    </div>
  );
}
export default Bagitem;
