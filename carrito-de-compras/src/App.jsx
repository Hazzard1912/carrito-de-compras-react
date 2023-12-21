import "./App.css";
import { CarritoCompras } from "./components/CarritoCompras";
import { CarritoProvider } from "./context/CarritoContext";

function App() {
  return (
    
    // CarritoProvider es el componente que provee el contexto a todos los componentes hijos
    <CarritoProvider>
      <CarritoCompras />
    </CarritoProvider>
  );
}

export default App;
