import React from "react";
import Home from "./containers/Home/Home";
import NavBar from "./components/Navbar/Navbar";
import OrderSection from "./containers/Order/OrderSection";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <OrderSection />
    </div>
  );
}

export default App;
