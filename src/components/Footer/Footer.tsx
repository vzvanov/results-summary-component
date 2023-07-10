import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer
      className={styles.footer}
    >
      <div>Challenge by <a href="https://www.frontendmentor.io/">Frontend Mentor</a>. </div>
      <div>Coded by <a href="https://github.com/vzvanov">vzvanov</a></div>
    </footer>
  );
};

export default Footer;
