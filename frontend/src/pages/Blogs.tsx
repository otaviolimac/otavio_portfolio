import ArticleLayout from "../components/ArticleLayout";
import BlogItem from "../components/BlogItem";
import styles from '../styles/BlogItem.module.css';

function Blogs() {
    return (
        <ArticleLayout 
            title="Blogs"
            content={
                <>
                    <p className={styles.text + ' text'}>2025</p>
                    <BlogItem
                        title={"Carreira com 14 anos"}
                        date="24/04"
                        tags={[ 'Node.js' ,'TypeScript']}
                        to="/blogs/courses"
                    />
                    <BlogItem
                        title={"Meu começo na área"}
                        date="07/06"
                        tags={['JavaScript', 'Front-End']}
                        to="/blogs/tech"
                    />
                </>
            }
        />
    )
}
  
export default Blogs;