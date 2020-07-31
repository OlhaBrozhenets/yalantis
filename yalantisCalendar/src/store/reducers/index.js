import { ACTION_SET_USERS, ACTION_SET_ACTIVE_MONTH } from "../actions";

const initialState = {
  users: [],
  activeMonth: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_SET_USERS:
      console.log("SET_USERS", payload);
      return {
        ...state,
        users: payload,
      };
    case ACTION_SET_ACTIVE_MONTH:
      return {
        ...state,
        activeMonth: payload,
      };
    default:
      return state;
  }
}
