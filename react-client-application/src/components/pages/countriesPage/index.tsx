import { useEffect, useState } from "react";
import axios from "axios";
import data from "./index.json";
import SingleCountry from "./singleCountry";
import css from "./index.module.css";
import Header from "../../ui/header";
import { CircularProgress, Skeleton, TextField } from "@mui/material";

const URL_ALL = "http://localhost:2200/countries-delay";
const URL_NAME = "http://localhost:2200/countries-delay/name/";

export type CountryApi = (typeof data)[0];
export default function CountriesPage() {
  const [countries, setCountries] = useState<CountryApi[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    async function getCountries() {
      try {
        setIsLoading(true);
        const result = await axios.get<CountryApi[]>(URL_ALL);
        const { data } = result;
        setCountries(data?.data);
      } catch (error) {
        console.log(error);
        alert("Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    }
    getCountries();
  }, []);

  return (
    <div>
      <div className={css.headerCenter}>
        <Header title={"Countries"} color={"Blue"} />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Country Name"
          variant="outlined"
        />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {isLoading ? <DummySkeletonCountries /> : null}
        {countries.map((c) => {
          return <SingleCountry {...c} />;
        })}
      </div>
    </div>
  );
}

function DummySkeletonCountries() {
  const skeletons = [];
  for (let index = 0; index < 8; index++) {
    skeletons.push(<Skeleton variant="rectangular" width={300} height={500} />);
  }
  return skeletons;
}
