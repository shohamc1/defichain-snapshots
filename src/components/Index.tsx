import * as React from "react";
import type { HeadFC } from "gatsby";

import useUrlState from "@ahooksjs/use-url-state";

import Header from "../components/Header";

const Index = () => {
  const [state, setState] = useUrlState({ network: "mainnet" });

  return (
    <div className="flex bg-zinc-50 min-h-screen">
      <Header state={state} setState={setState} />
      <main className="mt-auto mb-96">{state.network}</main>
    </div>
  );
};

export default Index;

export const Head: HeadFC = () => <title>Home Page</title>;
