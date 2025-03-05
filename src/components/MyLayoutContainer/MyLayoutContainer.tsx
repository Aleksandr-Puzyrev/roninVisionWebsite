import React, { ReactNode } from "react";
import styles from "./MyLayoutContainer.module.css";
interface MyLayoutContainerProps {
  children: ReactNode;
}

const MyLayoutContainer = ({ children }: MyLayoutContainerProps) => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default MyLayoutContainer;
