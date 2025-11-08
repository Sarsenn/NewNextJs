import { Metadata } from "next";
import { Htag } from "./components"; // сам путь уменшение
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "My-top",
  };
}

export default function Home() {
  return (
    <>
      <Htag tag="h1">Текст</Htag>
    </>
  );
}
