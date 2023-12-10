import { FC } from "react";

import style from './Container.module.scss';
import { ContainerProps } from "./ContainerProps";

export const Container:FC<ContainerProps> = ({ children }) => {
  return (
    <div className={style.container}>{children}</div>
  );
}
