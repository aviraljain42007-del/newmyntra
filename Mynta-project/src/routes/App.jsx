import Fetchitems from "../components/fetchitems.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/header.jsx";
import { Outlet} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../components/spinner.jsx";
import Headers from "../components/headers.jsx";
import { getCartService, getMe } from "../../service/item.js";
import { authactions } from "../store/auth.js";
import { useEffect } from "react";
import { bagitemsactions } from "../store/bagslice.js";
function App() {

const dispatch = useDispatch();
  useEffect(() => {
  const loadUser = async () => {
    const user = await getMe();
  const item = await getCartService();
  dispatch(bagitemsactions.addtobag(item.items));
      dispatch(authactions.addtype(user.type));
      dispatch(authactions.addname(user.name));
        dispatch(authactions.login())
    
  };
  loadUser();
}, []);

  const auth = useSelector((store) => store.auth);
  const fetchstatus = useSelector((store) => store.fetchstatus);
  
  return (
    <>
    {auth.type === "buyer" ? <Headers></Headers> : null }
    {auth.type === "vendor" ?   <Header></Header> : null }
    
      <Fetchitems></Fetchitems>
      {fetchstatus.fetching == true ? <LoadingSpinner /> : <Outlet />}
      <Footer></Footer>
    </>
  );
}
export default App;
