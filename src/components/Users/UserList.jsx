import React, { useState } from "react";
import data from "../../static.json";

const { users } = data;

export default function UserList() {
  const [userName, setUserName] = useState("Mark");
  const userNameGroup = userNameGroup.filter((a) => a.users === users);
  const [usersIndex, setUsersIndex] = useState(1);

  return (
    <>
      <ul className="user items-list">
        {/* {usersNameGroups.map((a, i) => (
          <li key={a.id} className={i === usersIndex ? "selected" : null}>
            <button className="users-btn" onClick={() => setUsersIndex(i)}>
              {a.name}
            </button>
          </li>
        ))} */}
      </ul>
    </>
  );
}
