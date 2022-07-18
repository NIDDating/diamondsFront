import Label from "../../../components/Label";
import styles from "./styles.module.scss";
import Table from "../../../components/Table";

function Component({data, ...props}) {
  return (
    <div className={styles.wrap} {...props}>
      <Label>Новые заявки</Label>
      <Table
        className={styles.table}
        labels={["Имя", "Email", "Номер телефона", "Услуги"]}
        rows={data}
        rowOnClick={() => alert("Click")}
      />
    </div>
  );
}

export default Component;