import styles from "./styles.module.scss";

function Component({type = "primary", size = "medium", ...props}) {
  return (
    <button className={`${styles.button} ${styles[type]} ${styles[size]}`} {...props}>
      {props.children}
    </button>
  );
}

export default Component;