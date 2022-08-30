import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";

const Beans = React.lazy(() => import("./pages/Beans/Beans"));
const Africa = React.lazy(() => import("./pages/Beans/Africa"));
const America = React.lazy(() => import("./pages/Beans/America"));
const Asia = React.lazy(() => import("./pages/Beans/Asia"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const GeishaDetail = React.lazy(() => import("./pages/Beans/GeishaDetail"));
const AromaticDetail = React.lazy(() => import("./pages/Beans/AromaticDetail"));
const EYunnanDetail = React.lazy(() => import("./pages/Beans/EYunnanDetail"));
const ColombiaDetail = React.lazy(() => import("./pages/Beans/ColombiaDetail"));
const EthiopiaDetail = React.lazy(() => import("./pages/Beans/EthiopiaDetail"));
const SumatraDetail = React.lazy(() => import("./pages/Beans/SumatraDetail"));

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Suspense fallback={<LoadingPage></LoadingPage>}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App></App>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>

          <Route path="/beans" element={<Beans></Beans>}></Route>
          <Route path="beans/africa" element={<Africa></Africa>}></Route>
          <Route path="beans/america" element={<America></America>}></Route>
          <Route path="beans/asia" element={<Asia></Asia>}></Route>
          <Route
            path="beans/geisha"
            element={<GeishaDetail></GeishaDetail>}
          ></Route>
          <Route
            path="beans/aromatic"
            element={<AromaticDetail></AromaticDetail>}
          ></Route>
          <Route
            path="beans/eyunnan"
            element={<EYunnanDetail></EYunnanDetail>}
          ></Route>
          <Route
            path="beans/colombia"
            element={<ColombiaDetail></ColombiaDetail>}
          ></Route>
          <Route
            path="beans/sumatra"
            element={<SumatraDetail></SumatraDetail>}
          ></Route>
          <Route
            path="beans/ethiopia"
            element={<EthiopiaDetail></EthiopiaDetail>}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
