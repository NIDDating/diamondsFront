import styles from "./styles.module.scss";
import {motion} from "framer-motion";

function Component({...props}) {
  return (
    <motion.div
      initial={{opacity: "0%"}}
      animate={{opacity: "100%"}}
      exit={{opacity: "0%"}}
      transition={{type: "spring", bounce: 0, duration: 0.4}}
      className={styles.overlay}
      {...props}
    />
  );
}

export default Component;