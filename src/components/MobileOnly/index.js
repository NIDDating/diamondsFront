import styles from "./styles.module.scss";

function Component({...props}) {
  return (
    <div className={styles.mobileOnly} {...props}>
      {props.children}
    </div>
  );
}

export default Component;