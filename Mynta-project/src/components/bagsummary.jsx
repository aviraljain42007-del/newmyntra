import { useSelector } from "react-redux";
function Bagsummary() {
  const bagitem = useSelector((store) => store.bagitems);


//console.log(bagitem.length);

 
   let totalMRP = 0;
   let totaldiscount = 0;
   const totalItem = bagitem.length;
   bagitem.forEach((ik) => {
     totalMRP += ik.product.originalPrice*ik.quantity;
     totaldiscount += ik.product.originalPrice*ik.quantity - ik.product.currentPrice*ik.quantity;
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
