import React from "react";
import Logo from "../images/defichain.png";

const Header = ({
  state,
  setState,
}: {
  state: Partial<any>;
  setState: (s: React.SetStateAction<Partial<{ network: any }>>) => void;
}) => {
  return (
    <div className="fixed top-0 flex py-2 px-4 bg-white w-full">
      <img src={Logo} className="max-h-12" />
      <span className="pl-2 mt-auto mb-1 text-xl">Snapshot Downloader</span>

      <div className="pl-4 mt-auto mb-1 space-x-2">
        <span
          className={`cursor-pointer text-lg ${
            state.network == "mainnet"
              ? "text-black font-bold"
              : "text-gray-700"
          }`}
          onClick={() => setState({ network: "mainnet" })}
        >
          Mainnet
        </span>
        <span
          className={`cursor-pointer text-lg ${
            state.network == "testnet"
              ? "text-black font-bold"
              : "text-gray-700"
          }`}
          onClick={() => setState({ network: "testnet" })}
        >
          Testnet
        </span>
      </div>
    </div>
  );
};

export default Header;
