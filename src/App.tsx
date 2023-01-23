import { Routes, Route, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
    <Navbar />
    <Container className="mb-4">
      <Routes>
        <Route path="/react-ts-shopping-cart" element={<Home />} />
        <Route path="/react-ts-shopping-cart/store" element={<Store />} />
        <Route path="/react-ts-shopping-cart/about" element={<About />} />
        {/* <Route path="*" element={<Navigate to="/" replace={true} />} /> */}
      </Routes>
    </Container>
    </ShoppingCartProvider>
  );
}

export default App;
