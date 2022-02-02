import { contextFactory } from "../config/context";
import { generalsReducer } from "./general/reducer";

export const general = {
  prueba: {
    name: "javier vassallo",
    isOpen: false,
    caseId: 123,
    caseConversationId: 1123,
  },
  userSession: null,
  dataSaved: false,
};

export const globalState = {
  general,
};

export const generalReducer = (state, action) => ({
  general: generalsReducer(state.general, action),
});

export const { useDispatch, useSelector, Context } =
  contextFactory(globalState);
