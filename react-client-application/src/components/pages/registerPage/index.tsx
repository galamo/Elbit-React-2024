import axios from "axios";
import Swal from "sweetalert2";
import css from "./index.module.css";
import Header from "../../ui/header";
import { Button, CircularProgress, TextField } from "@mui/material";
import { ChangeEvent, useRef, useState } from "react";

const REGISTER_URL = "http://localhost:2200/auth/register";

export default function RegistrationPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const userNameRef = useRef<HTMLInputElement>(null);

  console.log("RegistrationPage render...");
  async function registerAction() {
    try {
      setIsLoading(true);
      console.log("useRef -> Value in phone:", userNameRef?.current?.value);
      const result = await axios.post(REGISTER_URL, {
        userName: userName,
        password: password,
      });
      const { data } = result;
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
    <div>
      <div className={css.headerCenter}>
        <Header title={"Registration"} color={"Blue"} />
      </div>
      <div>
        phone{" "}
        <TextField
          id="outlined-basic"
          label="phone"
          variant="outlined"
          inputRef={userNameRef}
          // ref={userNameRef}
        />
        <TextField
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setUserName(event.target.value);
          }}
          id="outlined-basic"
          label="username"
          variant="outlined"
        />
        <TextField
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setPassword(event.target.value);
          }}
          id="outlined-basic"
          label="password"
          variant="outlined"
        />
      </div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div>
          <Button
            onClick={() => {
              registerAction();
            }}
          >
            Register
          </Button>
        </div>
      )}
    </div>
  );
}
