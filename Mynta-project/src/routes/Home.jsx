import { useSelector } from "react-redux";
import Homeitem from "../components/HomeItem.jsx";
function Home() {
  const items = useSelector((store) => store.items);
  return (
    <div className="items-container">
      {items.map((item) => (
        <Homeitem key={item.id} item={item}></Homeitem>
      ))}
    </div>
  );
}
export default Home;
