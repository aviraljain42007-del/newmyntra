// import { useEffect } from "react";
// import { useSelector , useDispatch } from "react-redux";
// import { fetchstatusactions } from "../store/fetchstatus";
// import { itemactions } from "../store/itemslice";

function Fetchitems(){
// const fetchstatus = useSelector(store => store.fetchstatus)
// const dispatch = useDispatch();


// useEffect(() =>{
//     if(fetchstatus.fetchdone) return;

//     const controller =new AbortController();
//     const signal = controller.signal;
//     dispatch(fetchstatusactions.markfetchstart())
//     fetch("http://localhost:8080/items" , {signal})
//     .then((result) => result.json())
//     .then(({items}) =>{
//          dispatch(fetchstatusactions.markfetchfinish())
//           dispatch(fetchstatusactions.markfetchdone())
//         dispatch(itemactions.addInitialItems(items))
//     })
// } , [fetchstatus.fetchdone])

// return <></>
}
export default Fetchitems