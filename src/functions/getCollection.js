import { initializeDb } from "./";

export const getCollection = async (params) => {
  const db = initializeDb();
  // const { db, collectionName, dispatch, dispatchType } = params;
  const { collectionName, setData } = params;

  try {
    const snapshot = await db.collection(collectionName).get();
    const collection = snapshot.docs;

    setData(collection);
    // dispatch({ type: dispatchType, payload: data });
    // return data;
  } catch (error) {
    return { success: "false", errorMessage: "error.message" };
  }
};
