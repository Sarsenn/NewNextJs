import { JSX } from "react/jsx-runtime";
import { IButtonProps } from "./Button.props";
import styles from "./Button.module.css"; // можно задавать классы
import ArrowIcon from "./Arrow.svg";
import cn from "classnames"; // подключаем библиотеку classnames

export const Button = ({
  appearance,
  children,
  className,
  arrow = "none",
  ...props // спредим остальные пропсы
}: IButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == "primary", // здесь в скобках идет вычесление если appearance == 'primary'
        [styles.ghost]: appearance == "ghost",
      })}
      {...props} // здесь появтся остальные методы с html элемента
    >
      {children}
      {arrow !== "none" && (
        <span className={cn(styles.arrow, { [styles.down]: arrow == "down" })}>
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
