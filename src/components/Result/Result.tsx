import styles from "./result.module.css";

const Result = () => {
  return (
    <div className={styles.result}>
      <h1 className={styles.title}>Your Result</h1>
      <div className={styles.score}>
        <div className={styles.scoreUp}>76</div>
        <div className={styles.scoreDown}>of 100</div>
      </div>
      <div className={styles.greeting}>Great</div>
      <div className={styles.info}>You scored higher than 65% of the people who have taken these tests.</div>
    </div>
  );
};

export default Result;
