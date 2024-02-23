import React from "react";
import Link from "next/link";

function AboutPage(props) {
  return (
    <div>
      <h1 className="text-7xl">About Page</h1>
      <Link className="text-2xl" href="/">
        Home page
      </Link>
    </div>
  );
}

export default AboutPage;
