export const reducer = (state, action) => {
    switch (action.type) {
      case "GET_DENTISTS":
        return { ...state, dentistas: action.payload };
      case "ADD_FAVS":
        return { ...state, favs: [...state.favs, action.payload] };
      case "DELETE_FAV":
        const updatedFavs = state.favs.filter(
          (fav) => fav.id !== action.payload.id
        );
        return { ...state, favs: updatedFavs };
      case "TOGGLE_THEME":
        return { ...state, theme: state.theme === "dark" ? "light" : "dark" };
  
      default:
        throw new Error("Not Valid Operation");
    }
  };