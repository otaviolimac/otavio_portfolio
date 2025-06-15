import React from 'react';
import styles from '../styles/ProjectItem.module.css';
import { Link } from 'react-router-dom';

interface ProjectItemProps {
  text: string
  date: string
  to: string
}

const ProjectItem: React.FC<ProjectItemProps> = ({ text, date, to }) => {
  return (
    <div className={styles.container}>
        <Link to={to} className={styles.link}>
            <div className={styles.row}>
                <span className={styles.text + ' text'}>{text}</span>
                <span className={styles.date + ' date'}>{date}</span>
            </div>
        </Link>
    </div>
  );
};

export default ProjectItem;