import React from "react";
import ChainPills from "../chain-pills";
import "./style.scss";

const ChainAttributes = ({ chains = [] }) => {
  return (
    <div className="chain-attributes">
      <div className="chain-att-title">
        Chain Attributes
        <span className="title-count">({chains.length})</span>
      </div>
      <div className="chain-att-content mt-2">
        {chains.map((chain, i) => {
          if (typeof chain == "string") {
            const value = chain;
            return <ChainPills key={`chain-${i}`} first={value} />;
          } else {
            const key = Object.keys(chain);
            return (
              <ChainPills key={`chain-${i}`} first={chain[key]} second={key} />
            );
          }
        })}
      </div>
    </div>
  );
};

export default ChainAttributes;
