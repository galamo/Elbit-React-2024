import { Button, TextField } from "@mui/material";

export default function LoginPage() {
  return (
    <div>
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
  );
}
