import { useSelector } from "react-redux";
function Bagsummary() {
  const bagitem = useSelector((store) => store.bagitems);
  const items = useSelector((store) => store.items);

  const iteme = items.filter((it) => bagitem.includes(it._id));
  let totalMRP = 0;
  let totaldiscount = 0;
  const totalItem = iteme.length;
  iteme.forEach((ik) => {
    totalMRP += ik.originalPrice;
    totaldiscount += ik.originalPrice - ik.currentPrice;
  });
  let delivery_charge = 40;
  let final = totalMRP - totaldiscount + delivery_charge;

  return (
    <div class="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totaldiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Delivery Charges</span>
          <span className="price-item-value">₹40</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{final}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
}
export default Bagsummary;
