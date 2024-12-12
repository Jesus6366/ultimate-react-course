/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useCities } from "../contexts/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const CityItem = ({ city }) => {
  const flagemojiToPNG = (flag) => {
    let countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
      .map((char) => String.fromCharCode(char - 127397).toLowerCase())
      .join("");

    return (
      <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
    );
  };

  const { currentCity, deleteCity } = useCities();

  console.log(city.id);

  function handleClick(e) {
    e.preventDefault();
    deleteCity(city.id);
  }

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          city.id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
      >
        <span className={styles.emoji}>{flagemojiToPNG(city.emoji)}</span>
        <h3 className={styles.name}>{city.name}</h3>
        <time className={styles.date}>{formatDate(city.date)}</time>
        <button className={styles.deleteBtn} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
};

export default CityItem;
