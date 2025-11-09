import { JSX } from "react/jsx-runtime";
import styles from "./Ptag.module.css"; // можно задавать классы
import { IPtagProps } from "./Ptag.props";
import cn from "classnames"; // подключаем библиотеку classnames

export const Ptag = ({
  size = "m",
  children,
  className,
  ...props
}: IPtagProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.s]: size == "s",
        [styles.m]: size == "m",
        [styles.l]: size == "l",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
