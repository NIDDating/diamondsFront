import styles from "./styles.module.scss";

function Component({children}) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

export default Component;