import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setActiveMonth } from "../../store/actions";

const GREY_COLOR = "#cccccc";
const RED_COLOR = "#ef4d4d";
const GREEN_COLOR = "#36c836";
const BLUE_COLOR = "#65c1f7";

const months = [
  {
    id: 1,
    name: "January",
    monthOrder: 1,
  },
  {
    id: 2,
    name: "February",
    monthOrder: 2,
  },
  {
    id: 3,
    name: "March",
    monthOrder: 3,
  },
  {
    id: 4,
    name: "April",
    monthOrder: 4,
  },
  {
    id: 5,
    name: "May",
    monthOrder: 5,
  },
  {
    id: 6,
    name: "June",
    monthOrder: 6,
  },
  {
    id: 7,
    name: "July",
    monthOrder: 7,
  },
  {
    id: 8,
    name: "August",
    monthOrder: 8,
  },
  {
    id: 9,
    name: "September",
    monthOrder: 9,
  },
  {
    id: 10,
    name: "October",
    monthOrder: 10,
  },
  {
    id: 11,
    name: "November",
    monthOrder: 11,
  },
  {
    id: 12,
    name: "December",
    monthOrder: 12,
  },
];

export default function Months() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const calculatedUsers =
    users &&
    users.reduce((res, user) => {
      const monthOfBirth = new Date(user.dob).getMonth() + 1;
      res[monthOfBirth] = res[monthOfBirth] ? res[monthOfBirth] + 1 : 1;
      return res;
    }, {});

  function getMonthColor(usersCount) {
    if (!usersCount || usersCount <= 2) {
      return GREY_COLOR;
    } else if (usersCount >= 3 && usersCount <= 6) {
      return BLUE_COLOR;
    } else if (usersCount >= 7 && usersCount <= 10) {
      return GREEN_COLOR;
    }
    return RED_COLOR;
  }

  return (
    <ul onMouseLeave={() => setActiveMonth(null)}>
      {months &&
        months.map((month) => (
          <li
            style={{
              backgroundColor: getMonthColor(calculatedUsers[month.monthOrder]),
            }}
            onMouseEnter={() => dispatch(setActiveMonth(month))}
            key={month.id}
          >
            {month.name}
          </li>
        ))}
    </ul>
  );
};
