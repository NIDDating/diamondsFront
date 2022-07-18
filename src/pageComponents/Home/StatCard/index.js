import Heading from "../../../components/Heading";
import styles from "./styles.module.scss";

function Component({label, iconSRC, number, color, ...props}) {
  return (
    <div className={styles.statCard} {...props}>
      <div className={styles.top}>
        <img src={iconSRC} alt={label} />
        <span className={styles.number} style={{color}}>
          {number}
        </span>
      </div>
      <Heading seo={false} level={3}>
        {label}
      </Heading>
    </div>
  );
}

export default Component;