import React from "react";
import Link from "next/link";

function HomePage(props) {
  return (
    <>
      <h1 className="text-5xl mb-8 font-bold">Next.js Tutorial</h1>
      <Link className="btn btn-accent uppercase" href="/client">
        get started
      </Link>
    </>
  );
}

export default HomePage;
