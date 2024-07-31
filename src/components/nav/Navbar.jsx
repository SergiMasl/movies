import LogoNav from "./LogoNav";
import SearchNav from "./SearchNav";
import SearchResalts from "./SearchResalts";

function Navbar() {
  return (
    <nav className="nav-bar">
      <LogoNav />
      <SearchNav />
      <SearchResalts />
    </nav>
  );
}

export default Navbar;
