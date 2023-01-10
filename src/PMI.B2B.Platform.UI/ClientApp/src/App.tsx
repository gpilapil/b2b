import React from 'react';
import './custom.scss';
import Layout from "./components/Layout";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Counter from "./components/Counter";
import FetchData from "./components/FetchData";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/counter'} element={<Counter />} />
        <Route path={'/fetch-data'} element={<FetchData />} />
      </Routes>
    </Layout>
  );
}
