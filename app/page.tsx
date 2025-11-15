"use client";
import { Metadata } from "next";
import { Button, Htag, Ptag, Tag } from "./components"; // сам путь уменшение
import { useEffect, useState } from "react";
import { Rating } from "./components";
import { withLayout } from "./layout/Layout";
/* export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "My-top",
  };
} */

function Home() {
  const [rating, setRating] = useState<number>(2);
  return (
    <>
      <Htag tag="h1">Hello world! </Htag>
      <Button appearance="primary" arrow="right">
        Button
      </Button>
      <Button appearance="ghost" arrow="down">
        Button
      </Button>
      <Ptag size="l">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ut animi
        tempora, sapiente nemo tenetur vero.
      </Ptag>
      <Tag color="red" size="m">
        HH
      </Tag>
      <Tag color="ghost" size="m">
        HH
      </Tag>
      <Tag color="primary" size="s">
        HH
      </Tag>
      <Tag color="green" size="s">
        HH
      </Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
    </>
  );
}

export default withLayout(Home);
