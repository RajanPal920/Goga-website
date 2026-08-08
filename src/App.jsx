import React from "react";
import Navbar from "./components/layout/Navbar";

import Footer from "./components/layout/Footer";

import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-[var(--navbar-height)]">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default App;
