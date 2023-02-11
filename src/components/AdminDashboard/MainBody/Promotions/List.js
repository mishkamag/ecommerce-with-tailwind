import React, { useEffect, useState } from "react";
import { fillterPromotions } from "../../../../Helpers/functions";
import Active from "./Active";

import ListLayout from "./ListLayout";

const List = ({ allPromotions }) => {
  const [activePromotions, setActivePromotions] = useState([]);
  useEffect(() => {
    if (allPromotions) {
      fillterPromotions(allPromotions, "active", setActivePromotions);
    }
  }, [allPromotions]);

  return (
    <div className="h-[90%] w-full rounded-b-xl px-4 py-2">
      <ListLayout title="Active">
        <Active activePromotions={activePromotions} />
      </ListLayout>
    </div>
  );
};

export default List;
