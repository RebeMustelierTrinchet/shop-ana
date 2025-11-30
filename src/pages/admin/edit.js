import { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { uploadImageToCloudinary } from "../../firebase/cloudinary";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./admin.module.css";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [alt, setAlt] = useState("");
  const [category, setCategory] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setProduct(data);
        setName(data.name);
        setPrice(data.price);
        setDescription(data.description);
        setAlt(data.alt);
        setCategory(data.category);
      } else {
        alert("Producto no encontrado");
        navigate("/admin");
      }
    };
    fetchProduct();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, "products", id);
      let imageUrl = product.image;

      if (selectedFile) {
        imageUrl = await uploadImageToCloudinary(selectedFile);
        if (!imageUrl) throw new Error("No se pudo subir la imagen");
      }

      await updateDoc(docRef, {
        name,
        price: Number(price),
        description,
        alt,
        category,
        image: imageUrl,
      });

      alert("Producto actualizado 💖");
      navigate("/admin");
    } catch (err) {
      console.error(err);
      alert("Error al actualizar el producto");
    }
  };

  if (!product) return <p className={styles.loading}>Cargando producto...</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Editar Producto</h1>
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
        />
        <button type="submit" className={styles.submitBtn}>
          💾 Guardar Cambios
        </button>
      </form>
    </div>
  );
}
