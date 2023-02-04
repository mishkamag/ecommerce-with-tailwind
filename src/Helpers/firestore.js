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
