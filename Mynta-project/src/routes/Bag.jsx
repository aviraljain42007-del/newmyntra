import Bagitem from "../components/Bagitem";
import {useSelector } from "react-redux";
import Bagsummary from "../components/bagsummary";

function Bag() {
const bagitem = useSelector(store => store.bagitems)

  
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-item-container">
            {bagitem.map((item) =>  <Bagitem key = {item._id} item={item}></Bagitem>
                  )}
           
          </div>

          <Bagsummary></Bagsummary>
        </div>
      </main>
      </>
  );
}
export default Bag;
