import {DropdownButton, Dropdown, Form} from "react-bootstrap";
import styles from "./styles.module.scss";

function Component({label, value, items = [], onSelect, type = "text", className, ...props}) {
  const _value = value;

  return (
    <div className={label ? styles.wrap : ""}>
      {
        !label ? null : (
          <Form.Label>
            {label}
          </Form.Label>
        )
      }
      <DropdownButton title={_value.label} className={`${styles.dropdown} ${styles[type]} ${className ? className : ""}`} {...props}>
        {
          items.map(({label, value}, key) =>
            <Dropdown.Item
              onClick={() => onSelect(label, value, key)}
              key={key}
              children={label}
              active={_value.value === value}
              className={`${styles.item} ${_value.value === value ? styles.active : null}`}
            />
          )
        }
      </DropdownButton>
    </div>
  );
}

class DropdownItem {
  constructor(label, value) {
    this.label = label;
    this.value = value;
  }
}

export {DropdownItem}
export default Component;
