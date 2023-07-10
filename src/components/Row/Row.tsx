import GlobalSvgSelector from "../../assets/images/GlobalSvgSelector";
import styles from "./row.module.css";

interface Props {
  category: string;
  score: number;
  icon: string;
}

const Row = ({ category, score, icon }: Props) => {

  const getClassName = (id: string) => {
    let name = styles.row;
    name += ' ';
    name += styles[id];
    return name;
  }

  return (
    <div className={getClassName(icon)}>
      <div className={styles.left}>
        <GlobalSvgSelector id={icon} />
        {category}
      </div>
      <div>
        <span className={styles.result}>{score}</span>
        <span className={styles.devider}>/</span>
        <span className={styles.summ}>100</span>
      </div>
    </div>
  );
};

export default Row;