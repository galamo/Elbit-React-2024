import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CountryApi } from "..";
import { LikeSection } from "../../../ui/card-app";
import { NavLink, useNavigate } from "react-router";
import { useContext } from "react";
import { useImageLoaded } from "../../../../hooks/use-image-loaded";
import { AppDateContext } from "../../../../App";
import { format } from "date-fns";
import { SettingsContext } from "../../../../context";

export default function SingleCountry(props: CountryApi) {
  const navigate = useNavigate();
  let imgurl = props?.flags?.png;
  if (props?.name?.common?.toLowerCase() === "palestine") {
    imgurl = "broken";
  }

  return (
    <Card style={{ width: "300px", height: "500px" }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          {props?.name?.common}
        </Typography>

        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          <AppDate currentDate={new Date().toISOString()} />
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
        <ImageElb imageUrl={imgurl} />
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            navigate(`/countries/${props?.name?.common}`);
          }}
        >
          useNavigate
        </Button>
        <Button
          size="small"
          onClick={() => {
            console.log("You clicked", props?.name?.common);
          }}
        >
          <NavLink to={`/countries/${props?.name?.common}`}> NavLink</NavLink>
        </Button>
        <LikeSection />
      </CardActions>
    </Card>
  );
}

function ImageElb(props: { imageUrl: string }) {
  const [currentImage] = useImageLoaded(props.imageUrl);
  return <img src={currentImage} height={200} />;
}

function AppDate(props: { currentDate: string }) {
  const context = useContext(AppDateContext);
  const settingsContext = useContext(SettingsContext);
  console.log(settingsContext);
  return (
    <div>
      <h2>
        DateTime:{settingsContext.isLocalTime.toString()}
        <br />
        {settingsContext.isLocalTime
          ? new Date(props.currentDate).toISOString()
          : new Date(props.currentDate).toString()}
      </h2>
      <h2> last updated at: {format(props.currentDate, context.format)}</h2>
    </div>
  );
}
