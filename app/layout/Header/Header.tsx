import { JSX } from "react/jsx-runtime";
import styles from "./Header.module.css"; // можно задавать классы
import { IHeaderProps } from "./Header.props";
import cn from "classnames"; // подключаем библиотеку classnames

export const Header = ({ ...props }: IHeaderProps): JSX.Element => {
  return <div {...props}>Header</div>;
};
