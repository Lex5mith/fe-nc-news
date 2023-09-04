import { useContext } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { lightTheme } from "../themes/theme";
import { UserContext } from "../contexts/User";
import Button from "@mui/material/Button";

export const UserCard = ({ user }) => {
  const { setUser } = useContext(UserContext);
  const handleLoginClick = () => {
    setUser(user);
  };
  return (
    <Card sx={{ minWidth: "20em", marginTop: "2em", boxShadow: "10" }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: lightTheme.palette.secondary.main }}
            aria-label="user"
            object-fit="contain"
          >
            <img src={user.avatar_url} alt="user_avatar_url" />
          </Avatar>
        }
        action={
          <Button variant="outlined" onClick={handleLoginClick}>
            Login
          </Button>
        }
        title={user.name}
        subheader={user.username}
      />
    </Card>
  );
};
