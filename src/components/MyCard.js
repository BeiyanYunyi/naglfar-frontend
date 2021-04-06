import { Card } from "@material-ui/core";
import React, { useState } from "react";

const MyCard = (prop) => {
  const [over, setOver] = useState(false);
  return (
    <Card
      style={{ width: "100%", height: "100%" }}
      onMouseOver={() => {
        setOver(true);
      }}
      onMouseOut={() => {
        setOver(false);
      }}
      raised={over}
    >
      {prop.children}
    </Card>
  );
};

export default MyCard;
