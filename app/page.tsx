import { Metadata } from "next";
import { Button, Htag, Ptag, Tag } from "./components"; // сам путь уменшение
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "My-top",
  };
}

export default function Home() {
  return (
    <>
      <Htag tag="h1">Текст</Htag>
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
    </>
  );
}
