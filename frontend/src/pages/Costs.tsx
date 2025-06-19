import { FaGithub } from "react-icons/fa";
import ArticleLayout from "../components/ArticleLayout";
import IconButton from "../components/IconButton";
import styles from '../styles/IconButton.module.css';

function Costs() {
    return (
        <ArticleLayout
            title={"Costs"}
            content={
                <>
                <p className={styles.text + ' text'}>Costs é um gerenciador de projetos, feito com um curso de React. Que você pode criar, editar, dar serviços e deletar esses projetos. Um projeto full-stack que foi ótimo pro meu aprendizado.</p>
                <span className={styles.text + ' text'}>Gostou do projeto? Ele é open-source! Você pode verifica-lo no GitHub, ou dar uma olhada no canal "<a className={styles.youtube_link + ' text'} href="https://www.youtube.com/watch?v=FXqX7oof0I4&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO" target="blank">Hora de Codar</a>" no YouTube!</span>
                <IconButton
                    icon={<FaGithub color="white" size={24} />}
                    backgroundColor="#1c1c1c"
                    borderColor="#1c1c1c"
                    to={"https://github.com/otavioco/costs"}
                />
                </>
            }
        />
    )
}

export default Costs;