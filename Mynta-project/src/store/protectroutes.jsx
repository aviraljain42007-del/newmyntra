import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
const Protectedroutes = ({children , role}) =>{
    
let check = useSelector(store=> store.auth)
if(!check.isloggedin){
    return <Navigate to = "/login" replace/>
}
else if(check.isloggedin && check.type !== role){
   
    return <Navigate to = "/login" replace/>
}
    return children;
}
export default Protectedroutes;