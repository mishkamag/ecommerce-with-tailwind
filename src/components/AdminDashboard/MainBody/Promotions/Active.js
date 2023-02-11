import React from "react";
import ListItem from "./ListItem";
import uniqid from "uniqid";

const Active = ({ activePromotions }) => {
  return (
    <>
      {activePromotions.map((promotion) => (
        <ListItem key={uniqid()} promotion={promotion} />
      ))}
    </>
  );
};

export default Active;
