import { Button, TextField } from "@mui/material";
import css from "./style.module.css";
import Header from "../../ui/header";
export default function LoginPage() {
  return (
    <div className={css.container}>
      <div className={css.loginContainer}>
        <div>
          <Header title={"Login"} color={"Blue"} />
        </div>
        <div>
          <TextField id="outlined-basic" label="User" variant="outlined" />
        </div>
        <div>
          <TextField id="outlined-basic" label="password" variant="outlined" />
        </div>
        <div>
          <Button variant="text">login</Button>
        </div>
      </div>
    </div>
  );
}
