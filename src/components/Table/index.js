import {Table} from "react-bootstrap";
import styles from "./styles.module.scss";

function Component({labels, rows, rowOnClick, className, ...props}) {
  return (
    <div className={styles.tableWrap}>
      <Table className={`${styles.table} ${className ? className : ""}`} hover {...props}>
        <thead>
        <tr>
          {
            labels.map((item, key) => <th key={key}>{item}</th>)
          }
        </tr>
        </thead>
        <tbody>
        {
          rows.map((item, key) => {
            return (
              <tr key={key} onClick={() => rowOnClick(item.data)}>
                {
                  item.cells.map((item, key) => <td key={key}>{item}</td>)
                }
              </tr>
            );
          })
        }
        </tbody>
      </Table>
      {
        rows.length === 0 ? (
          <div className={styles.noData}>
          <span>
            Нет данных
          </span>
          </div>
        ) : null
      }
    </div>
  );
}

export default Component;