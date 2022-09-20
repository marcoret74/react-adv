import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element

interface IRoute {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
};

const LazyLayout = lazy(() => import('../01-lazyload/layout/LazyLayout'));

export const routes: IRoute[] = [
    {
        to: '/lazyload/*',
        path: '/lazyload/',
        Component: LazyLayout,
        name: 'LazyLayout - Dashboard'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: NoLazy,
        name: 'NoLazy'
    }
]
