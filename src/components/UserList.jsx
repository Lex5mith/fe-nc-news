import { useEffect, useState, useContext } from "react";
import { getUsers } from "../api";
import { UserContext } from "../contexts/User";
import { UserCard } from "./UserCard";

export const UserList = () => {
  const [availableUsers, setAvailableUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
 

  useEffect(() => {
    console.log("use effect running");
    setIsLoading(true);
    getUsers()
      .then(({ data }) => {
        setAvailableUsers(data.users);
        setIsLoading(false);
        setError(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (availableUsers) {
    return availableUsers.map((user) => <UserCard user={user} key={user.username} />);
  }
};
