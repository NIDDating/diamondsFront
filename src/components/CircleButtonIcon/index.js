import styles from "./styles.module.scss";

function Component({type = "primary", iconSRC, alt, ...props}) {
  return (
    <button className={`${styles.button} ${styles[type]}`} {...props}>
      <img src={iconSRC} alt={alt} />
    </button>
  );
}

export default Component;