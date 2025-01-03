import { NavLink } from "react-router";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import css from "./style.module.css";

export default function HeaderNavigation() {
  return (
    <Box sx={{ flexGrow: 1 }} className={css.marginNavs}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">
            <NavLink to={"/auth/login"}> Login </NavLink>
          </Button>
          <Button color="inherit">
            <NavLink to={"/auth/register"}> Register </NavLink>
          </Button>
          <Button color="inherit">
            <NavLink to={"/countries"}> countries </NavLink>
          </Button>
          <Button color="inherit">
            <NavLink to={"/countries-reports"}> reports </NavLink>
          </Button>
          <Button color="inherit">
            <NavLink to={"/settings"}> Settings </NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
