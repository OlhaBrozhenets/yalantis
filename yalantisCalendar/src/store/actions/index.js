export const ACTION_SET_USERS = "SET_USERS";
export const setUsers = (payload) => ({
  type: ACTION_SET_USERS,
  payload: payload,
});

export const ACTION_SET_ACTIVE_MONTH = "SET_ACTIVE_MONTH";
export const setActiveMonth = (payload) => ({
  type: ACTION_SET_ACTIVE_MONTH,
  payload,
});
