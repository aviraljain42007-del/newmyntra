export const addProduct = async (formdata) => {
  const res = await fetch("http://localhost:3000/add", {
    method: "POST",

    body: formdata,
  });
  const item = await res.json();
  return item;
};

export const getAllProducts = async () => {
  const res = await fetch("http://localhost:3000/getall");
  return await res.json();
};

export const deleteproduct = async (id) => {
  const res = await fetch(`http://localhost:3000/delete${id}`, {
    method: "DELETE",
  });
  return await res.json();
};

export const newsignup = async (data) => {
  const res = await fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const item = await res.json();
  return item;
};

export const checklogin = async (data) => {
  const res = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  
  let item = await res.json();
  return item
};
