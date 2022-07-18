import {Pagination} from "react-bootstrap";
import styles from "./styles.module.scss";
import expandLeftSVG from "../../assets/Icons/left.svg";
import expandRightSVG from "../../assets/Icons/right.svg";

function Component({items, active = 0, goTo, ...props}) {
  return (
    <div className={styles.wrap}>
      <Pagination className={styles.pagination} {...props}>
        <Pagination.Prev onClick={() => goTo(false)} disabled={items[0] === active}>
          <img src={expandLeftSVG} alt="prev" />
        </Pagination.Prev>
        {
          items.map((item, key) => (
            <Pagination.Item
              key={key}
              onClick={() => goTo(item)}
              className={active === item ? styles.active : ""}
              active={active === item}>
              {item}
            </Pagination.Item>
          ))
        }
        <Pagination.Next onClick={() => goTo(true)} disabled={items[items.length - 1] === active}>
          <img src={expandRightSVG} alt="next" />
        </Pagination.Next>
      </Pagination>
    </div>
  );
}

export default Component;