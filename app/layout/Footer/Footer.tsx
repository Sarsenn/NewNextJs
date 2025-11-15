import { JSX } from "react/jsx-runtime";
import styles from "./Footer.module.css"; // можно задавать классы
import { IFooterProps } from "./Footer.props";
import cn from "classnames"; // подключаем библиотеку classnames

export const Footer = ({ ...props }: IFooterProps): JSX.Element => {
  return <div {...props}>Footer</div>;
};
