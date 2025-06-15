import React from "react";
import styles from "../styles/IconButton.module.css";

interface IconButtonProps {
  icon: React.ReactNode
  backgroundColor: string
  borderColor: string
  to: string
}

const IconButton: React.FC<IconButtonProps> = ({ icon, backgroundColor, borderColor, to }) => {
  return (
    <a
        href={to}
        target="blank"
        className={styles.button}
        style={{ backgroundColor, borderColor }}
    >
      {icon}
    </a>
  );
};

export default IconButton;