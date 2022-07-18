import styles from "./styles.module.scss";

function Component({size = "medium", className, letters,...props}) {
  return (
    <div className={`${styles.avatar} ${styles[size]} ${className ? className : ""}`} {...props}>
      {letters}
    </div>
  );
}

export default Component;