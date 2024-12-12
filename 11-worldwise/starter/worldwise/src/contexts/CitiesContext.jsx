import { createContext, useState, useEffect, useContext } from "react";

const BASE_URL = "http://localhost:9000";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const rest = await fetch(`${BASE_URL}/cities`);
        const data = await rest.json();
        console.log(data);

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

  async function getCity(id) {
    try {
      setIsLoading(true);
      const rest = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await rest.json();
      setCurrentCity(data);
    } catch (error) {
      alert("There was an error loading data ...");
    } finally {
      setIsLoading(false);
    }
  }

  async function createCity(newCity) {
    try {
      setIsLoading(true);
      const rest = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await rest.json();
      setCities((cities) => [...cities, data]);

      console.log(data);
    } catch (error) {
      alert("There was an error creating city ...");
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteCity(id) {
    try {
      setIsLoading(true);
      await fetch(`${BASE_URL}/cities/${id}`, { method: "DELETE" });
      setCities((cities) => cities.filter((city) => city.id !== id));
    } catch (error) {
      alert("There was an error deleting data ...");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {/*children here is like giving provider to the components 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product" element={<Product />} /> */}
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) {
    throw new Error("CitiesContext was used outside the citiesProvider");
  }
  return context;
}

export { CitiesProvider, useCities };
