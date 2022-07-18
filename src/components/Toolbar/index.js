import styles from "./styles.module.scss";
import DropdownSelect, {DropdownItem} from "../DropdownSelect";
import limitItems from "../../utils/limit";
import sortItems from "../../utils/sort";

function Component({limit, setLimit, sort, setSort, ...props}) {
  return (
    <div className={styles.toolbar} {...props}>
      <div className={styles.left}>
        <div className={styles.dropdownGroup}>
          <span className={styles.label}>Показывать по</span>
          <DropdownSelect
            className={styles.dropdown}
            value={limit}
            onSelect={(label, value, key) => setLimit(new DropdownItem(label, value))}
            items={limitItems}
          />
        </div>
      </div>
      <div className={styles.right}>
        <DropdownSelect
          alignRight={true}
          className={styles.dropdown}
          value={sort}
          onSelect={(label, value, key) => setSort(new DropdownItem(label, value))}
          items={sortItems}
        />
      </div>
    </div>
  );
}

export default Component;