import Bagitem from "../components/Bagitem";
import { useSelector } from "react-redux";
import Bagsummary from "../components/bagsummary";

function Bag() {

  const bagitem = useSelector(store => store.bagitems)
  const items = useSelector(store => store.items)

  const iteme = items.filter(it =>
    bagitem.includes(it.id)
  )

  
  return (
      <main>
        <div class="bag-page">
          <div className="bag-item-container">
            {iteme.map((item) =>  <Bagitem key = {item.id} item={item}></Bagitem>
                  )}
           
          </div>

          <Bagsummary></Bagsummary>
        </div>
      </main>
  );
}
export default Bag;
