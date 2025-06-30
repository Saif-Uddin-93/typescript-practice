import React from 'react';
import "./style.css"
import { Link, NavLink } from "react-router-dom"

export function Header() {
  const test = "test";

  return (
    <header>
      this is the header. <br />
      {test}
      <br />
      <Link to="/">test link</Link>
    </header>
  );
}

