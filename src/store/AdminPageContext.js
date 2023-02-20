import React, { useState } from "react";

const AdminPageContext = React.createContext({
  mainBoxSrc: "",
  selectedItem: {},
  selectItem: () => {},
  changeBoxSrc: () => {},
});

export const AdminPageContextProvider = (props) => {
  const [mainBoxSrc, setmainBoxSrc] = useState("products");
  const [selectedItem, setSelectedItem] = useState({});

  const changeBoxSrc = (src) => {
    setmainBoxSrc(src);
  };

  const seletcItem = (item) => {
    setSelectedItem(item);
  };

  const contextValue = {
    mainBoxSrc: mainBoxSrc,
    selectedItem: selectedItem,
    selectItem: seletcItem,
    changeBoxSrc: changeBoxSrc,
  };

  return (
    <AdminPageContext.Provider value={contextValue}>
      {props.children}
    </AdminPageContext.Provider>
  );
};

export default AdminPageContext;
