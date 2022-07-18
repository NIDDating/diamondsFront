import styles from "./styles.module.scss";

function Component({seo = false, level = 1, children, className, ...props}) {
  let classNames = `${styles.heading} ${className ? className : ""}`;

  if (seo) {
    switch (level) {
      case 1:
      default:
        return (<h1 className={`${classNames} ${styles["level-" + level]}`} {...props} {...props}>{children}</h1>);
      case 2:
        return (<h2 className={`${classNames} ${styles["level-" + level]}`} {...props} {...props}>{children}</h2>);
      case 3:
        return (<h3 className={`${classNames} ${styles["level-" + level]}`} {...props} {...props}>{children}</h3>);
    }
  } else {
    return (<span className={`${classNames} ${styles["level-" + level]}`} {...props}>{children}</span>);
  }
}

export default Component;