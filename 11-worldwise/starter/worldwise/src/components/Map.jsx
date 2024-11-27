import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // to read the queries
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  setSearchParams;

  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <h1>
        Position: {lat},{lng}
      </h1>
    </div>
  );
};

export default Map;
