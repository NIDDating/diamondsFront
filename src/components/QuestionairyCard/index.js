import UserComponent from "../UserComponent";
import Heading from "../Heading";
import Tag from "../Tag";
import styles from "./styles.module.scss";
import formatAge from "../../utils/formatAge";

function Component({id, imageSRC, name, status, ethnicity, age, country, city, responsibility, time, ...props}) {
  return (
    <div className={styles.card} {...props}>
      <div className={styles.top}>
        <img src={imageSRC} alt={name} />
        <Tag type={"primary"} label={status} />
      </div>
      <Heading className={styles.name} level={3} seo={true}>
        {name}
      </Heading>
      <div className={styles.rows}>
        <div className={styles.row}>
          <span className={styles.label}>Этнос</span>
          <span className={styles.value}>{ethnicity}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Возраст</span>
          <span className={styles.value}>{formatAge(age)}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Страна</span>
          <span className={styles.value}>{country}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Город</span>
          <span className={styles.value}>{city}</span>
        </div>
      </div>
      <div className={styles.footer}>
        {
          !responsibility ? null : (
            <UserComponent collapseName={true} name={responsibility} />
          )
        }
        <span className={styles.time}>{time}</span>
      </div>
    </div>
  );
}

export default Component;