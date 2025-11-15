import { JSX } from "react/jsx-runtime";
import styles from "./Sidebar.module.css"; // можно задавать классы
import { ISidebarProps } from "./Sidebar.props";
import cn from "classnames"; // подключаем библиотеку classnames

export const Sidebar = ({ ...props }: ISidebarProps): JSX.Element => {
  return <div {...props}>Sidebar</div>;
};
