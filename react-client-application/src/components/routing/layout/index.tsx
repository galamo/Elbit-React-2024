import Routing from "..";

export function Layout(): JSX.Element {
  return (
    <div className="Layout">
      <header>
        <h1> React Client App </h1>
      </header>
      <main>
        <Routing />
      </main>
      <footer>
        <span> footer </span>
      </footer>
    </div>
  );
}
