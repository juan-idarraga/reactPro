import { LazyExoticComponent, lazy } from "react";
import { Lazypage1, Lazypage2, Lazypage3 } from "../lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const Lazy1 = lazy(() => import("../lazyload/pages/Lazypage1"));
const Lazy2 = lazy(() => import("../lazyload/pages/Lazypage2"));
const Lazy3 = lazy(() => import("../lazyload/pages/Lazypage3"));

export const routes: Route[] = [
  {
    to: "/lazy1",
    path: "/lazy1",
    Component: Lazy1,
    name: "Lazy Page 1",
  },
  {
    to: "/lazy2",
    path: "/lazy2",
    Component: Lazy2,
    name: "Lazy Page 2",
  },
  {
    to: "/lazy3",
    path: "/lazy3",
    Component: Lazy3,
    name: "Lazy Page 3",
  },
];
