import Result from "../Result/Result";
import Summary from "../Summary/Summary";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <Result />
      <Summary />
    </div>
  );
};

export default Card;
