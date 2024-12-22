import { Outlet, Route, Routes, RouteProps, Link } from "react-router";
import "./App.css";
import Header from "./components/ui/header";

const routesApp: RouteProps[] = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "*", element: <NotFound /> },
];

function App() {
  return (
    <>
      <Header title={"App header"} color={"red"} />
      <Link to="/">home</Link>
      <Link to="/about">About</Link>
      <Link to="/countries/search">countries</Link>
      <Routes>
        {routesApp.map((r: RouteProps) => {
          return <Route {...r} />;
        })}
        <Route path="countries" element={<Countries />}>
          {/* <Route element={<Countries />} /> */}
          <Route index element={<Search />} />
          <Route path=":stats" element={<Stats />} />
        </Route>
      </Routes>
      <Outlet />
    </>
  );
}

function Home() {
  return <div> Home</div>;
}

function About() {
  return <div> About</div>;
}

function Countries() {
  return (
    <div>
      <h1>Countries</h1>
      <div>
        <Link to="/countries/search">search</Link>
      </div>
      <div>
        <Link to="/countries/param1">go to about</Link>
      </div>
      {/* will either be <Home/> or <Settings/> */}
      <Outlet />
    </div>
  );
}

function Stats() {
  return <div> Stats</div>;
}
function Search() {
  return (
    <div>
      <h2> Search component </h2>
      <div>
        <Link to="/about">go to about</Link>
      </div>
    </div>
  );
}
function NotFound() {
  return <h1> NOT FOUND</h1>;
}

export default App;
