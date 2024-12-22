import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CountryApi } from "..";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function SingleCountry(props: CountryApi) {
  return (
    <Card style={{ width: "300px", height: "500px" }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          {props?.name?.common}
        </Typography>
        <Typography variant="h5" component="div">
          {props?.name?.official}
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          {props?.area}
        </Typography>
        <Typography variant="body2">
          {props?.cca3}
          <br />
          {props?.population}
        </Typography>
        <img src={props?.flags?.png} height={200} />
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
