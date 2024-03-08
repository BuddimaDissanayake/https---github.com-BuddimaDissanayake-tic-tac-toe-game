import React from "react";


const Players = ({ users, selectedUser }) => {
  

    

    return(
        <div>
            <div className="user-container">
                {users.map((user) => (
                    <div className={`user ${selectedUser.id == user.id ? 'select-user' : ''}`}>
                        <p className="user-name">{user.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Players;