import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import { Button, Typography, Box, Avatar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  if (!user || !user.name) return null;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        padding: "8px 16px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: 2,
      }}
    >
      <Avatar sx={{ bgcolor: "#1976d2" }}>
        {user.name.charAt(0).toUpperCase()}
      </Avatar>
      <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
        Вітаю, {user.name}!
      </Typography>
      <Button
        variant="outlined"
        color="error"
        size="small"
        startIcon={<LogoutIcon />}
        onClick={handleLogOut}
      >
        Вийти
      </Button>
    </Box>
  );
}
