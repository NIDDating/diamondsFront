import Button from "../Button";
import Heading from "../Heading";
import Container from "../Container";
import DesktopOnly from "../DesktopOnly";
import MobileOnly from "../MobileOnly";
import CircleButtonIcon from "../CircleButtonIcon";
import styles from "./styles.module.scss";
import addIconSRC from "../../assets/Icons/add.svg";
import searchIconSRC from "../../assets/Icons/search.svg";

function Component({headings, buttonLabel, buttonOnClick, searchOnClick, setActive, active, ...props}) {
  return (
    <div className={`${styles.pageHeader} ${props.children ? styles.paddingBottom : ""}`} {...props}>
      <Container>
        <div className={styles.top}>
          <div className={styles.left}>
            {
              headings.map((item, key) => (
                <Heading
                  level={1}
                  key={key}
                  className={`${styles.headingLink} ${active === key ? styles.active : styles.inactive}`}
                  onClick={() => setActive(key)}>
                  {item}
                </Heading>
              ))
            }
          </div>
          <div className={styles.right}>
            <MobileOnly>
              <CircleButtonIcon
                type={"secondary"}
                onClick={() => searchOnClick()}
                iconSRC={searchIconSRC}
                alt={"Поиск"}
              />
            </MobileOnly>
            {
              !buttonLabel ? null : (
                <>
                  <DesktopOnly>
                    <Button onClick={buttonOnClick}>{buttonLabel}</Button>
                  </DesktopOnly>
                  <MobileOnly>
                    <CircleButtonIcon onClick={buttonOnClick} iconSRC={addIconSRC} alt={buttonLabel} />
                  </MobileOnly>
                </>
              )
            }
          </div>
        </div>
        <div className={styles.filters}>
          {props.children}
        </div>
      </Container>
    </div>
  );
}

export default Component;