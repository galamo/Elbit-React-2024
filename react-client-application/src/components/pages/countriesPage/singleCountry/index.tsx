import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CountryApi } from "..";
import { LikeSection } from "../../../ui/card-app";
import { NavLink, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useImageLoaded } from "../../../../hooks/use-image-loaded";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

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

