const { setDoc, collection, addDoc, doc } = require("firebase/firestore");
const { db } = require("./Firebase");

export const UserLogin = async (user) => {
  await setDoc(doc(collection(db, "users"), user.id), user);
};
