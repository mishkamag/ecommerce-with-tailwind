import {
  arrayUnion,
  doc,
  updateDoc,
  setDoc,
  arrayRemove,
  query,
  collection,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase.config";

export const filterPdoructsBySearchValue = (searchValue, products) => {
  const updatedProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(searchValue.toLowerCase());
  });
  return updatedProducts;
};

export const getCategorysFromProducts = (products) => {
  const uniqueArray = products.filter((product, index, self) => {
    return (
      self.map((product) => product.category).indexOf(product.category) ===
      index
    );
  });
  return uniqueArray.map((obj) => obj.category);
};

export const fillterPromotions = (allPromotions, status, setPromotions) => {
  const filltered = allPromotions.filter(
    (promotion) => promotion.status === status
  );
  setPromotions(filltered);
};

export const modifyString = (string, limit = 18) => {
  const temp = [];
  if (string.length > limit) {
    string.split(" ").reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        temp.push(cur);
      }
      return acc + cur.length;
    }, 0);
    return `${temp.join(" ")} ...`;
  } else {
    return string;
  }
};

export const fetchData = async (database, setIsLoading, setAllProducts) => {
  setIsLoading(true);
  try {
    const q = query(collection(db, database));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const products = [];
      querySnapshot.forEach((doc) => {
        products.push(...doc.data().data);
      });
      setAllProducts(products);
      setIsLoading(false);
    });
  } catch (error) {
    console.log(error);
  }
};

export const addItem = async (
  collection,
  newItem,
  setSubmitting,
  resetForm,
  setIsAdded
) => {
  const newItemRef =
    collection === "ecommerce"
      ? doc(db, "ecommerce", newItem.category)
      : doc(db, "offers", newItem.status);
  try {
    await updateDoc(newItemRef, {
      data: arrayUnion(newItem),
    });
    console.log(newItem);
    setIsAdded(true);
    setSubmitting(false);
    resetForm();
  } catch (error) {
    if (error.message.toLowerCase().includes("no document to update")) {
      console.log("There is No category document");
      await setDoc(doc(db, "ecommerce", newItem.category), {
        data: [{ ...newItem }],
      });
      setIsAdded(true);
      setSubmitting(false);
      resetForm();
    }
    console.log(error.message);
  }
};

export const deleteItem = async (database, item) => {
  console.log("Delete function");
  const itemRef =
    database === "ecommerce"
      ? doc(db, "ecommerce", item.category)
      : doc(db, "offers", item.status);
  try {
    await updateDoc(itemRef, {
      data: arrayRemove(item),
    });
  } catch (error) {
    console.log(error);
  }
};
