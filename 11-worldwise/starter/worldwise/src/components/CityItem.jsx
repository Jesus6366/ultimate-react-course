import styles from "./CityItem.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const CityItem = ({ city }) => {
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{city.emoji}</span>
      <h3>{city.name}</h3>
      <time className={styles.date}>{formatDate(city.date)}</time>
    </li>
  );
};

export default CityItem;