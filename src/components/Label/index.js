import {Form} from "react-bootstrap";
import styles from "./styles.module.scss";

function Component({...props}) {
  return (
    <Form.Label className={styles.label} {...props}>
      {props.children}
    </Form.Label>
  );
}

export default Component;