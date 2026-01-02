export const addProduct = async (formdata) => {
  const res = await fetch("http://localhost:3000/add", {
    method: "POST",
   
    body:formdata,
  }); 
  const item = await res.json();
  return item;
};


// services/productService.js
export const getAllProducts = async () => {
    const res = await fetch("http://localhost:3000/getall");
    return await res.json();
 
};

export const deleteproduct = async(id) =>{
  const res = await fetch(`http://localhost:3000/delete${id}`,{
    method : "DELETE",
  });
  return await res.json()
}