import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFoung from "./pages/PageNotFoung";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import { useEffect } from "react";
import { useState } from "react";

const BASE_URL = "http://localhost:9000";

function App() {
  const [cities, setCities] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // let isMounted = true; // Track component mount status
    async function fetchCities() {
      try {
        setIsLoading(true);
        const rest = await fetch(`${BASE_URL}/cities`);
        const data = await rest.json();
        setCities(data);
      } catch (error) {
        alert("There was an error loading data ...");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();

    // return () => {
    //   isMounted = false; // Cleanup flag when component unmounts
    // };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<AppLayout />}>
          {/*index route (default nested route) */}
          <Route
            index
            element={<CityList cities={cities} isLoading={isLoading} />}
          />

          {/*nested routes */}
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route path="countries" element={<p>Countries </p>} />
          <Route path="form" element={<p>Form </p>} />
        </Route>
        <Route path="*" element={<PageNotFoung />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
