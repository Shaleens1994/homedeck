import React from "react";
import construction from '../assets/construction.gif';

// this page to show the error when no match is found
const NoMatch = () => {
  return (
    <div>
    <h1>404 Page Not Found!</h1>
    <h1>
      <span role="img" aria-label="Face With Rolling Eyes Emoji">
      <img src={construction} alt="loading" />
      </span>
    </h1>
</div>

    );
};
