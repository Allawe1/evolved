export const reducer = (state, action) => {
  if (action.type === "SHOP") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "item added",
    };
  }
  if (action.type === "NEW") {
    return { ...state, isModalOpen: true, modalContent: "please enter value" };
  }
  if (action.type === "CONTACT") {
    return { ...state, isModalOpen: false };
  }
  if (action.type === "ABOUT") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return { ...state, people: newPeople };
  }
  throw new Error("no matching action type");
};
