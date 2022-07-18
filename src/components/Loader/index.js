import BeatLoader from "react-spinners/BeatLoader";
import styles from "./styles.module.scss";

function Component({...props}) {
  return (
    <div className={styles.wrap}>
      <BeatLoader
        color={"#E6B43F"}
        {...props}
      />
    </div>
  );
}

export default Component;