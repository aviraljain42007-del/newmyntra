import Fetchitems from "../components/fetchitems.jsx";
import Footer from "../components/Footer.jsx"
import Header from "../components/header.jsx"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/spinner.jsx";
function App() {
  
const fetchstatus = useSelector(store => store.fetchstatus)

  return (
<>
<Header></Header>
<Fetchitems></Fetchitems>
 { fetchstatus.fetching == true ? <LoadingSpinner /> : <Outlet />} 
<Footer></Footer>
   
</>
    
  )}

export default App;
