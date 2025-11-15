"use client";
import { JSX } from "react/jsx-runtime";
import styles from "./Rating.module.css"; // можно задавать классы
import cn from "classnames"; // подключаем библиотеку classnames
import StarIcon from "./rating.svg";
import { IRatingProps } from "./Rating.props";
import { useEffect, useState, KeyboardEvent } from "react";

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: IRatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          onMouseEnter={() => changeDisplay(i + 1)} // получает индекс текущего элемента
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}
        >
          <StarIcon
            className={cn(styles.star, {
              [styles.filled]: i < currentRating,
              [styles.editable]: isEditable,
            })}
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) =>
              isEditable && handleSpace(i + 1, e)
            }
          />
        </span>
      );
    });
    setRatingArray(updateArray);
  };

  const changeDisplay = (i: number) => {
    //перерисовывает с этого элемента
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code !== "Space" || !setRating) {
      return;
    }

    setRating(i);
  };

  const onClick = (i: number) => {
    //перерисовывает с этого элемента
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
