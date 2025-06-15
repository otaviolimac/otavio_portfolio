import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/BlogItem.module.css';

interface BlogItemProps {
  title: string;
  date: string;
  tags: string[];
  to: string;
}

const normalizeTag = (tag: string) => tag.toLowerCase().replace(/[^a-z0-9]/g, '');

const BlogItem: React.FC<BlogItemProps> = ({ title, date, tags, to }) => {
  return (
    <div>
      <div className={styles.header}>
        <Link to={to} className={styles.title + ' title'}>{title}</Link>
        <span className={styles.date + ' date'}>{date}</span>
      </div>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag} className={`${styles.tag} ${styles[normalizeTag(tag)] || ''}`}>
            {tag}
          </span>
        ))}
      </div>
      <div className={styles.lineWrapper}>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};

export default BlogItem;