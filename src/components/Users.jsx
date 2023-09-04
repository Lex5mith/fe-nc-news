import { useEffect, useState, useContext } from "react";
import { getUsers } from "../api";
import { UserContext } from "../contexts/User";

const Users = () => {
  const [users, setUsers] = useState([]);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    getUsers().then(({ data }) => {
      const { users } = data;
      setUsers(users);
      console.log(users, "<<<< USERS!!!!!!");
    });
  }, []);

  return (
    <div>
      <section className="user">
        {users.map((user) => {
          return (
            <div
              key={user.username}
              className="user_card"
              onClick={() => {
                setUser(user.username);
              }}
            >
              <img
                src={user.avatar_url}
                alt={user.username}
                className="user_avatar"
              />
              <p className="user_text">{user.username}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Users;
