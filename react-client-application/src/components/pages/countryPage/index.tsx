import { useParams } from "react-router";

export default function CountryPage() {
  const params = useParams();
  console.log(params);
    
  return (
    <div>
      <h1>Country Page: {params.code}</h1>
    </div>
  );
}
