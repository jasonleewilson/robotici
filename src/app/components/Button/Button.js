import styles from "../Button/Button.module.css";

const Button = ({ text }) => {
  return <button className={styles.button1}>{text}</button>;
};

export default Button;
