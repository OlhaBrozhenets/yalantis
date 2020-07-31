import api from "./api";

export const getUsers = () => {
  return api.get().then((resp) => resp);
};
