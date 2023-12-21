import { createContext, useState } from "react";

// Creamos el contexto
export const CartContext = createContext();

// Establecemos el estado inicial del contexto de nuestro carrito
export const CarritoProvider = ({ children }) => {
  
  // Usamos el hook useState para crear el estado del carrito y obtener la función para actualizarlo
  const [cartCount, setCartCount] = useState(0);

  return (
    <CartContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartContext.Provider>
  );
};
