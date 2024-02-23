import React from "react";
import Link from "next/link";
import Image from "next/image";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

async function getSingleDrink(id) {
  const response = await fetch(`${url}${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch a drink...");
  }
  return response.json();
}

async function SingleDrinkPage({ params }) {
  const data = await getSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;
  console.log(title, imgSrc);
  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to drink
      </Link>
      <Image
        src={imgSrc}
        alt={title}
        width={300}
        height={300}
        className="rounded-lg shadow-lg mb-4"
        priority
      />
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
}

export default SingleDrinkPage;
