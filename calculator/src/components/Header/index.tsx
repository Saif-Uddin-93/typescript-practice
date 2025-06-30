import "./style.css"
import { Link, NavLink } from "react-router-dom"

export function Header () {
  console.log("Header rendering");
  const test = "test";

  return (
    <header style={{ backgroundColor: "lightblue", padding: "10px" }}>
      this is the header.
      <br />
      {test}
      <br />
      <Link to="/">test link</Link>
    </header>
  )
};

