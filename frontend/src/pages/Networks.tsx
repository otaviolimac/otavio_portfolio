import ArticleLayout from "../components/ArticleLayout";
import IconButton from "../components/IconButton.tsx";
import { FaDiscord, FaGithub, FaInstagram } from "react-icons/fa";
import styles from '../styles/IconButton.module.css';

function Networks() {
    return (
        <ArticleLayout
            title="Redes"
            content={
                <>
                <h1 className={styles.text + ' text'}>Olá, deixei minhas redes aqui, para que você possa falar comigo! Se preferir, me envie um email na página principal.</h1>
                <IconButton
                    icon={<FaGithub color="white" size={24} />}
                    backgroundColor="#1c1c1c"
                    borderColor="#1c1c1c"
                    to={"https://github.com/otaviolimaco"}
                />
                <IconButton
                    icon={<FaInstagram color="white" size={24} />}
                    backgroundColor="#8c07aa"
                    borderColor="#8c07aa"
                    to={"https://www.instagram.com/limasc7/?next=%2F"}
                />
                <IconButton
                    icon={<FaDiscord color="white" size={24} />}
                    backgroundColor="#5865F2"
                    borderColor="#5865F2"
                    to={"https://discord.com/users/931589389455360091"}
                />
                </>
            }
        />
    )
}
  
export default Networks;