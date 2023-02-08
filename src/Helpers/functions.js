/* import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";

export const getAllProducts = async () => {
  const allProducts = [];
  const querySnapshot = await getDocs(collection(db, "ecommerce"));
  querySnapshot.forEach((doc) => {
    allProducts.push(...doc.data().data);
  });
  return allProducts;
};

const uploadHandler = async (data) => {
    const objToUpload = {
      electronics: [],
      jewelery: [],
      men_clothing: [],
      women_clothing: [],
    };
    products.map((item) => {
      if (item.category === "electronics") {
        objToUpload.electronics.push(item);
      } else if (item.category === "jewelery") {
        objToUpload.jewelery.push(item);
      } else if (item.category === "men's clothing") {
        objToUpload.men_clothing.push(item);
      } else if (item.category === "women's clothing") {
        objToUpload.women_clothing.push(item);
      }
    });

    await setDoc(doc(db, "ecommerce", "women's clothing"), {
      data: objToUpload.women_clothing,
    }); */

import { arrayUnion, doc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase.config";

// Atomically add a new region to the "regions" array field.
/* await updateDoc(washingtonRef, {
      data: arrayUnion({ title: "tshirt", status: "updated" }),
    }); */

// Atomically remove a region from the "regions" array field.
/* await updateDoc(washingtonRef, {
      data: arrayRemove({ title: "tshirt" }),
    }); 
  };*/

const fetchHandler = () => {
  /* const docRef = doc(db, "ecommerce", "products");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log(docSnap.data().electronics);
    } else {
      console.log("No such document!");
    } */
  /* const products = getAllProducts();
    console.log(products); */
};

export const filterPdoructsBySearchValue = (searchValue, products) => {
  const updatedProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(searchValue.toLowerCase());
  });
  return updatedProducts;
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
export const pagination = (currentPage) => {
  let firstElement;
  if (currentPage === 1) {
  }
};

export const addItem = async (newItem, setSubmitting, resetForm) => {
  const newItemRef = doc(db, "ecommerce", newItem.category);
  try {
    await updateDoc(newItemRef, {
      data: arrayUnion(newItem),
    });
    console.log(newItem);
    setSubmitting(false);
    resetForm();
  } catch (error) {
    if (error.message.toLowerCase().includes("no document to update")) {
      console.log("There is No category document");
      await setDoc(doc(db, "ecommerce", newItem.category), {
        data: [{ ...newItem }],
      });
      setSubmitting(false);
      resetForm();
    }
    console.log(error.message);
  }
};
