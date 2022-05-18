export const LOGGED_USER = "LOGGED_USER";
export const loginUser = (values) => {
  localStorage.setItem(LOGGED_USER, JSON.stringify(values));
};
