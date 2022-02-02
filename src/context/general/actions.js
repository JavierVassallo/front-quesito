export const ActionType = {
  TOGGLE_PRUEBA: "TOGGLE_PRUEBA",
  TOGGLE_USER_SESSION: "TOGGLE_USER_SESSION",
  TOGGLE_DATA_SAVED: "TOGGLE_DATA_SAVED",
};

export const actionsCreator = {
  toggleUserSession: (userSession) => ({
    type: ActionType.TOGGLE_USER_SESSION,
    payload: userSession,
  }),
  togglePreba: (isOpen, name, caseId, caseConversationId) => ({
    type: ActionType.TOGGLE_PRUEBA,
    payload: { isOpen, name, caseId, caseConversationId },
  }),
  toggleSavedData: (bool) => ({
    type: ActionType.TOGGLE_DATA_SAVED,
    payload: bool,
  }),
};
