import { useSelector, useDispatch } from "react-redux";
import { bagitemsactions } from "../store/bagslice";
import { IoIosAddCircle } from "react-icons/io";

import {
  addToCartService,
  deleteproduct,
  getAllProducts,
  getCartService,
  seedetails,
} from "../../service/item";
import { Link, useNavigate } from "react-router-dom";
import { authactions } from "../store/auth";
import { itemactions } from "../store/itemslice";

function Homeitem({ item }) {
  let auth = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  const navigateto = useNavigate();

  async function handleaddclick() {
    const hello = await addToCartService(item._id);
    const iteme = await getCartService();
    dispatch(bagitemsactions.addtobag(iteme.items));
  }
  async function handleremove(id) {
    await deleteproduct(id);
    const itemj = await getAllProducts();
    dispatch(itemactions.addInitialItems(itemj))
  }
  async function handleclick(id) {
    let item = await seedetails(id);
    let itemarray = Object.values(item);
    dispatch(authactions.adddetail(itemarray));
    navigateto(`/detail/${id}`);
  }

  return (
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
        <span className="text-primary" onClick={() => handleclick(item._id)}>
          {" "}
          details...
        </span>

        <button
          type="button"
          className="btn btn-success btn-add-bag"
          onClick={() => handleaddclick(item._id)}
        >
          {" "}
          <IoIosAddCircle /> Add to bag
        </button>

        {auth.type === "vendor" ? (
          <button
            type="button"
            className="btn btn-warning btn-add-bag"
            onClick={() => handleremove(item._id)}
          >
            {" "}
            remove from list
          </button>
        ) : null}
      </div>
      `
    </>
  );
}
export default Homeitem;
