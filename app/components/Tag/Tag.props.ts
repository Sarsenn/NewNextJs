import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ITagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  color: "ghost" | "red" | "grey" | "green" | "primary";
  href?: string;
  size?: "s" | "m";
}
