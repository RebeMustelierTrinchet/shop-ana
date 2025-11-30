import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const deleteProduct = async (productId) => {
 try {
    await deleteDoc(doc(db, "products", productId));
    alert("Producto eliminado correctamente");
  } catch (error) {
    console.error("Error eliminando producto:", error);
    alert("Error al eliminar el producto");
  }
};
