import React from "react";
import { Link } from "@reach/router";

export default function NavBar() {
  return (
    <nav>
      {" "}
      <button>
        <Link to="/home"> Home </Link>
      </button>
      <button>
        <Link to="/articles"> Articles </Link>
      </button>
      <button>
        <Link to="/topics"> Topics </Link>
      </button>
    </nav>
  );
}
