export default function fileReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, ...action.payload];
    case "update":
      return state.map(file => {
        return action.id === file.id ? { ...file, ...action.payload } : file;
      });
    case "delete":
      return state.filter(file => file.id !== action.id);
    default:
      return state;
  }
}
