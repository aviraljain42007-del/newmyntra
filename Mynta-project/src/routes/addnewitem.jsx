import { useRef } from "react";
import { useDispatch } from "react-redux";
import { itemactions } from "../store/itemslice";
import { addProduct } from "../../service/item";

function Addnewitem() {
  const dispatch = useDispatch();
  const imageelement = useRef();
  const companyelement = useRef();
  const itemnameelement = useRef();
  const originalelement = useRef();
  const currentelement = useRef();
  const discountelement = useRef();
  const returnelement = useRef();
  const deliveryelement = useRef();
  const starelement = useRef();
  const countelement = useRef();

  async function handleclick (){
    let datasend = {
      itemName: itemnameelement.current.value,
      company: companyelement.current.value,
      originalPrice: Number(originalelement.current.value),
      currentPrice: Number(currentelement.current.value),
      discountPercentage: discountelement.current.value,
      ratingStars: starelement.current.value,
      ratingCount: countelement.current.value,
      returnPeriod: returnelement.current.value,
      deliveryDate: deliveryelement.current.value,
      image: imageelement.current.value,
    };

    await addProduct(datasend);

    dispatch(
      itemactions.addsingleItems({
        image: imageelement.current.value,
        company: companyelement.current.value,
        item_name: itemnameelement.current.value,
        original_price: Number(originalelement.current.value),
        current_price: Number(currentelement.current.value),
        discount_percentage: discountelement.current.value,
        return_period: returnelement.current.value,
        delivery_date: deliveryelement.current.value,
        rating: {
          stars: starelement.current.value,
          count: countelement.current.value,
        },
      })
    );
  }


  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Add New Item</h2>
      <form>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="image" className="form-label">
              Image Source
            </label>
            <input
              ref={imageelement}
              type="url"
              id="image"
              className="form-control"
              placeholder="https://example.com/image.jpg"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="company" className="form-label">
              Company
            </label>
            <input
              ref={companyelement}
              type="text"
              id="company"
              className="form-control"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="item_name" className="form-label">
              Item Name
            </label>
            <input
              ref={itemnameelement}
              type="text"
              id="item_name"
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="original_price" className="form-label">
              Original Price
            </label>
            <input
              ref={originalelement}
              type="number"
              id="original_price"
              className="form-control"
              min="0"
              step="0.01"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="current_price" className="form-label">
              Current Price
            </label>
            <input
              ref={currentelement}
              type="number"
              id="current_price"
              className="form-control"
              min="0"
              step="0.01"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="discount_percentage" className="form-label">
              Discount Percentage
            </label>
            <input
              ref={discountelement}
              type="text"
              id="discount_percentage"
              className="form-control"
              placeholder="e.g., 20%"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="return_period" className="form-label">
              Return Period
            </label>
            <input
              ref={returnelement}
              type="text"
              id="return_period"
              className="form-control"
              placeholder="e.g., 30 days"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="delivery_date" className="form-label">
              Delivery Date
            </label>
            <input
              ref={deliveryelement}
              type="date"
              id="delivery_date"
              className="form-control"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="rating_stars" className="form-label">
              Rating Stars
            </label>
            <input
              ref={starelement}
              type="number"
              id="rating_stars"
              className="form-control"
              min="0"
              max="5"
              step="0.1"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="rating_count" className="form-label">
              Rating Count
            </label>
            <input
              ref={countelement}
              type="number"
              id="rating_count"
              className="form-control"
              min="0"
              required
            />
          </div>
        </div>
        <div className="text-center">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={handleclick}
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}

export default Addnewitem;
