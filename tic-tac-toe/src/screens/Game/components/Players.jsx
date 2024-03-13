import React from "react";

const Players = ({ users, selectedUser, Image }) => {
  return (
    <div>
      <div className="user-container">
        {users.map((user) => (
          <div
            className={`user ${
              selectedUser.id === user.id ? "select-user" : ""
            }`}
          >
            <img className="sign" src={user.sign} alt="sign" />
            <p className="user-name">{user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Players;
