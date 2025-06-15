import React from "react";

import { MdKeyboardArrowLeft } from "react-icons/md";
import {  useNavigate  } from 'react-router-dom';
import Footer from '../components/Footer';

import styles from '../styles/ArticleLayout.module.css';

interface ArticleLayoutProps {
    title: string
    content?: React.ReactNode
    inside?: boolean
}

function ArticleLayout({ title, content, inside }: ArticleLayoutProps) {

    const navigate = useNavigate();
    
    const goBack = () => {
        navigate(-1);
    };

    return (
        <>
             <div className={styles.defaultHead}> 
                <button className={styles.arrow + ' arrow'} onClick={goBack}>
                    <MdKeyboardArrowLeft />
                </button>
                <div className={styles.centered_text}>
                    <h2 className={styles.title + ' title'}>{title}</h2>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.default}>
                    <div className={styles.lineWrapper}>
                        <div className={styles.line}></div>
                    </div>
                    {content}
                </div>
            </div>
            <div className={styles.footer}>
                <Footer inside={inside}/>
            </div>
        </>
    )
}

export default ArticleLayout;