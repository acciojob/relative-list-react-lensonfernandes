import React from "react";

const App = () => {
  const fam = [
    { id: "relativeListItem2", name: "Lee" },
    { id: "relativeListItem1", name: "Jack" },
    { id: "relativeListItem3", name: "Sparrow" },
  ];

  return (
    <div id="main">
      <ol id="relativeList">
        <li id="relativeListItem1">Ben</li>
        <li id="relativeListItem2">John</li>
      </ol>
    </div>
  );
};

export default App;
