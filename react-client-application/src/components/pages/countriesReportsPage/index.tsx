import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell } from "recharts";
import { CountryApi } from "../countriesPage";
import { Button } from "@mui/material";
const URL_ALL = "http://localhost:2200/countries-delay";
const data01 = [
  {
    name: "Group A",
    value: 400,
  },
  {
    name: "Group B",
    value: 300,
  },
  {
    name: "Group C",
    value: 300,
  },
  {
    name: "Group D",
    value: 200,
  },
  {
    name: "Group E",
    value: 278,
  },
  {
    name: "Group F",
    value: 189,
  },
];
const data02 = [
  {
    name: "Group A",
    value: 2400,
  },
  {
    name: "Group B",
    value: 4567,
  },
  {
    name: "Group C",
    value: 1398,
  },
  {
    name: "Group D",
    value: 9800,
  },
  {
    name: "Group E",
    value: 3908,
  },
  {
    name: "Group F",
    value: 4800,
  },
];

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 500 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

export default function CountriesReportsPage() {
  const countriesInitialState: Array<CountryApi> = [];
  const [countries, setCountries] = useState(countriesInitialState);
  const [size, setSize] = useState(0);

  // const result = calcPopulationPerRegion(countries);

  const result = useMemo(() => {
    return calcPopulationPerRegion(countries);
  }, [countries]);

  const adaptedData = adaptDataPieChart(result);
  useEffect(() => {
    async function getCountries() {
      try {
        const result = await axios.get<CountryApi[]>(URL_ALL);
        const { data } = result;

        setCountries(data?.data);
      } catch (error) {
        console.log(error);
        alert("Something went wrong!");
      }
    }
    getCountries();
  }, []);

  return (
    <>
      <Button
        onClick={() => {
          setSize(size + 10);
        }}
      >
        Click to resize {size}
      </Button>
      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div>
          <PopulationPieChart
            pieChartGlobalSettings={"resolution"}
            adaptedData={data}
          />
        </div>
        <div>
          <PopulationPieChart
            pieChartGlobalSettings={"resolution"}
            adaptedData={adaptedData}
          />
        </div>
      </div>
    </>
  );
}

function PopulationPieChart(props: {
  pieChartGlobalSettings: string;
  adaptedData: Array<{ name: string; value: number | any }>;
}) {
  console.log(props.adaptedData);
  return (
    <PieChart width={700} height={700}>
      <Pie
        dataKey={"value"}
        data={props.adaptedData}
        cx="50%"
        cy="50%"
        label={({ name, value }: { name: string; value: number }) => {
          return `${name}: ${value}`;
        }}
        outerRadius={200}
        fill="#8884d8"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}

function calcPopulationPerRegion(countries: Array<any>): number {
  console.log("===================================");
  console.log("calcPopulationPerRegion");
  console.log("===================================");
  return countries.reduce((regionsObj, currentCountry: any) => {
    const { region, population } = currentCountry;
    if (!region || !population) return regionsObj;
    if (regionsObj[region]) {
      return {
        ...regionsObj,
        [region]: regionsObj[region] + Number(population || 0),
      };
    } else {
      return { ...regionsObj, [region]: Number(population || 0) };
    }
  }, {});
}

const adaptDataPieChart = (obj: any) => {
  return Object.entries(obj).map(([key, value]) => {
    return { name: key, value };
  });
};

function convertNumberWithCommaDelimiter(n: string) {
  return Number(parseFloat(n).toFixed(0)).toLocaleString("en", {
    minimumFractionDigits: 0,
  });
}
