import React from "react";
import { createRoot, Root } from "react-dom/client";
import { Header } from "./App/Header";
import { Body } from "./App/Body";
import * as style from "./style.css";
import "./theme.css";

const id = "root";
const rootElement: HTMLElement | null = document.getElementById(id);
if (rootElement === null) {
  throw new Error(`The root element "${id}" is not found`);
}
const root: Root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <div className={style.app}>
      <Header />
      <Body />
    </div>
  </React.StrictMode>,
);
