import { useEffect, useState, useContext } from "react";
import { getUsers } from "../api";
import { UserContext } from "../contexts/User";

export const LogInDetails = () => {
  const [users, setUsers] = useState([]);
  const [myUser, setMyUser] = useState("");
  const [isError, setIsError] = useState(false);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    getUsers().then(({ data }) => {
      const { users } = data;
      setUsers(users);
      console.log(users, "<<<< USERS!!!!!!");
    });
  }, []);

  console.log(myUser);
  const handleUsernameSubmit = () => {
    const filteredUsers = users.filter((user) => {
      return user.username === myUser;
    });

    if (filteredUsers.length) {
      setUser([filteredUsers[0].username, filteredUsers[0].avatar_url]);
      setIsError(false);
    } else {
      setIsError("Oh no! User doesn't exist, please sign up");
      setUser("");
    }
  };

  return (
    <div>
      <label>
        Username:
        <input
          type="text"
          value={myUser}
          onChange={(event) => {
            setMyUser(event.target.value);
          }}
        />
        <button onClick={handleUsernameSubmit}>Login</button>
      </label>
      {isError}
    </div>
  );
};