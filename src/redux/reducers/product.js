export default (product = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "FETCH_BY_GATOGERY":
      return action.payload;
    case "FETCH_BY_ID":
      return action.payload;
    default:
      return product;
  }
};
