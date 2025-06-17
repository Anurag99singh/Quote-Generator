import React from "react";

function Quotes({ dataa, random }) {
  let { quotes, total, skip, limit } = dataa;
  const matchedQuote = quotes?.find((ele) => ele.id === random)?.quote;
  const author = quotes?.find((ele) => ele.id === random)?.author;
  return (
    <div className="quote">
      <h3>{matchedQuote}</h3>
      <h4>{author && `Author: ${author}`}</h4>
    </div>
  );
}

export default Quotes;
