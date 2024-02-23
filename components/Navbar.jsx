import React from "react";
import Link from "next/link";
import ThemeSwap from "@/components/ThemeSwap";

const links = [
  { href: "/client", label: "client" },
  { href: "/drinks", label: "drinks" },
  { href: "/prisma-example", label: "prisma" },
  { href: "/tasks", label: "tasks" },
];

function Navbar(props) {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
        <ThemeSwap />
        <Link href="/" className="btn btn-primary uppercase">
          Next.js
        </Link>
        <ul className="menu menu-horizontal md:ml-8">
          {links.map(({ href, label }) => (
            <li key={`${href}`}>
              <Link href={href} className="capitalize">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
