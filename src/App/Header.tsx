import { JSX } from "react";
import * as style from "./style.css";

export function Header(): JSX.Element {
  return <h1 className={style.header}>My React SPA Baseline</h1>;
}
