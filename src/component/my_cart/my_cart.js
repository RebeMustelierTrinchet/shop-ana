import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addToCarrito, decrementFromCarrito, clearCarrito } from "../../redux/cartSlice";
import { selectCartMemoized } from "../../redux/selectors";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import styles from './my_cart.module.css';


const ADMIN_NUMBER = "+5358978430"; // Reemplaza con el número del administrador

const calculateTotal = (cart) => {
  return cart.reduce((total, item) => total + item.price * item.num, 0);
};

export default function Cart() {
  
  const dispatch = useDispatch();
  const miCarrito = useSelector(selectCartMemoized);
  const [customerNumber, setCustomerNumber] = useState("");

  useEffect(() => {
    console.log("Carrito actualizado:", miCarrito);
  }, [miCarrito]);

  const handleIncrement = (product) => {
    dispatch(addToCarrito({ id: product.id }));
  };

  const handleDecrement = (product) => {
    dispatch(decrementFromCarrito({ id: product.id }));
  };



  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Ticket de Compra", 20, 10);
    autoTable(doc, { // Usa autoTable correctamente
      head: [["Producto", "Cantidad", "Precio", "Total"]],
      body: miCarrito.map(item => [item.name, item.num, `$${item.price}`, `$${item.price * item.num}`])
    });
    const total = calculateTotal(miCarrito);
    doc.text(`Total: $${total}`, 20, doc.internal.pageSize.height - 20);
    doc.save("ticket.pdf");
    return doc.output("dataurlstring");

  };
  const handleClearCart = () => {
  dispatch(clearCarrito());
};
  const handleCheckout = () => {
    if (!customerNumber) {
      alert("Por favor, ingrese su número de WhatsApp.");
      return;
    }
    
    const total = calculateTotal(miCarrito);
    const pdfData = generatePDF();
    const mensaje = `📦 *Nuevo Pedido*\n👤 Cliente: ${customerNumber}\n🛒 Productos: \n${miCarrito.map(item => `- ${item.name} x${item.num} ($${item.price * item.num})`).join("\n")}\n💰 Total: $${total}`;
    const urlWhatsApp = `https://wa.me/${ADMIN_NUMBER}?text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsApp, "_blank");
    dispatch(clearCarrito());
  };

  return (
    <div className={styles.cart}>
      <h2 className={styles.title}>Mis Compras</h2>
      <div className={styles.cartItems}>
        {miCarrito.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <img src={item.image} alt={item.name} className={styles.cartItemImage} />
            <div className={styles.cartItemInfo}>
              <h3 className={styles.item_title}>{item.name}</h3>
              
              <div className={styles.quantityControl}>

                <p className={styles.price}>${item.price}</p>

                <button  className={styles.btn} onClick={() => handleDecrement(item)}>-</button>
                <span>{item.num}</span>
                <button className={styles.btn} onClick={() => handleIncrement(item)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.total}>
        <h3>Total: ${calculateTotal(miCarrito)}</h3>
      </div>
      <div className={styles.customerNumberInput}>
        <label>Ingrese su número de WhatsApp:</label>
        <input 
          type="tel" 
          placeholder="+53XXXXXXXXX" 
          value={customerNumber} 
          onChange={(e) => setCustomerNumber(e.target.value)} 
        />
      </div>
      <button className={styles.btn_funct} onClick={handleCheckout}>Comprar Ahora</button>
      <button className={styles.btn_funct} onClick={generatePDF}>Generar ticket</button>
      <button className={styles.btn_funct} onClick={handleClearCart}>Borrar todo</button>
    </div>
  );
}
