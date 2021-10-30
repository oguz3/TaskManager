import React from "react";
import Card from "./Components/Card";

function Index() {
  return (
    <div className="container">
      <div className="row">
        <div>
          <h2>Tasks</h2>
          <Card type="task" />
        </div>
        <div>
          <h2>On going</h2>
          <Card type="ongoing" />
        </div>
        <div>
          <h2>Done</h2>
          <Card type="done" />
        </div>
      </div>
    </div>
  );
}

export default Index;
