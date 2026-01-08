import Fetchitems from "../components/fetchitems.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/header.jsx";
import { Outlet} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../components/spinner.jsx";
import Headers from "../components/headers.jsx";
import { getMe } from "../../service/item.js";
import { authactions } from "../store/auth.js";
import { useEffect } from "react";
function App() {

const dispatch = useDispatch();
  useEffect(() => {
  const loadUser = async () => {
    const user = await getMe();
  
      dispatch(authactions.addtype(user.type));
      dispatch(authactions.addname(user.name))
    
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
