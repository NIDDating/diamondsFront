import Button from "../Button";
import Overlay from "../Overlay";
import Heading from "../Heading";
import styles from "./styles.module.scss";
import closeIconSVG from "../../assets/Icons/close.svg";
import {AnimatePresence, motion} from "framer-motion";
import {addNoScrollBody, removeNoScrollBody} from "../../utils/noScrollBody";

function Component({isVisible, title, onClose, children, className, buttons = [], ...props}) {
  if (isVisible) {
    addNoScrollBody();
  } else {
    removeNoScrollBody();
  }

  return (
    <AnimatePresence>
      {
        isVisible && (
          <>
            <motion.div
              initial={{x: "100%"}}
              animate={{x: 0}}
              exit={{x: "100%"}}
              transition={{type: "spring", bounce: 0, duration: 0.4}}
              className={`${styles.sidebar} ${className ? className : ""}`} {...props}>
              <div className={styles.header}>
                <Heading seo={false} level={3}>
                  {title}
                </Heading>
                <div className={styles.buttonClose} onClick={onClose}>
                  <img className={styles.closeBtn} alt={"close"} src={closeIconSVG} />
                </div>
              </div>
              <div className={styles.body}>
                {children}
                <div className={styles.buttons}>
                  {
                    buttons.map((item, i) => (
                      <Button key={i} type={item.type} onClick={item.onClick}>
                        {item.label}
                      </Button>
                    ))
                  }
                </div>
              </div>
            </motion.div>
            <Overlay onClick={onClose} />
          </>
        )
      }
    </AnimatePresence>
  );
}

class ButtonItem {
  constructor(label, onClick, type) {
    this.type = type;
    this.onClick = onClick;
    this.label = label;
  }
}

export default Component;
export {ButtonItem};