import HeaderNavigation from "../header";
import Routing from "../routing";

export function Layout(): JSX.Element {
  return (
    <div className="Layout">
      <header>
        <h1> React Client App </h1>
        <HeaderNavigation />
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
