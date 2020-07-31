import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUsers } from "../../api/users";
import { setUsers } from "../../store/actions";
import UsersItem from "./UsersItem";

import "../style.css";

function Users() {
  const users = useSelector((state) => state.users);
  const activeMonth = useSelector((state) => state.activeMonth);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response  = await getUsers();
      dispatch(setUsers(response.data));
    };
    fetchData();
  }, []);

  let usersToRender = users;
  if (activeMonth && users) {
    usersToRender = users.filter((user) => {
      const month = new Date(user.dob).getMonth() + 1;
      return month === activeMonth.id;
    });
  }

  return (
    <div className="users">
      {usersToRender.map((user) => (
        <UsersItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default Users;
