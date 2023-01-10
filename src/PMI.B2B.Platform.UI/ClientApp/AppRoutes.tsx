import Home from "./components/Home";
import Counter from "./components/Counter";
import FetchData from "./components/FetchData";
import * as React from "react";

const AppRoutes: { index?: boolean, element: any, path?: string }[] = [
    {
        index: true,
        element: <Home/>
    },
    {
        path: '/counter',
        element: <Counter/>
    },
    {
        path: '/fetch-data',
        element: <FetchData/>
    }
];

export default AppRoutes;
