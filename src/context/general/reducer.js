import { ActionType } from "./actions";

export const generalsReducer = (state, action) => {
  switch (action.type) {
    case ActionType.TOGGLE_DRAWER:
      return {
        ...state,
        prueba: action.payload,
      };
    case ActionType.TOGGLE_USER_SESSION:
      return {
        ...state,
        userSession: action.payload,
      };
    case ActionType.TOGGLE_DATA_SAVED:
      return {
        ...state,
        dataSaved: action.payload,
      };
    default:
      return state;
  }
};
