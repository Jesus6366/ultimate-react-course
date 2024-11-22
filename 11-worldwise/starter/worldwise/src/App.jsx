import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFoung from "./pages/PageNotFoung";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<AppLayout />}>
          {/*nested routes */}
          <Route path="cities" element={<p>List of cities</p>} />
          <Route path="countries" element={<p>Countries </p>} />
          <Route path="form" element={<p>Form </p>} />
        </Route>
        <Route path="*" element={<PageNotFoung />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
