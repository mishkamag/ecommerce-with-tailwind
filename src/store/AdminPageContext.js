import React, { useState } from "react";

const AdminPageContext = React.createContext({
  mainBoxSrc: "",
  selectedItem: {},
  imagesForDb: [],
  selectItem: () => {},
  changeBoxSrc: () => {},
  hanldeImageInputChange: () => {},
  resetSelectedImages: () => {},
});

export const AdminPageContextProvider = (props) => {
  const [mainBoxSrc, setmainBoxSrc] = useState("products");
  const [selectedItem, setSelectedItem] = useState({});
  const [imagesForDb, setImagesForDb] = useState([null, null, null, null]);

  const changeBoxSrc = (src) => {
    setmainBoxSrc(src);
  };

  const seletcItem = (item) => {
    setSelectedItem(item);
  };

  const hanldeImageInputChange = (item, index) => {
    setImagesForDb((prev) => {
      const updatedArray = [...prev];
      updatedArray[index] = item;
      return updatedArray;
    });
  };

  const resetSelectedImages = () => {
    setImagesForDb([null, null, null, null]);
  };

  const contextValue = {
    mainBoxSrc,
    selectedItem,
    selectItem: seletcItem,
    changeBoxSrc,
    imagesForDb,
    hanldeImageInputChange,
    resetSelectedImages,
  };

  return (
    <AdminPageContext.Provider value={contextValue}>
      {props.children}
    </AdminPageContext.Provider>
  );
};

export default AdminPageContext;
