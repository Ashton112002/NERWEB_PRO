export const logout = () => {
  localStorage.removeItem("jwt");
  localStorage.removeItem("cart");
  localStorage.removeItem("wishList");
  localStorage.removeItem("userInfo");   // clear user storage for validation
  localStorage.removeItem("currentUserEmail");
  window.location.href = "/";
};
