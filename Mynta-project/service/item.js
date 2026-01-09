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

export const getMe = async () => {
  const res = await fetch("http://localhost:3000/me", {
    credentials: "include",
  });
  const item = await res.json();
  return item;
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
    credentials: "include",
    body: JSON.stringify(data),
  });

  let item = await res.json();
  return item;
};

export const seedetails = async (id) => {
  const res = await fetch(`http://localhost:3000/getdetails${id}`);
  const item = await res.json();
  return item;
};

export const logout = async () => {
  const res = await fetch("http://localhost:3000/logout", {
    method: "POST",
    credentials: "include", //  MUST
  });
  return await res.json();
};
export const addToCartService = async (productId) => {
  const res = await fetch("http://localhost:3000/addtocart", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ productId }),
  });
  const item = await res.json();
  return item;
};

export const getCartService = async () => {
  const res = await fetch("http://localhost:3000/getcart", {
    credentials: "include",
  });
  return res.json();
};

export const removeFromCartService = async (productId) => {
  const res = await fetch(`http://localhost:3000/delete/${productId}`, {
    method: "DELETE",
    credentials: "include",
  });
  return res.json();
};
