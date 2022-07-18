import Label from "../../../components/Label";
import styles from "./styles.module.scss";
import {Row, Col} from "react-bootstrap";
import QuestionairyCard from "../../../components/QuestionairyCard";

function Component({data, ...props}) {
  return (
    <div className={styles.wrap} {...props}>
      <Label>Новые заявки</Label>
      <Row>
        <Col lg={4} md={6} sm={12} xs={12}>
          <QuestionairyCard
            name={"Константин Константинопольский"}
            status={"VIP"}
            imageSRC={"https://api.diamondsmatch.org/storage/questionnaire/photos/sign_a0a41123fb83a8b2ff1c60af0bd9e436/1f0898bc05eb94d9bda4678acb2f3b15.jpeg"}
            country={"Россия"}
            city={"Ростов-на-Дону"}
            age={"20 лет"}
            ethnicity={"Азиат"}
            responsibility={"Николай Иванов"}
            time={"5 минут назад"}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Component;