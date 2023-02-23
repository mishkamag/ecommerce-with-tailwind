import {
  arrayUnion,
  doc,
  updateDoc,
  arrayRemove,
  query,
  collection,
  onSnapshot,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../firebase.config";

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

export const fetchData = async (database, setAllProducts, setIsLoading) => {
  setIsLoading && setIsLoading(true);
  try {
    const q = query(collection(db, database));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const products = [];
      querySnapshot.forEach((doc) => {
        products.push(...doc.data().data);
      });
      setAllProducts(products);
      setIsLoading && setIsLoading(false);
    });
  } catch (error) {
    console.log(error);
  }
};

export const AddNewItemToDb = async (
  imagesArray,
  values,
  setSubmitting,
  resetForm,
  setIsAdded,
  setError
) => {
  return Promise.all(
    imagesArray.map((image, index) => {
      if (image) {
        const storageRef = ref(storage, `images/${values.image[index]}`);
        return uploadBytes(storageRef, image).then((snapshot) => {
          return getDownloadURL(storageRef).catch((error) => {
            console.log(error);
          });
        });
      }
      return null;
    })
  ).then(async (urls) => {
    const updatedNewItem = { ...values, image: urls };
    const newItemRef = doc(db, "ecommerce", updatedNewItem.category);

    await updateDoc(newItemRef, {
      data: arrayUnion(updatedNewItem),
    })
      .then(() => {
        setIsAdded(true);
        setSubmitting(false);
        resetForm();
      })
      .catch((error) => setError(error));
  });
};

export const AddNewPromotionToDb = async (
  updatedItem,
  setSubmitting,
  resetForm,
  setIsAdded,
  setError
) => {
  const newItemRef = doc(db, "offers", updatedItem.status);
  await updateDoc(newItemRef, {
    data: arrayUnion(updatedItem),
  })
    .then(() => {
      setIsAdded(true);
      setSubmitting(false);
      resetForm();
    })
    .catch((error) => setError(error));
};

export const deleteItem = async (database, item) => {
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
