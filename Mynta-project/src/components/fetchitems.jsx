import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchstatusactions } from "../store/fetchstatus";
import { itemactions } from "../store/itemslice";
import { getAllProducts } from "../../service/item";

function Fetchitems() {
  const fetchstatus = useSelector((store) => store.fetchstatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchstatus.fetchdone) return;

    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchstatusactions.markfetchstart());
    async function fetchptoducts() {
      const data = await getAllProducts();
      dispatch(fetchstatusactions.markfetchfinish());
      dispatch(fetchstatusactions.markfetchdone());
      dispatch(itemactions.addInitialItems(data));
    }
    fetchptoducts();
  }, [fetchstatus.fetchdone]);

  return <></>;
}
export default Fetchitems;
