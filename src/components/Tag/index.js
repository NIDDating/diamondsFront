import {Badge} from "react-bootstrap";
import styles from "./styles.module.scss";

function Component({type = "primary", ...props}) {
  return (
    <div className={styles.wrap}>
      <Badge className={`${styles.tag} ${styles[type]}`} pill {...props}>
        {props.label}
      </Badge>
    </div>
  );
}

export default Component;