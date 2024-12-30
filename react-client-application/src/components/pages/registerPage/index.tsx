import axios from "axios";
import Swal from "sweetalert2";
import css from "./index.module.css";
import Header from "../../ui/header";
import { Button, CircularProgress, TextField } from "@mui/material";
import { ChangeEvent, useRef, useState } from "react";
import { useNavigate } from "react-router";

const REGISTER_URL = "http://localhost:2200/auth/register";

export default function RegistrationPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function registerAction() {
    try {
      setIsLoading(true);
      await axios.post(REGISTER_URL, {
        userName: userName,
        password: password,
      });
      Swal.fire({
        title: "Success!",
        icon: "success",
      }).then(() => {
        navigate("/auth/login");
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
      <div className={css.registerContainer}>
        <div className={css.headerCenter}>
          <Header title={"Registration"} color={"Blue"} />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="phone"
            variant="outlined"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setPhone(event.target.value);
            }}
            value={phone}
          />
        </div>
        <div>
          <TextField
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setUserName(event.target.value);
            }}
            id="outlined-basic"
            label="username"
            variant="outlined"
            value={userName}
          />
        </div>
        <div>
          <TextField
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setPassword(event.target.value);
            }}
            id="outlined-basic"
            label="password"
            variant="outlined"
            value={password}
          />
        </div>
        <div>
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
      </div>
    </div>
  );
}
