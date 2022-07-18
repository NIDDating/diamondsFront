import StatCard from "../StatCard";
import {Row, Col} from "react-bootstrap";
import styles from "./styles.module.scss";
import homeIcon1SRC from "../../../assets/Icons/homeIcon1.svg";
import homeIcon2SRC from "../../../assets/Icons/homeIcon2.svg";
import homeIcon3SRC from "../../../assets/Icons/homeIcon3.svg";
import homeIcon4SRC from "../../../assets/Icons/homeIcon4.svg";
import Label from "../../../components/Label";

function Component({name, allQuestionaires, allAppliactions, newQuestionaires, newApplications, ...props}) {
  return (
    <div className={styles.stats} {...props}>
      <Label>Статистика</Label>
      <Row>
        <Col md={3} sm={6} xs={12} className={styles.col}>
          <StatCard iconSRC={homeIcon1SRC} label={"Всего анкет"} number={allQuestionaires} color={"#E9992B"} />
        </Col>
        <Col md={3} sm={6} xs={12} className={styles.col}>
          <StatCard iconSRC={homeIcon2SRC} label={"Всего контактов"} number={allAppliactions} color={"#4291EE"} />
        </Col>
        <Col md={3} sm={6} xs={12} className={styles.col}>
          <StatCard iconSRC={homeIcon3SRC} label={"Новых анкет"} number={newQuestionaires} color={"#EA7BB7"} />
        </Col>
        <Col md={3} sm={6} xs={12} className={styles.col}>
          <StatCard iconSRC={homeIcon4SRC} label={"Новых заявок"} number={newApplications} color={"#3AB454"} />
        </Col>
      </Row>
    </div>
  );
}

export default Component;