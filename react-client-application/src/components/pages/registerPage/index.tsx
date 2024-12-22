import axios from "axios";

import css from "./index.module.css";
import Header from "../../ui/header";
import { Button, CircularProgress, Skeleton, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";

const REGISTER_URL = "http://localhost:2200/auth/register";

export default function RegistrationPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function registerAction() {
    try {
      setIsLoading(true);
      const result = await axios.post(REGISTER_URL, {
        userName: userName,
        password: password,
      });
      const { data } = result;
      console.log(data);
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
            Login
          </Button>
        </div>
      )}
    </div>
  );
}
