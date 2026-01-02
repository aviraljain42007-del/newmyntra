export const addProduct = async (formdata) => {
  const res = await fetch("http://localhost:3000/addnew", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formdata),
  }); 
  const item = await res.json();
  return item;
};