import styles from "./styles.module.scss";
import UserAvatar from "../UserAvatar";

function Component({name, collapseName, ...props}) {
  let splitted = name.split(" ");
  let letters = "";
  let collapse = "";

  if (splitted.length !== 0) {
    if (splitted[0].length > 0) {
      letters += splitted[0][0];
      collapse = splitted[0][0];
    }

    if (splitted[1] && splitted[1].length > 0) {
      letters += splitted[1][0];
      collapse += ". " + splitted[1];
    }
  }

  return (
    <span className={styles.userLink} {...props}>
      <UserAvatar
        className={styles.avatar}
        letters={letters}
      />
      {collapseName ? collapse : name}
    </span>
  );
}

export default Component;