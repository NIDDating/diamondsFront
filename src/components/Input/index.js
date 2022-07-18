import {Form} from "react-bootstrap";
import styles from "./styles.module.scss";

function Component({id, label, type = "text", placeholder = "Введите значение", ...props}) {
  return (
    <Form.Group className={styles.wrap} controlId={id}>
      {
        !label ? null : (
          <Form.Label>
            {label}
          </Form.Label>
        )
      }
      <Form.Control
        className={styles.input}
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </Form.Group>
);
}

export default Component;