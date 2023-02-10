import React from "react";
import Active from "./Active";

import ListLayout from "./ListLayout";

const List = () => {
  return (
    <div className="h-[90%] w-full rounded-b-xl px-4 py-2">
      <ListLayout title="Active">
        <Active />
      </ListLayout>
    </div>
  );
};

export default List;
