const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user: user }
  : { isLoggedIn: false, user: null };

export default function (user = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "REGISTER_SUCCESS":
      return {
        ...user,
        isLoggedIn: false,
      };
    case "REGISTER_FAIL":
      return {
        ...user,
        isLoggedIn: false,
      };
    case "LOGIN_SUCCESS":
      return {
        ...user,
        isLoggedIn: true,
        user: payload.user,
      };
    case "LOGIN_FAIL":
      return {
        ...user,
        isLoggedIn: false,
        user: null,
      };
    case "LOGOUT":
      return {
        ...user,
        isLoggedIn: false,
        user: null,
      };
    case "UPDATE_SUCCESS":
      return {
        ...user,
        isLoggedIn: true,
        user: payload.user,
      };
    default:
      return user;
  }
}
