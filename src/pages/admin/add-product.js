import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { uploadImageToCloudinary } from "../../firebase/cloudinary";
import styles from "./admin.module.css";
import { doc, setDoc } from "firebase/firestore";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [alt, setAlt] = useState("");
  const [category, setCategory] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!selectedFile) {
    return alert("Selecciona una imagen antes de enviar.");
  }

  let imageUrl;
  try {
    imageUrl = await uploadImageToCloudinary(selectedFile);
    if (!imageUrl) throw new Error("No se recibió URL de Cloudinary");
  } catch (err) {
    console.error("Error subiendo imagen a Cloudinary:", err);
    return alert("No se pudo subir la imagen. Revisa Cloudinary y el archivo.");
  }

  const newProduct = {
    // id: Date.now().toString(),
    name,
    price: Number(price),
    description,
    alt,
    category,
    image: imageUrl,
    inCart: false,
    num: 0,
  };

  try {
    await addDoc(collection(db, "products"), newProduct);
    alert("Producto agregado con éxito 💖");

    // Limpiar formulario
    setName("");
    setPrice("");
    setDescription("");
    setAlt("");
    setCategory("");
    setSelectedFile(null);
  } catch (err) {
    console.error("Error guardando en Firestore:", err);
    alert("No se pudo guardar el producto en Firestore");
  }
};
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Agregar Nuevo Producto</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Texto alternativo (alt)"
          value={alt}
          onChange={(e) => setAlt(e.target.value)}
        />
        <input
          type="text"
          placeholder="Categoría"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
          required
        />
        <button type="submit">➕ Agregar Producto</button>
      </form>
    </div>
  );
}
