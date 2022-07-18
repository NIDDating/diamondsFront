import {useEffect, useState} from "react";
import Heading from "../../../components/Heading";
import Container from "../../../components/Container";
import styles from "./styles.module.scss";

function Component({name, ...props}) {
  let [timestamp, setTimestamp] = useState(Date.now());

  let date = new Date(timestamp);

  const getDate = (date) => date.toLocaleString("ru", {
    month: "long",
    day: "numeric",
    weekday: "long"
  });
  const getTime = (date) => date.toLocaleString("ru", {
    hour: "numeric",
    minute: "numeric"
  });

  useEffect(() => {
    let timer = setInterval(() => setTimestamp(Date.now()), 60 * 1000);

    return () => {
      clearTimeout(timer);
    };
  })

  return (
    <div className={styles.pageHeader} {...props}>
      <Container>
        <div className={styles.top}>
          <div className={styles.left}>
            <Heading
              level={1}
              className={styles.headingLink}>
              Добрый день, {name}!
            </Heading>
            <div className={styles.date}>
              <span>
                {`${getDate(date).split(',')[1]}, ${getDate(date).split(',')[0].toLowerCase()}`}
              </span>
              <span className={styles.dot}>
                •
              </span>
              <span>
                {getTime(date)}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Component;