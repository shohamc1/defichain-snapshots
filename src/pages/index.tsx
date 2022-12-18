import * as React from "react";
import type { HeadFC } from "gatsby";

import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Index from "../components/Index";

const IndexPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
