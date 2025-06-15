import ArticleLayout from "../components/ArticleLayout";
import styles from '../styles/BlogItem.module.css'
import ProjectItem from "../components/Projectitem";

function Projects() {
    return (
        <ArticleLayout
            title="Projetos"
            content={
                <>
                    <p className={styles.text + ' text'}>2024</p>
                    <ProjectItem text={"Costs"} date={"20/08"} to={'/projects/costs'}/>
                </>
            } 
        />
    )
}
  
export default Projects;