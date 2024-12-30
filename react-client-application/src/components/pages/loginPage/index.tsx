import { Button, TextField } from "@mui/material";
import css from "./style.module.css";
import Swal from "sweetalert2";
import axios from "axios";
import Header from "../../ui/header";
import { useRef, useState } from "react";
const LOGIN_URL = "http://localhost:2200/auth/login";

export default function LoginPage() {
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function loginAction() {
    try {
      setIsLoading(true);
      console.log("useRef -> Value in phone:", userNameRef?.current?.value);
      const result = await axios.post(LOGIN_URL, {
        userName: userNameRef?.current?.value,
        password: passwordRef?.current?.value,
      });
      console.log(result);
      Swal.fire({
        title: "Success!",
        icon: "success",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={css.container}>
      <div className={css.loginContainer}>
        <div>
          <Header title={"Login"} color={"Blue"} />
        </div>
        <div>
          <TextField
            inputRef={userNameRef}
            id="outlined-basic"
            label="User"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            inputRef={passwordRef}
            id="outlined-basic"
            label="password"
            variant="outlined"
          />
        </div>
        <div>
          {isLoading ? <h4> Trying to login... </h4> : null}
          <Button onClick={loginAction} variant="text">
            login
          </Button>
        </div>
      </div>
    </div>
  );
}
