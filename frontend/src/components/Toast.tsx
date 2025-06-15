import React from 'react';

import { useEffect, useState } from 'react';
import styles from '../styles/Toast.module.css';

type Props = {
  message: React.ReactNode;
  type?: 'success' | 'error';
  onClose: () => void;
};

const Toast = ({ message, type = 'success', onClose }: Props) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(onClose, 500);
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`${styles.toast + ' toast'} ${styles[type]} ${exiting ? styles.fadeOut : ''}`}>
      <p className={styles.p}>{message}</p>
    </div>
  );
};

export default Toast;