import { SummaryResult } from "../../data/data";
import Row from "../Row/Row";
import styles from "./summary.module.css";

const Summary = () => {
  return (
    <div className={styles.cardSummary}>
      <div className={styles.title}>Summary</div>
      {SummaryResult.map(item => (
        <Row
          key={item.icon}
          category={item.category}
          score={item.score}
          icon={item.icon}
        />
      ))}
      <a
        className={styles.continue}
        href="#">Continue
      </a>
    </div >
  );
};

export default Summary;
