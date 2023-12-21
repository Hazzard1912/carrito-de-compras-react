import { useContext } from "react";
import { CartContext } from "../context/CarritoContext";

import "./styles/CarritoCompras.css";

export const CarritoCompras = () => {
  // Obtenemos el estado del carrito y la función para actualizarlo
  const { cartCount, setCartCount } = useContext(CartContext);

  // Creamos las funciones para agregar y quitar productos del carrito
  const agregarAlCarrito = () => {
    setCartCount(cartCount + 1);
  };

  const quitarDelCarrito = () => {
    setCartCount(Math.max(cartCount - 1, 0));
  };

  return (
    <div className="container">
      <h1 className="title">Carrito de Compras</h1>
      <p className="paragraph">
        Productos en el carrito
        <span className="counter">{cartCount}</span>
      </p>
      <div className="button__container">
        <button onClick={agregarAlCarrito} className="btn addButton">
          Agregar al carrito
        </button>
        <button onClick={quitarDelCarrito} className="btn rmvButton">
          Eliminar del carrito
        </button>
      </div>
    </div>
  );
};

// Los componentes podrian ser aun mas modulares, extrayendo el boton a un componente
// independiente, y pasandole como prop la funcion que debe ejecutar al hacer click
// de esa manera, tendriamos un componente reutilizable, que podriamos usar en cualquier
// parte de nuestra aplicación
