import styled from "styled-components";

const Card = styled.div`
  background-color: blue;
  color: white;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;

  &:hover {
    background-color: darkblue;
  }
`;

const Image = styled.img`
  width: 400px;
  height: 300px;
`;

export default function CardApp() {
  return (
    <Card>
      <h1> Header </h1>
      <h3> Description </h3>
      <Image
        src={
          "https://www.libertytravel.com/sites/default/files/styles/full_size/public/LT540255783-destination-pg-widget-a.jpg?itok=9vuxjp4y"
        }
      />
    </Card>
  );
}
